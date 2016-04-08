myApp.factory('SearchService', ['$http', function($http){
    var works = function(){
        console.log('factory works');
    }

    var spellObject = {};

    var getSpells = function(){
        $http.get('/spell').then(function(response){
            spellObject.response = response.data;
            console.log(spellObject);
        });
    };

    var getCantrips = function(){
        $http.get('/').then(function(response){
            console.log(response.data);
        });
    };

    return {
        works: works,
        getSpells: getSpells,
        getCantrips: getCantrips,
    };
}]);
