
var app = angular.module('pomodoroClock', []);

app.controller('clockController', function($scope) {
  $scope.breakLength = 5;
  $scope.sessionLength = 25;
  $scope.timeLeft = $scope.sessionLength;
  $scope.fillLength = '0%';
  $scope.sessionName = 'Session';
  $scope.currentTotal;
});