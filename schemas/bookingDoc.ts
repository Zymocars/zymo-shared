// Firestore CarsPaymentSuccessDetails field-key constants.
// Zero-Bug Architecture Chunk 5 (2026-07-31).
//
// Source of truth for the shape of the CarsPaymentSuccessDetails collection.
//
// Consumers (via git submodule at `shared/`):
//   - zymo-web (SSR + api Cloud Function)
//   - zymo-backend (payment / trigger / partner Cloud Functions)
//   - Zymo-Partner (partner-portal SPA)
//   - zymo-analytics-backend (analytics platform)

export const FIELDS = Object.freeze({
  price: 'price',
  actualPrice: 'actualPrice',
  paymentId: 'paymentId',
  firstName: 'FirstName',
  email: 'Email',
  phoneNumber: 'PhoneNumber',
  userId: 'UserId',
  vendor: 'Vendor',
  startDate: 'StartDate',
  endDate: 'EndDate',
  startTime: 'StartTime',
  endTime: 'EndTime',
  carName: 'CarName',
  carId: 'carId',
  drive: 'Drive',
  bookingId: 'bookingId',
  balance: 'Balance',
  carImage: 'CarImage',
  dateOfBooking: 'DateOfBooking',
  deliveryType: 'deliveryType',
  packageSelected: 'Package Selected',
  pickupLocation: 'Pickup Location',
  dropLocation: 'Drop Location',
  promoCodeUsed: 'Promo Code Used',
  discountAppliedByUser: 'Discount applied by user',
  transmission: 'Transmission',
  timeStamp: 'TimeStamp',
  timeStampRaw: 'TimeStampRaw',
  securityDeposit: 'SecurityDeposit',
  createdAt: 'createdAt',
  paymentStatus: 'paymentStatus',
  paymentGateway: 'paymentGateway',
  clientPlatform: 'clientPlatform',
  clientRequestId: 'clientRequestId',
  cashfreeOrderId: 'cashfreeOrderId',
  razorpayOrderId: 'razorpayOrderId',
  vendorId: 'vendorId',
  isPartnerVendor: 'isPartnerVendor',
  mapLocation: 'MapLocation',
  zipcode: 'Zipcode',
  city: 'City',
  street1: 'Street1',
  street2: 'Street2',
  dateOfBirth: 'DateOfBirth',
  documents: 'Documents',
  isZoomcar: 'isZoomcar',
  zoomcarBookingStatus: 'zoomcarBookingStatus',
  zoomcarConfirmationKey: 'zoomcarConfirmationKey',
  zoomcarBookingAmount: 'zoomcarBookingAmount',
  zoomcarCity: 'zoomcarCity',
  zoomcarUserId: 'zoomcarUserId',
  zoomcarCustomerPhone: 'zoomcarCustomerPhone',
  zoomcarCustomerName: 'zoomcarCustomerName',
  termsAcceptedAt: 'termsAcceptedAt',
  termsVersion: 'termsVersion',
} as const);

export type BookingDocField = typeof FIELDS[keyof typeof FIELDS];
