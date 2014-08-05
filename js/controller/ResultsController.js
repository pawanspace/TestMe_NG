angular.module('TestMe')
.controller('ResultsController',['$scope', '$location','FilterFactory',  function($scope, $location, FilterFactory) {

    $scope.selectedFilters = FilterFactory.getSelectedFilters();


    $location.search('selectedItems');
  
}]);