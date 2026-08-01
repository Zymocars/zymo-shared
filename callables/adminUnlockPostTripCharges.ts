/**
 * Callable: adminUnlockPostTripCharges
 *
 * Admin-only. Grants a time-boxed unlock allowing a partner to submit a
 * post-trip charge on a settled booking. Rejects duplicate active unlocks.
 *
 * Backend implementation:
 *   zymo-backend/functions/triggers/partnerPostTripActions.js line 517.
 */

export interface AdminUnlockPostTripChargesRequest {
  bookingId: string;
  reason: string;
  ttlHours?: number;
}

export interface AdminUnlockPostTripChargesResponse {
  success: true;
  bookingId: string;
  chargeGateOverride: {
    unlockedBy: string;
    unlockedAt: string;
    expiresAt: string;
    reason: string;
  };
  isRefundMarkedException: boolean;
}
