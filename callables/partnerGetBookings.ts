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

// Empty request — server derives everything from request.auth.uid.
// Type alias (not interface) avoids the eslint no-empty-interface rule
// while still expressing "no payload fields expected."
export type PartnerGetBookingsRequest = Record<string, never>;

export interface PartnerGetBookingsResponse {
  bookings: PartnerBookingSummary[];
}
