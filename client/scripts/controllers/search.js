myApp.controller('SearchController', ['$scope', 'SearchService', function($scope, SearchService){
    console.log('search connected');
    SearchService.works();

    $scope.submit = function(data){
        console.log(data);
        SearchService.getSpells(data);
    }

    $scope.getCantrip = SearchService.getCantrips;
}]);
