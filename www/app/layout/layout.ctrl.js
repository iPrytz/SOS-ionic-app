(function(){
  'use strict';
  angular.module('app')
    .controller('LayoutCtrl', LayoutCtrl);

  function LayoutCtrl($state, $scope, $ionicHistory, Storage){
    var fn = {};
    $scope.fn = fn;

    var navIcons = document.getElementsByClassName('ion-navicon');
    for (var i = 0; i < navIcons.length; i++) {
        navIcons.addEventListener('click', function () {
            this.classList.toggle('active');
        });
    }

    fn.logout = function(){
      Storage.clear().then(function(){
        $ionicHistory.clearHistory();
        $ionicHistory.clearCache();
        $state.go('login');
      });
    };
  }
})();
