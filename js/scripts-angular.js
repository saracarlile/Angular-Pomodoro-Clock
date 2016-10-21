
var app = angular.module('pomodoroClock', []);

app.controller('clockController', function($scope) {
  $scope.breakLength = 5;
  $scope.sessionLength = 25;
  $scope.timeLeft = $scope.sessionLength;
  $scope.sessionName = 'Work Session';
  $scope.currentTotal;

 

});


app.controller('setTimeController', function($scope) {

     $scope.subtractBreak = function() { 
        if ($scope.breakLength > 0) {
            $scope.breakLength--;
        }
    }

    $scope.addBreak = function(){
        if ($scope.breakLength<= 60) {
            $scope.breakLength++;
        }
    }
    $scope.subtractSession = function() { 
        if ($scope.sessionLength > 0) {
            $scope.sessionLength--;
        }
    }

    $scope.addSession = function(){
        if ($scope.sessionLength<= 60) {
            $scope.sessionLength++;
        }
    }  

});

app.controller('displayTimeController', function($scope) {
       
  
});

app.controller('startStopResetController', function($scope) {
       
  
});