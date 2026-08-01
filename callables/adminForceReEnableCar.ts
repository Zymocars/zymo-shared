/**
 * Callable: adminForceReEnableCar
 *
 * Admin-only. Force re-enables a partner's disabled car bypassing the
 * partner-attestation questionnaire path.
 *
 * Backend implementation:
 *   zymo-backend/functions/triggers/monthlyCancelV2Callables.js line 243.
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
