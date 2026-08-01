/**
 * Callable: adminRevokePostTripChargesUnlock
 *
 * Admin-only. Revokes a pending (unconsumed, unrevoked) charge-gate unlock.
 * Rejects if unlock is already consumed or already revoked.
 *
 * Backend implementation:
 *   zymo-backend/functions/triggers/partnerPostTripActions.js line 639.
 */

export interface AdminRevokePostTripChargesUnlockRequest {
  bookingId: string;
  reason: string;
}

export interface AdminRevokePostTripChargesUnlockResponse {
  success: true;
  bookingId: string;
  revokedAt: string;
}
