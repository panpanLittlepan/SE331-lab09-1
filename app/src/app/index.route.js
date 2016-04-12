(function() {
  'use strict';

  angular
    .module('app')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
    $routeProvider.
    when('/addProduct',{
      templateUrl: 'app/product/editProduct.html',
      controller: 'addProductController'
    }).
    when('/editProduct/:id',{
      templateUrl: 'app/product/editProduct.html',
      controller: 'editProductController'
    }).
    when('/listProduct',{
      templateUrl: 'app/product/productList.html',
      controller: 'listProductController',
      controllerAS: 'vm'
    }).
    when('/shoppingCart/:id',{
      templateUrl: 'app/shoppingcart/shoppingCart.html',
      controller: 'showShoppingCartController'
    }).
    otherwise({redirectTo: '/listProduct'});
  }

})();
