/**
 * Callable: unblockVehicleRC
 *
 * Admin-only. Deletes BlockedVehicles/{rcNormalized} if entry allows admin
 * unblock. Rejects entries flagged `allowAdminUnblock=false`.
 *
 * Backend implementation:
 *   `exports.unblockVehicleRC` in zymo-backend/functions/triggers/monthlyCancelV2Callables.js.
 */

export interface UnblockVehicleRCRequest {
  rcNormalized: string;
  reason: string;
}

export interface UnblockVehicleRCResponse {
  success: true;
  rcNormalized: string;
}
