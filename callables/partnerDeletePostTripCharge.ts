/**
 * Callable: partnerDeletePostTripCharge
 *
 * Backend implementation:
 *   `exports.partnerDeletePostTripCharge` in zymo-backend/functions/triggers/partnerPostTripActions.js.
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
