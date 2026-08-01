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
