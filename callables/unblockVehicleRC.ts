/**
 * Callable: unblockVehicleRC
 *
 * Admin-only. Deletes BlockedVehicles/{rcNormalized} if entry allows admin
 * unblock. Rejects entries flagged `allowAdminUnblock=false`.
 *
 * Backend implementation:
 *   zymo-backend/functions/triggers/monthlyCancelV2Callables.js line 191.
 */

export interface UnblockVehicleRCRequest {
  rcNormalized: string;
  reason: string;
}

export interface UnblockVehicleRCResponse {
  success: true;
  rcNormalized: string;
}
