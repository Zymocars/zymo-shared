// <!-- backend-preaudit-bypass: finding-5, founder-approved 2026-08-31 -->
/**
 * Callable: customerDisputeCharge
 *
 * Unauthenticated callable. Customer clicks Dispute on
 * zymo.app/review-charges/{token}, supplies a reason + optional evidence.
 * Consumes the token transactionally, flips the charge to `disputed`,
 * uploads evidence to `postTripChargeDisputes/{bookingId}/{chargeIndex}/`,
 * denormalizes `hasDisputedCharges=true` + `disputedChargeAt=now` on the
 * booking doc (composite index feeds admin Disputed Charges tab), writes
 * audit log, dispatches ACTION-REQUIRED email to Zymo admin + partner
 * neutral notification (both best-effort, log-not-throw).
 *
 * Backend implementation:
 *   zymo-backend/functions/triggers/customerChargeReview.js
 *   `exports.customerDisputeCharge` — commit 3 of the 2026-08-31
 *   Finding-#5 customer-transparency bundle.
 *
 * Validation:
 *   - reason: string, trimmed length >= 10.
 *   - evidenceFiles: array of at most 5 items.
 *   - each file base64-decoded size <= 5 MB.
 *   - allowed mimeTypes: image/jpeg, image/png, image/webp, image/heic,
 *     application/pdf.
 */

export type CustomerDisputeChargeMimeType =
  | 'image/jpeg'
  | 'image/png'
  | 'image/webp'
  | 'image/heic'
  | 'application/pdf';

export interface CustomerDisputeChargeEvidenceFile {
  base64: string;
  filename: string;
  mimeType: CustomerDisputeChargeMimeType;
}

export interface CustomerDisputeChargeRequest {
  token: string;
  reason: string;
  evidenceFiles?: CustomerDisputeChargeEvidenceFile[];
}

export interface CustomerDisputeChargeResponse {
  success: true;
  status: 'disputed';
  respondedAt: string;
  evidenceUrls: string[];
}
