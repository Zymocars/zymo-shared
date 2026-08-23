/**
 * Callable: partnerGetBookings
 *
 * Backend implementation:
 *   zymo-backend/functions/triggers/partnerGetBookings.js line 34.
 *
 * Returns all bookings assigned to the calling partner (via request.auth.uid).
 * Pending-status bookings have contact info redacted server-side; Firestore
 * Timestamp fields are serialized to ISO strings.
 *
 * 2026-08-22 pickup verification: `pickupOtp` + `returnOtp` are stripped
 * UNCONDITIONALLY from every booking (the whole point of the Z9HV87 fraud
 * fix — partner must never see the OTP). All other verification fields
 * (`pickupVerificationEnabled`, `pickupOtpVersion`, `returnOtpVersion`,
 * `pickupOtpBypassAcknowledgedAt`, etc.) flow through so UI can drive the
 * OTP-entry / bypass modal state machine.
 */

export interface PartnerBookingSummary {
  id: string;
  vendorId: string;
  status: 'pending' | 'accepted' | 'ongoing' | 'completed' | 'cancelled';
  createdAt: string;
  customerSince?: string | null;
  [k: string]: unknown;
}

// Empty request — server derives everything from request.auth.uid.
// Type alias (not interface) avoids the eslint no-empty-interface rule
// while still expressing "no payload fields expected."
export type PartnerGetBookingsRequest = Record<string, never>;

export interface PartnerGetBookingsResponse {
  bookings: PartnerBookingSummary[];
  // 2026-08-22 pickup verification — top-level kill-switch state propagated
  // to Zymo-Partner UI so an emergency `enforceChecklist=false` flip rescues
  // in-flight bookings within the 15s cache TTL (UI hides OTP modal + falls
  // back to legacy mark_*_up flow without OTP entry).
  pickupVerification?: {
    enforceChecklist: boolean;
  };
}
