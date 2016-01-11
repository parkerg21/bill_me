'use strict';

/**
 * @ngdoc function
 * @name mybillsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mybillsApp
 */
angular.module('mybillsApp','')
  .controller('MainCtrl', ["$scope", "$firebaseArray",function ($scope,$firebaseArray) {
    var ref = new Firebase("https://popping-heat-8894.firebaseio.com/bills");
    $scope.bills = $firebaseArray(ref);
      $scope.removeItem = function(index) {
        $scope.bills.splice(index, 1);
      },

      $scope.total = function() {
      var total = 0;
      angular.forEach($scope.bills, function(bill) {
        total += bill.amount;
        total = Math.round(total * 100)/100
      })

      return total;
    },
      $scope.totalAfterBills = function() {
        var total = 0;
        angular.forEach($scope.bills, function(bill) {
          total += bill.amount;
          total = 2800 - (Math.round(total * 100)/100)
        })

        return total;
      },
      $scope.showBill=[];
      $scope.toggleBill = function(index,bills){
           console.log(bills[index].paid);
          if (bills[index].paid === 'n'){
            bills[index].paid = "y";
            $scope.showBill[index] = !$scope.showBill[index];
            local
            $scope.bills.splice(index, 1);
            console.log(bills[index].paid);
          }
      }




  }]);
