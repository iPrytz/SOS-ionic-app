(function(){
  'use strict';
  angular.module('app')
    .controller('MediaVimeoCtrl', MediaVimeoCtrl);

  function MediaVimeoCtrl($scope, $stateParams, Storage){
    var data = {}, fn = {};
    $scope.data = data;
    $scope.fn = fn;


  }
})();
