angular.module('app',[])
.component('cuerpo',{
    templateUrl:'cuerpocmp.html',
    controller : function cuerpoController(){
        console.log('cuerpo');
    }
})
.component('listado',{
    templateUrl: 'listadocmp.html',
    controller : function listadoController(){
       var valor = 'walter';
        console.log('text'+valor);    
    }
});