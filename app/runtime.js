function RuntimeController($scope) {
  // A list
  $scope.letters = "ABCDEFGHIJKLMNOP".split('');

  // A slow watch
  $scope.$watch(
      /* expression */ function() {
        return document.querySelector('div').innerHTML.length;
      },
      /* listener */ function(val) {
        $scope.leftDivInKB = '' + (Math.round(1000 * val / 1024) / 1000) + ' KB'
      });
}
