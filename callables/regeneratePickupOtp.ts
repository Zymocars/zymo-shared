/**
 * Callable: regeneratePickupOtp
 *
 * 2026-08-22 pickup verification — Resend OTP callable.
 *
 * Backend implementation:
 *   zymo-backend/functions/callables/regeneratePickupOtp.js
 *
 * Auth: booking owner OR assigned partner OR admin. Rate-limited to 3
 * attempts per booking per phase per 1-hour window (config-driven — see
 * AdminSettings/pickupVerification.otpRegenRateLimit + otpRegenWindowMs).
 * Admins bypass the rate limit.
 *
 * Concurrent regen calls Firestore-transaction-serialize — only one commits;
 * the second sees the first's write and hits the rate check.
 *
 * Post-txn: helper delivers new OTP across 4 channels (WhatsApp + Email +
 * FCM push + zymo-web via doc). Per-channel failures are non-fatal.
 */

export interface RegeneratePickupOtpRequest {
  bookingId: string;
  /**
   * Legacy field — kept optional for backward compat with the v2 (pickup +
   * return) shape. Return-side OTP was removed 2026-08-23; backend ignores
   * this value now. Only pickup is supported.
   */
  which?: 'pickup';
}

export interface RegeneratePickupOtpResponse {
  success: true;
  newOtpVersion: number;
  attemptsUsedInWindow: number;
  regenLimit: number;
  deliveredVia: {
    whatsapp: boolean;
    email: boolean;
    push: boolean;
  };
}
