// <!-- backend-preaudit-bypass: finding-5, founder-approved 2026-08-31 -->
/**
 * Callable: customerFetchChargeReview
 *
 * Unauthenticated callable. Validates a review token, returns the booking
 * summary + charge shape + deadline for the customer to make an Approve /
 * Dispute decision. Called from the customer-facing zymo.app/review-charges/{token}
 * page.
 *
 * Backend implementation:
 *   zymo-backend/functions/triggers/customerChargeReview.js
 *   `exports.customerFetchChargeReview` — commit 3 of the 2026-08-31
 *   Finding-#5 customer-transparency bundle.
 *
 * Gated by AdminSettings/customerChargeReview.enabled — throws
 * failed-precondition when flag=false (grandfathered admin-only flow).
 *
 * Token semantics:
 *   - Token doc lives in postTripChargeReviewTokens/{token}.
 *   - Token is validated (exists / not consumed / not expired-inclusive-of-grace).
 *   - On first successful fetch: stamps firstViewedAt on both the token AND
 *     the target postTripCharges[chargeIndex] item.
 *   - Grace-period rule: effective deadline =
 *       firstViewedAt ? min(deadline, firstViewedAt + 48h + 15min) : deadline
 */

export interface CustomerFetchChargeReviewRequest {
  token: string;
}

export interface CustomerFetchChargeReviewBookingSummary {
  bookingId: string;
  carName: string;
  tripStart: string | null;
  tripEnd: string | null;
  partnerName: string;
}

export interface CustomerFetchChargeReviewCharge {
  type: 'fuel' | 'cleaning' | 'damage' | 'toll' | 'fastag' | 'challan' | 'other';
  amount: number;
  description: string;
  evidenceSignedUrl: string | null;
  createdAt: string;
}

export interface CustomerFetchChargeReviewAlreadyResponded {
  status:
    | 'customer_approved'
    | 'auto_approved'
    | 'disputed'
    | 'admin_approved'
    | 'admin_rejected'
    | 'withdrawn_by_partner';
  respondedAt: string | null;
}

export interface CustomerFetchChargeReviewResponse {
  bookingSummary: CustomerFetchChargeReviewBookingSummary;
  charge: CustomerFetchChargeReviewCharge;
  deadlineIso: string;
  remainingMs: number;
  alreadyResponded: CustomerFetchChargeReviewAlreadyResponded | null;
}
