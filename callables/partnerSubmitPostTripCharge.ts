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

// 2026-08-15 — matched to backend VALID_CHARGE_TYPES at
// zymo-backend/functions/triggers/partnerPostTripActions.js:57. Prior
// shape had 'toll' + missing 'fastag' + 'challan' — backend has
// accepted the current list since the callable shipped in Session 104.
export type PostTripChargeType =
  | 'fastag'
  | 'challan'
  | 'damage'
  | 'fuel'
  | 'cleaning'
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
