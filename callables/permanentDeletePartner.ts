/**
 * Callable: permanentDeletePartner
 *
 * Admin-only. Moves DeletedPartners/{uid} to ArchivedDeletedPartners/{uid}
 * and hard-deletes the source doc. Idempotent — reports `alreadyArchived`
 * if source is already archived.
 *
 * Backend implementation:
 *   zymo-backend/functions/triggers/permanentDeletePartner.js line 19.
 */

export interface PermanentDeletePartnerRequest {
  uid: string;
  reason: string;
}

export interface PermanentDeletePartnerResponse {
  success: true;
  uid: string;
  alreadyArchived?: true;
}
