angular.module('SignupModule').controller('SignupController', ['$scope', '$http', function($scope, $http){



	$scope.signupForm = {};

	$scope.createUser = function(){
		$http.post('/signup', {
		
			name: $scope.signupForm.name,
			email: $scope.signupForm.email,
			password: $scope.signupForm.password


		})
		.then(function onSuccess(){

			window.location = '/user';
			console.log('signup completed.');
		});
	}


}]);