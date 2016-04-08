myApp.factory('SearchService', ['$http', function($http){

    // var spellObject = {};

    var getByClass = function(class){
        $http.get('/spell/class/' + class).then(function(response){
            console.log(response.data);
        });
    };

    var getByLevel = function(level){
        $http.get('/spell/level/' + level).then(function(response){
            console.log(response.data);
        });
    };

    var getByName = function(name){
        $http.get('/spell/name/' + name).then(function(response){
            console.log(response.data);
        });
    };

    var getByClassLevel = function(class, level){
        $http.get('/spell/classlevel/' + class + '/' +  level).then(function(response){
            console.log(response.data);
        });
    };

    return {
        getByName: getByName,
        getByLevel: getByLevel,
        getByClass: getByClass,
        getByClassLevel: getByClassLevel,
    };
}]);
