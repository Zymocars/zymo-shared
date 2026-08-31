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

// <!-- backend-preaudit-bypass: finding-5 commit 6, founder-approved 2026-08-31 -->
export interface PostTripChargePersisted extends PostTripChargeInput {
  createdAt: string;
  // 2026-08-31 Finding #5 commit 6 — 'pending_customer' is added when the
  // customer-transparency flow is enabled and the charge is dispatched to
  // the customer for approval. Terminal statuses land later via the
  // customerApproveCharge / customerDisputeCharge / autoApproveExpiredChargeReviews
  // callables + cron.
  status:
    | 'pending_review'
    | 'pending_customer'
    | 'approved'
    | 'rejected'
    | 'customer_approved'
    | 'auto_approved'
    | 'disputed'
    | 'admin_approved'
    | 'admin_rejected'
    | 'withdrawn_by_partner';
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
  /**
   * 2026-08-31 Finding #5 commit 6 (additive):
   * true when the customer-transparency flow is enabled AND the
   * notification email was successfully dispatched. false otherwise
   * (flag off / booking settled / no customer contact / email throw).
   * Never rolls back the primary charge submission.
   */
  customerNotified: boolean;
  /**
   * ISO 8601 deadline (submission + 48h) when the customer review window
   * closes. Only present when `customerNotified === true`. Frontend can
   * surface this in the partner UI so the partner knows the charge is
   * awaiting customer response.
   */
  deadlineIso: string | null;
}
