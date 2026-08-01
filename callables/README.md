# Callable Types Migration Index (Chunk 18)

Source-of-truth request/response types for `firebase-functions/v2/https.onCall`
callables in `zymo-backend/functions/`. Frontend consumers (Zymo-Partner,
zymo-web) `import type { ... }` from these files for type-checking. Backend
runtime is JS/CJS and does not import these — but MUST keep runtime shape
in sync.

## Migration status (18 total callables — 18/18 complete)

| Callable | Backend file:line | TS types |
|---|---|---|
| partnerSubmitPostTripCharge | partnerPostTripActions.js:297 | ✅ partnerSubmitPostTripCharge.ts |
| partnerDeletePostTripCharge | partnerPostTripActions.js:393 | ✅ partnerDeletePostTripCharge.ts |
| partnerUploadTripPhotos | partnerPostTripActions.js:443 | ✅ partnerUploadTripPhotos.ts |
| partnerRequestPayout | partnerRequestPayout.js:42 | ✅ partnerRequestPayout.ts |
| partnerGetBookings | partnerGetBookings.js:25 | ✅ partnerGetBookings.ts |
| adminUnlockPostTripCharges | partnerPostTripActions.js:517 | ✅ adminUnlockPostTripCharges.ts |
| adminRevokePostTripChargesUnlock | partnerPostTripActions.js:639 | ✅ adminRevokePostTripChargesUnlock.ts |
| partnerUpdateBookingStatus | partnerBookingActions.js:150 | ✅ partnerUpdateBookingStatus.ts |
| ChatWithGeminiv2 | triggers-chatbot/ChatWithGeminiv2.js:1436 | ✅ ChatWithGeminiv2.ts |
| submitChatFeedback | triggers-chatbot/ChatWithGeminiv2.js:2419 | ✅ submitChatFeedback.ts |
| permanentDeletePartner | permanentDeletePartner.js:19 | ✅ permanentDeletePartner.ts |
| reEnableDisabledCar | monthlyCancelV2Callables.js:46 | ✅ reEnableDisabledCar.ts |
| adminPermanentlyBlockPartner | monthlyCancelV2Callables.js:89 | ✅ adminPermanentlyBlockPartner.ts |
| unblockVehicleRC | monthlyCancelV2Callables.js:191 | ✅ unblockVehicleRC.ts |
| adminForceReEnableCar | monthlyCancelV2Callables.js:243 | ✅ adminForceReEnableCar.ts |
| adminForceLifetimeResetCar | monthlyCancelV2Callables.js:270 | ✅ adminForceLifetimeResetCar.ts |
| adminRollbackMonthlyCancel | monthlyCancelV2Callables.js:302 | ✅ adminRollbackMonthlyCancel.ts |
| deleteDuplicateAccounts | deleteaccounts.js:17 | ✅ deleteDuplicateAccounts.ts |

Enumerated + fully migrated 2026-08-01. Update this table whenever a callable
is added, removed, or renamed in `zymo-backend/functions/`.
