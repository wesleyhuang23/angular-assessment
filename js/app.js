angular.module('assessment', ['ui.router'])
.config(function($urlRouterProvider, $stateProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {
    templateUrl: './views/home.html',
    url: '/'
  })
  .state('shop', {
    templateUrl: './views/shop.html',
    url: '/shop',
    controller: 'shopCtrl'
  }).state('blog', {
    templateUrl: './views/blog.html',
    url: '/blog',
    controller: 'blogCtrl'
  }).state('details', {
    templateUrl: './views/product-details.html',
    url: '/details/:id',
    controller: 'product-detailsCtrl'
  }).state('about', {
    templateUrl: './views/about.html',
    url: '/about',
    controller: 'aboutCtrl'
  });
});
