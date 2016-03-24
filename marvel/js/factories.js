angular.module('mainApp')
    .factory('CharacterFactory', function($http, $log) {
	    var marvelApi = {};	    
	    marvelApi.getCharacters = function(){
		var ts = new Date().getTime();
		var publicKey = passwordHolder.publicKey;
		var privateKey = passwordHolder.privateKey;
		var hash = md5(ts+privateKey+publicKey)
		
		var baseUrl = 'http://gateway.marvel.com:80/v1/public/characters?apikey='+publicKey;
		
		baseUrl += "&ts="+ts+"&hash="+hash;
		$log.log(baseUrl);
		
		return $http({method: 'GET',  url:baseUrl})
	    }
	    return marvelApi;
	});

