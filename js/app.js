angular.module('TestMe', ['ngRoute'])
.config(["$routeProvider", function($routeProvider){
   
  $routeProvider
  .when("/index", {
    controller : "FormController",
    templateUrl: "js/template/checkbox-form.html"
  })
  .when("/results", {
    controller : "ResultsController",
    templateUrl: "js/template/results.html"
  })
  .otherwise({
    redirectTo: "/index"
  });

}]);

