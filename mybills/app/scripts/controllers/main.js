'use strict';

/**
 * @ngdoc function
 * @name mybillsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mybillsApp
 */
angular.module('mybillsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.bills = [
      {
        "billname": "Rent",
        "amount": 1440,
        "dueDates": 1,
        "paid": "n"
      },
      {
        "billname": "SC",
        "amount": 50,
        "dueDates": 1,
        "paid": "n"
      },
      {
        "billname": "Water",
        "amount": 65,
        "dueDates": 1,
        "paid": "n"
      },
      {
        "billname": "Electric",
        "amount": 200,
        "dueDates": 8,
        "paid": "n"
      },
      {
        "billname": "ABCYA",
        "amount": 2,
        "dueDates": 8,
        "paid": "n"
      },
      {
        "billname": "Netflix",
        "amount": 10,
        "dueDates": 8,
        "paid": "n"
      },
      {
        "billname": "Spotify",
        "amount": 10,
        "dueDates": 21,
        "paid": "n"
      },
      {
        "billname": "PluralSight/Safari",
        "amount": 40,
        "dueDates": 24,
        "paid": "n"
      },
      {
        "billname": "iCloud Storage Sarah",
        "amount": 3,
        "dueDates": 3,
        "paid": "n"
      },
      {
        "billname": "iCloud Storage Parker",
        "amount": 5,
        "dueDates": 12,
        "paid": "n"
      },
      {
        "billname": "SAP",
        "amount": 65,
        "dueDates": 23,
        "paid": "n"
      },
      {
        "billname": "DAP",
        "amount": 165,
        "dueDates": 23,
        "paid": "n"
      },
      {
        "billname": "Google Storage",
        "amount": 3,
        "dueDates": 10,
        "paid": "n"
      },
      {
        "billname": "ATT Uverse ",
        "amount": 250,
        "dueDates": 24,
        "paid": "n"
      },
      {
        "billname": "ATT Phone ",
        "amount": 300,
        "dueDates": 24,
        "paid": "n"
      },
      {
        "billname": "Car Insurnace",
        "amount": 325,
        "dueDates": 18,
        "paid": "n"
      },
      {
        "billname": "Renters Insurance",
        "amount": 20,
        "dueDates": 21,
        "paid": "n"
      },
      {
        "billname": "Health Insurance",
        "amount": 465,
        "dueDates": 25,
        "paid": "n"
      },
      {
        "billname": "Progressive",
        "amount": 145,
        "dueDates": 1,
        "paid": "n"
      },
      {
        "billname": "Snap Furniture",
        "amount": 140,
        "dueDates": 1,
        "paid": "n"
      },
      {
        "billname": "Car payment",
        "amount": 560,
        "dueDates": 28,
        "paid": "n"
      },
      {
        "billname": "Over",
        "amount": 0,
        "dueDates": 1,
        "paid": "n"
      },
      {
        "billname": "Misc",
        "amount": 0,
        "dueDates": 1,
        "paid": "n"
      },
      {
        "billname": "Loans",
        "amount": 0,
        "dueDates": 28,
        "paid": "n"
      }
    ]
  });
