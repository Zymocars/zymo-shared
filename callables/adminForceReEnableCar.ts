/**
 * Callable: adminForceReEnableCar
 *
 * Admin-only. Force re-enables a partner's disabled car bypassing the
 * partner-attestation questionnaire path.
 *
 * Backend implementation:
 *   `exports.adminForceReEnableCar` in zymo-backend/functions/triggers/monthlyCancelV2Callables.js.
 */

export interface AdminForceReEnableCarRequest {
  partnerId: string;
  carId: string;
  reason: string;
}

export interface AdminForceReEnableCarResponse {
  success: true;
  partnerId: string;
  carId: string;
  [k: string]: unknown;
}
