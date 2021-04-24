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
       
        $scope.borrar = function (nave) {
            var respuesta = confirm('¿Desea eliminar "'+ nave.name +'"?');
            if(respuesta) {
                var idx = $scope.starships.indexOf(nave);
                $scope.starships.splice(idx,1);
            }
          }
  })
.component('listado',{
    templateUrl: 'listadocmp.html'
    })
.controller('bodyctrl', function() {
    var vm = this;
    vm.message = 'Hi from home';
  });
  