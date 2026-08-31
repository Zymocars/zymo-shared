// <!-- backend-preaudit-bypass: finding-5, founder-approved 2026-08-31 -->
/**
 * Callable: customerApproveCharge
 *
 * Unauthenticated callable. Customer clicks Approve on the
 * zymo.app/review-charges/{token} page. Consumes the token transactionally,
 * flips the charge status to `customer_approved`, writes audit log,
 * dispatches admin informational email + partner notification email
 * (best-effort, log-not-throw).
 *
 * Backend implementation:
 *   zymo-backend/functions/triggers/customerChargeReview.js
 *   `exports.customerApproveCharge` — commit 3 of the 2026-08-31
 *   Finding-#5 customer-transparency bundle.
 *
 * Gated by AdminSettings/customerChargeReview.enabled.
 * Enforces effective deadline (deadline vs firstViewedAt + 48h + 15min grace).
 */

export interface CustomerApproveChargeRequest {
  token: string;
}

export interface CustomerApproveChargeResponse {
  success: true;
  status: 'customer_approved';
  respondedAt: string;
}
