# Callable Types Migration Index (Chunk 18)

Source-of-truth request/response types for `firebase-functions/v2/https.onCall`
callables in `zymo-backend/functions/`. Frontend consumers (Zymo-Partner,
zymo-web) `import type { ... }` from these files for type-checking. Backend
runtime is JS/CJS and does not import these — but MUST keep runtime shape
in sync.

## Migration status (19 total callables)

| Callable | Backend file:line | TS types |
|---|---|---|
| partnerSubmitPostTripCharge | partnerPostTripActions.js:297 | ✅ partnerSubmitPostTripCharge.ts |
| partnerDeletePostTripCharge | partnerPostTripActions.js:393 | ✅ partnerDeletePostTripCharge.ts |
| partnerUploadTripPhotos | partnerPostTripActions.js:443 | ✅ partnerUploadTripPhotos.ts |
| partnerRequestPayout | partnerRequestPayout.js:42 | ✅ partnerRequestPayout.ts |
| partnerGetBookings | partnerGetBookings.js:25 | ✅ partnerGetBookings.ts |
| adminUnlockPostTripCharges | partnerPostTripActions.js:517 | ⏳ pending |
| adminRevokePostTripChargesUnlock | partnerPostTripActions.js:639 | ⏳ pending |
| partnerUpdateBookingStatus | partnerBookingActions.js:150 | ⏳ pending |
| ChatWithGeminiv2 | triggers-chatbot/ChatWithGeminiv2.js:1436 | ⏳ pending |
| submitChatFeedback | triggers-chatbot/ChatWithGeminiv2.js:2419 | ⏳ pending |
| permanentDeletePartner | permanentDeletePartner.js:19 | ⏳ pending |
| reEnableDisabledCar | monthlyCancelV2Callables.js:46 | ⏳ pending |
| adminPermanentlyBlockPartner | monthlyCancelV2Callables.js:89 | ⏳ pending |
| unblockVehicleRC | monthlyCancelV2Callables.js:191 | ⏳ pending |
| adminForceReEnableCar | monthlyCancelV2Callables.js:243 | ⏳ pending |
| adminForceLifetimeResetCar | monthlyCancelV2Callables.js:270 | ⏳ pending |
| adminRollbackMonthlyCancel | monthlyCancelV2Callables.js:302 | ⏳ pending |
| deleteDuplicateAccounts | deleteaccounts.js:17 | ⏳ pending |

Enumerated 2026-08-01. Update this table whenever a callable is added,
removed, or renamed in `zymo-backend/functions/`.
