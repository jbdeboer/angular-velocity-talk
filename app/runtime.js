function RuntimeController($scope, $rootScope) {
  var startTime;
  $scope.letters = [];
  for (i = 0; i < 250; i++) {
    $scope.letters.push('foo' + i);
  }
}
