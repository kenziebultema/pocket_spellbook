myApp.controller('SearchController', ['$scope', 'SearchService', function($scope, SearchService){
    $scope.spellInfo = {};

    $scope.submit = function(data){
        if(!data){
            console.log('no data input');
        } else if(data.name){
            SearchService.getByName(data.name);
        } else if(data.class && data.level){
            SearchService.getByClassLevel(data.class, data.level);
        } else if(data.class){
            SearchService.getByClass(data.class);
        } else if(data.level){
            SearchService.getByLevel(data.level);
        }
        $scope.spellInfo = {};
    }

    $scope.spellArray = SearchService.spellObject;
}]);
