// CommonJS mirror of bookingDoc.ts — required by consumers that don't compile
// TypeScript (zymo-backend Cloud Functions runtime is pure Node CJS).
//
// KEEP IN SYNC with bookingDoc.ts. Chunk 18 of the Zero-Bug Architecture plan
// will replace this hand-mirror with a TS-compile step, but until then any
// edit to bookingDoc.ts MUST mirror here in the same commit.

'use strict';

const FIELDS = Object.freeze({
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
});

module.exports = { FIELDS };
