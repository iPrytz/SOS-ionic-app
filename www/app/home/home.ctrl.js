(function(){
  'use strict';
  angular.module('app')
    .controller('HomeCtrl', HomeCtrl);

  function HomeCtrl($scope, $stateParams, Storage){
    var data = {}, fn = {};
    $scope.data = data;
    $scope.fn = fn;


  }
})();
