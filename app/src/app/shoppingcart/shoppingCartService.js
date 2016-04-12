(function(){
'use strict'
  angular
    .module('app',[])
    .factory('shoppingCartServices',shoppingCartServices);

  /** @ngInject */
    function shoppingCartServices($resource){
    return $resource('http://localhost:8080/shoppingcart/:id', { id: '@_id' }, {
      update: {
        method: 'PUT' // this method issues a PUT request
      }});


  }
})();
