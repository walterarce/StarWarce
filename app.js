angular.module('app',[])
.component('cuerpo',{
    templateUrl:'cuerpocmp.html'

}) 
.controller('starshipsCtrl', function($scope, $http) {
    $http({
        method: 'GET',
        url: 'https://swapi.dev/api/starships/',
        data: 'parameters'
        }).then(function success(response) {
            $scope.starships =[];
            $scope.starships= response.data.results;
            $scope.statusval = response.status;
            $scope.statustext = response.statusText;
            $scope.headers = response.headers();
        }, function error(response) {
        });
  })
.component('listado',{
    templateUrl: 'listadocmp.html'
    })
.controller('bodyctrl', function() {
    var vm = this;
    vm.message = 'Hi from home';
    console.log(vm.message);
  });