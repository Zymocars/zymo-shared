/**
 * Callable: adminRollbackMonthlyCancel
 *
 * Admin-only. Rolls back a single booking-attributed monthly-cancel counter
 * increment on a partner (or specific car). Always reads useCarLevelCounter
 * from AdminSettings — never trusts a caller flag (2026-07-26 audit finding).
 *
 * Backend implementation:
 *   zymo-backend/functions/triggers/monthlyCancelV2Callables.js line 302.
 */

export interface AdminRollbackMonthlyCancelRequest {
  partnerId: string;
  bookingId: string;
  carId?: string | null;
  reason: string;
}

export interface AdminRollbackMonthlyCancelResponse {
  success: true;
  partnerId: string;
  bookingId: string;
  useCarLevelCounter: boolean;
  [k: string]: unknown;
}
