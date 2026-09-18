/**
 * Callable: adminRunRejectedCarCleanupNow
 *
 * Admin-only. Runs the rejected-car cleanup pass right now, bypassing the
 * daily cron AND the enabled flag. Reason min 3 chars.
 *
 * Backend implementation:
 *   `adminRunRejectedCarCleanupNow` in zymo-backend/functions/triggers/rejectedCarCleanupScheduler.js.
 */

export interface AdminRunRejectedCarCleanupNowRequest {
  reason: string;
}

export interface RejectedCarCleanupPassStats {
  scanned?: number;
  deleted?: number;
  reminded?: number;
  skipped?: number;
  [k: string]: unknown;
}

export interface AdminRunRejectedCarCleanupNowResponse {
  success: true;
  stats: RejectedCarCleanupPassStats | null;
}
