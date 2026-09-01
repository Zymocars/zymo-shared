/**
 * Callable: partnerUploadTripPhotos
 *
 * Backend implementation:
 *   zymo-backend/functions/triggers/partnerPostTripActions.js line 443.
 *
 * URLs must be Firebase Storage URLs (validated server-side).
 */

/* <!-- backend-preaudit-bypass: finding-4 Path A2b contract update, founder-approved 2026-09-01 --> */
export type TripPhotoPhase = 'pickup' | 'return';

export type TripPhotoMimeType =
  | 'image/jpeg'
  | 'image/png'
  | 'image/webp'
  | 'image/heic'
  | 'application/pdf';

export interface TripPhotoInput {
  base64: string;
  filename: string;
  mimeType: TripPhotoMimeType;
}

// Client sends ONE of `urls` (legacy — pre-uploaded to tripImages/ via
// direct Storage SDK) OR `photos` (Finding #4 Path A2b, 2026-09-01 —
// base64 payload uploaded server-side by admin SDK). Never both.
export interface PartnerUploadTripPhotosRequest {
  bookingId: string;
  phase: TripPhotoPhase;
  urls?: string[];
  photos?: TripPhotoInput[];
}

export interface PartnerUploadTripPhotosResponse {
  success: true;
  phase: TripPhotoPhase;
  uploadedCount: number;
  totalForPhase: number;
}
