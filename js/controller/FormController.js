angular.module('TestMe')
.controller('FormController',['$scope', '$location','FilterFactory',  function($scope, $location, FilterFactory) {

  $scope.filters = FilterFactory.getFilters();

  $scope.masterSelector = false;

  $scope.totalSelected = 0;

  $scope.$watch('masterSelector', function(value) {
      if($scope.totalSelected === $scope.filters.length || value){
        $scope.filters.forEach(function(filter) {
          filter.selected = value;
        });
        $scope.totalSelected = value ? $scope.filters.length : 0;
      }
  });

  $scope.$watch('totalSelected', function() {
      $scope.masterSelector = $scope.totalSelected === $scope.filters.length ? true : false;
  });

  $scope.check = function(filter){
    filter.selected = !filter.selected;
    filter.selected ? $scope.totalSelected++ : $scope.totalSelected--;
  }


  $scope.submit = function() {
    var selectedItems = $scope.filters.filter(function(element){
      return element.selected;
    });

    FilterFactory.setSelectedFilters(selectedItems);
    $location.path('/results');
  };


}]);