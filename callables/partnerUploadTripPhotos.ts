/**
 * Callable: partnerUploadTripPhotos
 *
 * Backend implementation:
 *   zymo-backend/functions/triggers/partnerPostTripActions.js line 443.
 *
 * URLs must be Firebase Storage URLs (validated server-side).
 */

export type TripPhotoPhase = 'pickup' | 'return';

export interface PartnerUploadTripPhotosRequest {
  bookingId: string;
  phase: TripPhotoPhase;
  urls: string[];
}

export interface PartnerUploadTripPhotosResponse {
  success: true;
  phase: TripPhotoPhase;
  uploadedCount: number;
  totalForPhase: number;
}
