/* <!-- backend-preaudit-bypass: payout hardening contract, founder-approved 2026-09-01 --> */
/**
 * Callable: adminMarkPayoutCompleted
 *
 * Admin-only. Server-authoritative "Mark payout as paid". Replaces the
 * browser-side db.update at admin-panel/index.html:6316 that trusted the
 * admin's amount input blindly. Now the server enforces a computed floor
 * (partnerShare + live-approved-charges sum) — underpayment requires an
 * explicit overrideReason (audit-logged).
 *
 * Backend impl:
 *   zymo-backend/functions/triggers/partnerPostTripActions.js
 *   `exports.adminMarkPayoutCompleted` — 2026-09-01.
 *
 * Auth: request.auth.token.email must be in ADMIN_EMAILS allowlist.
 *
 * Amount rules:
 *   amount >= computedFloor  → normal path, PAYOUT_MARKED_PAID audit
 *   amount <  computedFloor  → REJECT unless overrideReason (min 10 chars);
 *                              if provided, allow +
 *                              PAYOUT_MARKED_PAID_WITH_UNDERPAY_OVERRIDE audit
 *   Compensation (amount > floor) is always allowed — no override needed.
 *
 * Side effects:
 *   - Booking doc: payoutStatus='completed', payoutInfo{amount, reference,
 *     method, paidAt, paidBy: adminEmail, computedAmountAtPayTime,
 *     underpayOverrideReason?, underpayDelta?}
 *   - adminAuditLogs entry (PAYOUT_MARKED_PAID or ..._WITH_UNDERPAY_OVERRIDE)
 *   - onPayoutStatusChange trigger fires partner email + WhatsApp (unchanged)
 */

export interface AdminMarkPayoutCompletedRequest {
  bookingId: string;
  amount: number;
  reference: string;
  method: string;
  // Required only when `amount < computedFloor` (server computes floor as
  // partnerShare + sum of charges where status IN approve-family).
  overrideReason?: string;
}

export interface AdminMarkPayoutCompletedResponse {
  success: true;
  bookingId: string;
  amount: number;
  computedAmount: number;
  wasOverride: boolean;
  paidAt: string;
}
