/**
 * Callable: deleteDuplicateAccounts
 *
 * Admin-only. Batch-runs partnerCascadeCleanup + auth.deleteUser for each
 * uid in the input list. Refuses to delete auth for any uid with live
 * bookings (returns `aborted_live_bookings` in the per-uid result).
 *
 * Backend implementation:
 *   `exports.deleteDuplicateAccounts` in zymo-backend/functions/triggers/deleteaccounts.js.
 */

export type DeleteDuplicateAccountsPerUidKind =
  | 'aborted_live_bookings'
  | 'cascade_completed'
  | 'error';

export interface DeleteDuplicateAccountsPerUidResult {
  uid: string;
  cascade?: { kind: DeleteDuplicateAccountsPerUidKind; [k: string]: unknown };
  authDeleted?: boolean;
  reason?: string;
  error?: string;
}

export interface DeleteDuplicateAccountsRequest {
  userIds: string[];
}

export interface DeleteDuplicateAccountsResponse {
  results: DeleteDuplicateAccountsPerUidResult[];
}
