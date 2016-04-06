angular.module('starter')
.controller('MenuCtrl', function($http, $scope, $sce){

	$scope.categories = [];

	$http.get("http://newsportal.lightsandshapes.in/api/get_category_index/")
	.then(function(returnedData){

		$scope.categories = returnedData.data.categories;
		$scope.categories.forEach(function(element, index, array){
			element.title = $sce.trustAsHtml(element.title);
		})
		console.log(returnedData);
		
	}, function(err){
		console.log(err);

	})

})
.controller('PostCtrl', function(){
	//alert('hello');
})