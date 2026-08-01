/**
 * Callable: partnerGetBookings
 *
 * Backend implementation:
 *   zymo-backend/functions/triggers/partnerGetBookings.js line 25.
 *
 * Returns all bookings assigned to the calling partner (via request.auth.uid).
 * Pending-status bookings have contact info redacted server-side; Firestore
 * Timestamp fields are serialized to ISO strings.
 */

export interface PartnerBookingSummary {
  id: string;
  vendorId: string;
  status: 'pending' | 'accepted' | 'ongoing' | 'completed' | 'cancelled';
  createdAt: string;
  customerSince?: string | null;
  [k: string]: unknown;
}

export interface PartnerGetBookingsRequest {}

export interface PartnerGetBookingsResponse {
  bookings: PartnerBookingSummary[];
}
