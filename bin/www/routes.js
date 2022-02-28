"use strict";
// /// Account
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
// import login from './controllers/account/login-account';
// import checkEmail from './controllers/account/check-email';
// import passwordCheck from './controllers/account/check-password';
// import createReservoucher from './controllers/account/create-reservoucher';
// import getreservouchersByAccount from './controllers/account/get-reservouchers';
// import createCampagne from './controllers/account/create-campagne';
// //import getcampagnesByAccount from './controllers/account/get-campagne';
// import deleteAccount from './controllers/account/delete-account';
// import logout from './controllers/account/logout-account';
// import requestPasswordReset from './controllers/account/request-password-reset';
// import passwordReset from './controllers/account/password-reset';
// import createAccount from './controllers/account/create-account';
// import updateUserAccount from './controllers/account/update-account';
// import confirmAccount from './controllers/account/confirm-account';
// import verifySms from './controllers/account/verify-sms-code';
// //orders
// import getallplacereservationscompleted from './controllers/account/get-reservation-totals';
// import deleteAllorders from './controllers/orders/delete-allorders-user';
// import getCalculatedOrderByAccount from './controllers/account/get-orders';
// import getOrdersByAccount from './controllers/orders/get-allorders-user';
// //payments
// import createNewTestPayment from './controllers/orders/payments/create-newtest-payment';
// import getPaymentstatusMollie from './controllers/orders/payments/webhook-paystatus';
// //invoices
// import getInvoicesByAccount from './controllers/orders/get-allinvoices-user';
// import deleteAllinvoices from './controllers/orders/delete-allinvoices-user';
// // Store getOrdersByAccount
// import createStore from './controllers/store/create-store';
// import updateStore from './controllers/store/update-store';
// import updateStores from './controllers/store/update-stores';
// import deleteStore from './controllers/store/delete-store';
// import { getStoreByStoreId, getAccountStores, getStoreBySlug } from './controllers/store/get-stores';
// import searchStores from './controllers/store/search-stores';
// import searchHoreca from './controllers/store/search-horeca';
// import searchHorecasuggest from './controllers/store/search-horeca';
// import getStoreLocations from './controllers/store/get-store-locations';
// // Place Group
// import createPlaceGroup from './controllers/place-group/create-place-group';
// import updatePlaceGroup from './controllers/place-group/update-place-group';
// import deletePlaceGroup from './controllers/place-group/delete-place-group';
// import getPlaceGroupsByStore from './controllers/place-group/get-place-groups';
// import getPlaceGroupAvailability from './controllers/place-group/get-place-group-availability';
// // Image
// import uploadImages from './controllers/image/upload-image';
// import deleteImage from './controllers/image/delete-image';
// // Time Slot
// import { createTimeSlot, batchCreateTimeSlots } from './controllers/time-slot/create-time-slot';
// import { updateTimeSlot, batchUpdateTimeSlots } from './controllers/time-slot/update-time-slot';
// import deleteTimeSlot from './controllers/time-slot/delete-time-slot';
// import getTimeSlots from './controllers/time-slot/get-time-slots';
// // Reservation
// import {
//     getReservationsByPlaceGroup,
//     getReservationsForAccount,
//     getReservationById,
//     getReservationsOverPeriodByPlaceGroup,
// } from './controllers/reservation/get-reservations';
// import createReservation from './controllers/reservation/create-reservation';
// import deleteReservation from './controllers/reservation/cancel-reservation';
// //Misc
// import { IRoute } from './types/route.types';
// import { createStorePassword, deleteStorePassword } from './controllers/store/store-password';
// import checkInCheckOutReservation, { setCheckOutFlow } from './controllers/reservation/check-in-check-out-reservation';
// import { createStoreFavourite, deleteStoreFavourite, getStoreFavourites } from './controllers/store/favourites';
// import { NextFunction, Request, Response } from 'express';
// //Admin
// import {
//     getDashboardStats,
//     getAccounts as getAccountsAdmin,
//     getStoresByAccountId as getStoresByAccountIdAdmin
// } from './controllers/admin/get-admin-info';
// //Sitemap SEO purposses
// import  {getSitemap} from './controllers/seo/create-sitemap';
// import  {getRobotmap} from './controllers/seo/create-robotmap';
// // https://api.winkelvrij.nl/api/store/21?
// // withPlaceGroups=true&withTimeSlots=true&withAvailability=true&dateTime=2021-04-08T09:25:00.000Z
// // https://api.winkelvrij.nl/api/store/21?
// // withPlaceGroups=true&withTimeSlots=true&withAvailability=true&dateTime=2021-04-09T09:25:00.000Z
exports.routes = [];
exports.default = exports.routes;
