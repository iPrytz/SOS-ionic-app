(function(){
  'use strict';
  angular.module('app')
    .controller('MediaPodcastCtrl', MediaPodcastCtrl);

  function MediaPodcastCtrl($scope, $stateParams, Storage){
    var data = {}, fn = {};
    $scope.data = data;
    $scope.fn = fn;


  }
})();
