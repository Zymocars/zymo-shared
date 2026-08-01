/**
 * Callable: partnerRequestPayout
 *
 * Backend implementation:
 *   zymo-backend/functions/triggers/partnerRequestPayout.js line 42.
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
