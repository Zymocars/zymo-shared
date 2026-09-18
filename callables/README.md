# Callable Types Migration Index (Chunk 18)

Source-of-truth request/response types for `firebase-functions/v2/https.onCall`
callables in `zymo-backend/functions/`. Frontend consumers (Zymo-Partner,
zymo-web) `import type { ... }` from these files for type-checking. Backend
runtime is JS/CJS and does not import these — but MUST keep runtime shape
in sync.

## Migration status (20 total callables — 20/20 complete)

| Callable | Backend file (under `zymo-backend/functions/`) | TS types |
|---|---|---|
| partnerSubmitPostTripCharge | `triggers/partnerPostTripActions.js` | ✅ partnerSubmitPostTripCharge.ts |
| partnerDeletePostTripCharge | `triggers/partnerPostTripActions.js` | ✅ partnerDeletePostTripCharge.ts |
| partnerUploadTripPhotos | `triggers/partnerPostTripActions.js` | ✅ partnerUploadTripPhotos.ts |
| partnerRequestPayout | `triggers/partnerRequestPayout.js` | ✅ partnerRequestPayout.ts |
| partnerGetBookings | `triggers/partnerGetBookings.js` | ✅ partnerGetBookings.ts |
| adminUnlockPostTripCharges | `triggers/partnerPostTripActions.js` | ✅ adminUnlockPostTripCharges.ts |
| adminRevokePostTripChargesUnlock | `triggers/partnerPostTripActions.js` | ✅ adminRevokePostTripChargesUnlock.ts |
| partnerUpdateBookingStatus | `triggers/partnerBookingActions.js` | ✅ partnerUpdateBookingStatus.ts |
| ChatWithGeminiv2 | `chatbot/channels/chatCallable.js` | ✅ ChatWithGeminiv2.ts |
| submitChatFeedback | `chatbot/channels/chatCallable.js` | ✅ submitChatFeedback.ts |
| permanentDeletePartner | `triggers/permanentDeletePartner.js` | ✅ permanentDeletePartner.ts |
| reEnableDisabledCar | `triggers/monthlyCancelV2Callables.js` | ✅ reEnableDisabledCar.ts |
| adminPermanentlyBlockPartner | `triggers/monthlyCancelV2Callables.js` | ✅ adminPermanentlyBlockPartner.ts |
| unblockVehicleRC | `triggers/monthlyCancelV2Callables.js` | ✅ unblockVehicleRC.ts |
| adminForceReEnableCar | `triggers/monthlyCancelV2Callables.js` | ✅ adminForceReEnableCar.ts |
| adminForceLifetimeResetCar | `triggers/monthlyCancelV2Callables.js` | ✅ adminForceLifetimeResetCar.ts |
| adminRollbackMonthlyCancel | `triggers/monthlyCancelV2Callables.js` | ✅ adminRollbackMonthlyCancel.ts |
| deleteDuplicateAccounts | `triggers/deleteaccounts.js` | ✅ deleteDuplicateAccounts.ts |
| adminSetRejectedCarCleanupEnabled | `triggers/rejectedCarCleanupScheduler.js` | ✅ adminSetRejectedCarCleanupEnabled.ts |
| adminRunRejectedCarCleanupNow | `triggers/rejectedCarCleanupScheduler.js` | ✅ adminRunRejectedCarCleanupNow.ts |

Update this table whenever a callable is added, removed, renamed or moved in
`zymo-backend/functions/`. Name the file only — line numbers go stale on the
next edit. Each file defines the callable under its own name.
