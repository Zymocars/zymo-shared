/**
 * Callable: reEnableDisabledCar
 *
 * Partner-owned. Partner re-enables their own car after monthly-cancel-v2
 * auto-disable. Requires all 5 attestation questions answered `true`.
 *
 * Backend implementation:
 *   `exports.reEnableDisabledCar` in zymo-backend/functions/triggers/monthlyCancelV2Callables.js.
 */

export interface ReEnableDisabledCarQuestionnaire {
  q1: true;
  q2: true;
  q3: true;
  q4: true;
  q5: true;
}

export interface ReEnableDisabledCarRequest {
  carId: string;
  questionnaireAnswers: ReEnableDisabledCarQuestionnaire;
}

export interface ReEnableDisabledCarResponse {
  success: true;
  carId: string;
  reEnabled?: true;
  alreadyEnabled?: true;
}
