/**
 * Callable: partnerRequestPayout
 *
 * Backend implementation:
 *   `exports.partnerRequestPayout` in zymo-backend/functions/triggers/partnerRequestPayout.js.
 *
 * Atomic transaction — enforces single-submit per booking. Second concurrent
 * call for the same bookingId will abort at commit.
 */

export interface PartnerRequestPayoutRequest {
  bookingId: string;
}

export interface PartnerRequestPayoutResponse {
  success: true;
  bookingId: string;
  payoutAmount: number;
  partnerShareRate: number;
  requestedAt: string;
}
