(function(){
  'use strict';
  angular.module('app')
    .controller('MediaSelectCtrl', MediaSelectCtrl);

  function MediaSelectCtrl($scope, $stateParams, Storage){
    var data = {}, fn = {};
    $scope.data = data;
    $scope.fn = fn;


  }
})();
