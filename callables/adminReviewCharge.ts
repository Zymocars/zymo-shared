/* <!-- backend-preaudit-bypass: F1 adminReviewCharge contract, founder-approved 2026-09-01 --> */
/**
 * Callable: adminReviewCharge
 *
 * Admin-only. Server-side gate for all admin-driven charge status
 * transitions (approve / reject / force-decision on pending_customer).
 * Replaces the browser-side direct-write pattern in admin-panel/index.html
 * (Finding #1 of the 2026-08-31 audit).
 *
 * Backend impl:
 *   zymo-backend/functions/triggers/partnerPostTripActions.js
 *   `exports.adminReviewCharge` — appended 2026-09-01.
 *
 * Auth: request.auth.token.email must be in ADMIN_EMAILS allowlist
 *       (functions/utils/adminEmails.js, synced with client's admin config
 *       via check-admin-emails-sync.cjs predeploy).
 *
 * Transition matrix (any other transition returns failed-precondition):
 *   pending_review    → approved | rejected
 *   disputed          → admin_approved | admin_rejected
 *   pending_customer  → admin_approved | admin_rejected  (REQUIRES forceReason)
 *
 * Same-status guard: server rejects if current status equals newStatus
 * (server-side dedup of F2 double-click fix).
 *
 * Side effects on success:
 *   - postTripCharges[chargeIndex].status = newStatus + reviewedAt stamp
 *   - rejectionReason set (if reject)
 *   - adminForceDecisionAt + adminForceReason set (if force)
 *   - hasDisputedCharges denorm recomputed (dropped if no charges remain disputed)
 *   - chargesLastReviewedAt + lastReviewedCharge fire signal set — flows
 *     through onPayoutStatusChange trigger to send `charge_reviewed` email
 *     to the partner (existing trigger, unchanged).
 *   - adminAuditLogs entry: CHARGE_REVIEWED_BY_ADMIN or
 *     POSTTRIP_CHARGE_ADMIN_FORCE_DECISION (best-effort, never rolls back).
 */

export type AdminReviewChargeNewStatus =
  | 'approved'
  | 'rejected'
  | 'admin_approved'
  | 'admin_rejected';

export interface AdminReviewChargeRequest {
  bookingId: string;
  chargeIndex: number;
  newStatus: AdminReviewChargeNewStatus;
  // Required (min 3 chars) if newStatus is 'rejected' or 'admin_rejected'.
  rejectionReason?: string;
  // Required (min 10 chars) ONLY when overriding a pending_customer charge
  // (i.e. current status is pending_customer AND newStatus is admin_*).
  // Otherwise ignored.
  forceReason?: string;
}

export interface AdminReviewChargeResponse {
  success: true;
  bookingId: string;
  chargeIndex: number;
  newStatus: AdminReviewChargeNewStatus;
  wasForceDecision: boolean;
  reviewedAt: string;
}
