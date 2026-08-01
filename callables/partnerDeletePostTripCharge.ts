/**
 * Callable: partnerDeletePostTripCharge
 *
 * Backend implementation:
 *   zymo-backend/functions/triggers/partnerPostTripActions.js line 393.
 */

export interface PartnerDeletePostTripChargeRequest {
  bookingId: string;
  chargeIndex: number;
}

export interface PartnerDeletePostTripChargeResponse {
  success: true;
  deletedIndex: number;
  remainingCount: number;
}
