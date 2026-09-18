/**
 * Callable: adminPermanentlyBlockPartner
 *
 * Admin-only. Writes BlockedPartners/{phoneNormalized} first (closes signup
 * gate), then delegates to partnerCascadeCleanup, then writes audit log.
 * Idempotent — safe to re-invoke for the same uid.
 *
 * Backend implementation:
 *   `exports.adminPermanentlyBlockPartner` in zymo-backend/functions/triggers/monthlyCancelV2Callables.js.
 */

export interface AdminPermanentlyBlockPartnerRequest {
  uid: string;
  reason: string;
}

export interface AdminPermanentlyBlockPartnerResponse {
  success: true;
  uid: string;
  blockedPartnerWritten: boolean;
  phoneNormalized: string | null;
  cascadeSummary?: unknown;
}
