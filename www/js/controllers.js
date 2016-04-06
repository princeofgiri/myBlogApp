angular.module('starter')
.controller('MenuCtrl', function($http, $scope){

	$scope.categories = [];
	$http.get("http://newsportal.lightsandshapes.in/api/get_category_index/")
	.then(function(returnedData){

		$scope.categories = returnedData.data.categories;
		console.log(returnedData);

	}, function(err){
		console.log(err);

	})

})
.controller('PostCtrl', function(){
	//alert('hello');
})