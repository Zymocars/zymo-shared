/**
 * Callable: partnerUpdateBookingStatus
 *
 * State-machine transitions for partner-owned bookings. `customer_no_show`
 * requires a Firebase Storage photo URL as proof; `reject` requires a
 * rejection reason string.
 *
 * Backend implementation:
 *   zymo-backend/functions/triggers/partnerBookingActions.js line 150.
 */

export type PartnerBookingAction =
  | 'accept'
  | 'reject'
  | 'start_trip'
  | 'complete_trip'
  | 'customer_no_show'
  | 'partner_cancel';

export interface PartnerUpdateBookingStatusRequest {
  bookingId: string;
  action: PartnerBookingAction;
  rejectionReason?: string;
  proofPhotoUrl?: string;
}

export interface PartnerUpdateBookingStatusResponse {
  success: true;
  bookingId: string;
  newStatus: string;
  updatedAt: string;
}
