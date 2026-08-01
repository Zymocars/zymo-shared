/**
 * Callable: adminSetRejectedCarCleanupEnabled
 *
 * Admin-only. Flips `AdminSettings/rejectedCarCleanup.enabled` and writes
 * an audit log. Reason min 3 chars.
 *
 * Backend implementation:
 *   zymo-backend/functions/triggers/rejectedCarCleanupScheduler.js line 123.
 */

export interface AdminSetRejectedCarCleanupEnabledRequest {
  enabled: boolean;
  reason: string;
}

export interface AdminSetRejectedCarCleanupEnabledResponse {
  success: true;
  enabled: boolean;
}
