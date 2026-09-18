/**
 * Callable: partnerUpdateBookingStatus
 *
 * State-machine transitions for partner-owned bookings. `customer_no_show`
 * requires a Firebase Storage photo URL as proof; `reject` requires a
 * rejection reason string.
 *
 * Backend implementation:
 *   `exports.partnerUpdateBookingStatus` in zymo-backend/functions/triggers/partnerBookingActions.js.
 */

export type PartnerBookingAction =
  | 'accept'
  | 'reject'
  | 'start_trip'
  | 'complete_trip'
  | 'customer_no_show'
  | 'partner_cancel'
  // The backend accepts the actions listed in VALID_ACTIONS in
  // zymo-backend/functions/triggers/partnerBookingActions.js; a value in
  // this union that is missing there is refused with invalid-argument.
  | 'mark_picked_up'
  | 'mark_returned'
  // Stamps pickupOtpBypassAcknowledgedAt without changing booking status.
  // Valid only on an accepted booking enrolled in pickup verification; the
  // cooldown applies when mark_picked_up with bypassOtp:true fires next.
  | 'bypass_acknowledge';

export interface PartnerUpdateBookingStatusRequest {
  bookingId: string;
  action: PartnerBookingAction;
  rejectionReason?: string;
  proofPhotoUrl?: string;
  // 2026-08-22 pickup verification — OTP submission fields. Required by
  // backend when booking.pickupVerificationEnabled === true AND
  // AdminSettings/pickupVerification.enforceChecklist === true (master switch).
  // - otp / otpVersion → required for standard OTP path on mark_picked_up + mark_returned
  // - bypassOtp:true   → skip OTP check (requires prior bypass_acknowledge + 60s cooldown)
  // - bypassReason     → required for both bypass_acknowledge AND mark_*_up/_returned with bypassOtp:true
  otp?: string;
  otpVersion?: number;
  bypassOtp?: boolean;
  bypassReason?: string;
}

export interface PartnerUpdateBookingStatusResponse {
  success: true;
  bookingId: string;
  // `newStatus` + `updatedAt` populated for status-transition actions.
  // `bypass_acknowledge` returns `phase`, `acknowledgedAt`, `cooldownMs` instead.
  newStatus?: string;
  updatedAt?: string;
  phase?: 'pickup' | 'return';
  acknowledgedAt?: string;
  cooldownMs?: number;
  // Session 166 Sprint 1 H16 — on `accept`, if pickup verification enrolled,
  // backend returns these so frontend can merge into local booking cache.
  // Without them, next handleMarkPickedUp reads stale
  // pickupVerificationEnabled=undefined → skips OTP modal → backend rejects.
  customerPhone?: string | null;
  customerEmail?: string | null;
  pickupVerificationEnabled?: boolean;
  pickupOtpVersion?: number;
}
