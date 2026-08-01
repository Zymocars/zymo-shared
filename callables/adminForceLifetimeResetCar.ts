/**
 * Callable: adminForceLifetimeResetCar
 *
 * Admin-only. Resets a car's lifetime monthly-cancel counter (and re-enables
 * it if disabled).
 *
 * Backend implementation:
 *   zymo-backend/functions/triggers/monthlyCancelV2Callables.js line 270.
 */

export interface AdminForceLifetimeResetCarRequest {
  partnerId: string;
  carId: string;
  reason: string;
}

export interface AdminForceLifetimeResetCarResponse {
  success: true;
  partnerId: string;
  carId: string;
  [k: string]: unknown;
}
