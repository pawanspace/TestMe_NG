angular.module('TestMe')
.factory('FilterFactory', [function(){

  var FilterFactory = function(){
    this.selectedFilters = [];
    this.filters = this.loadFilters();
  };

  /**
   * This can be ajax call to node server
   */
  FilterFactory.prototype.loadFilters = function(){
    return [
      {name: 'Abstract', selected: false},
      {name: 'Publication', selected: false},
      {name: 'Inventor', selected: false},
      {name: 'Language', selected: false},
      {name: 'Source', selected: false},
      {name: 'Priority', selected: false} 
    ];
  }


  FilterFactory.prototype.getFilters = function(){
    return this.filters;
  }

  FilterFactory.prototype.setSelectedFilters = function(selectedFilters){
   this.selectedFilters = selectedFilters;
  }

  FilterFactory.prototype.getSelectedFilters = function(){
    return this.selectedFilters;
  }

  return new FilterFactory();
}]);