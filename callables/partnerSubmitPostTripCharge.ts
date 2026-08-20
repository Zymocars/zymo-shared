/**
 * Callable: partnerSubmitPostTripCharge
 *
 * Source of truth for the request/response shape of the partner post-trip
 * charge submission callable. Imported by frontend consumers
 * (zymo-web, Zymo-Partner) for type-checking; backend (CJS runtime) does
 * not import these types but MUST keep the runtime shape in sync.
 *
 * Backend implementation:
 *   zymo-backend/functions/triggers/partnerPostTripActions.js
 *   `exports.partnerSubmitPostTripCharge` at line 297.
 */

export type PostTripChargeType =
  | 'fuel'
  | 'cleaning'
  | 'damage'
  | 'toll'
  // Portal (Zymo-Partner Bookings.tsx PostTripCharge interface line 187-188)
  // exposes these two additional categories in the partner-facing UI.
  // Included here so the shared callable-request type accepts Portal
  // payloads. Backend Zod validator at
  // functions/callables/partnerSubmitPostTripCharge.js should mirror this
  // union — flagged as follow-up (backend currently rejects fastag/challan).
  | 'fastag'
  | 'challan'
  | 'other';

export interface PostTripChargeInput {
  type: PostTripChargeType;
  amount: number;
  description?: string;
  evidenceUrl?: string | null;
}

export interface PartnerSubmitPostTripChargeRequest {
  bookingId: string;
  charge: PostTripChargeInput;
}

export interface PostTripChargePersisted extends PostTripChargeInput {
  createdAt: string;
  status: 'pending_review' | 'approved' | 'rejected';
  submittedUnderUnlock?: {
    unlockedBy: string | null;
    unlockedAt: string | null;
    reason: string | null;
  };
}

export interface PartnerSubmitPostTripChargeResponse {
  success: true;
  chargeIndex: number;
  charge: PostTripChargePersisted;
  unlockConsumed: boolean;
}
