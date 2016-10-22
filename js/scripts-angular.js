
var app = angular.module('pomodoroClock', []);

app.controller('clockController', function($scope) {
    $scope.breakLength = 5;
    $scope.sessionLength = 29;
    $scope.timeLeft = $scope.sessionLength;
    $scope.sessionName = 'Work Session';
    $scope.currentTotal;

    $scope.subtractBreak = function(time) { 
        if ($scope.breakLength > 1) {
            $scope.breakLength -= time;
        }
    }

    $scope.addBreak = function(time){
        if ($scope.breakLength<= 60) {
            $scope.breakLength += time;
            
        }
    }
    $scope.subtractSession = function(time) { 
        if ($scope.sessionLength > 1) {
            $scope.sessionLength -= time;
                $scope.timeLeft = $scope.sessionLength;
        }
    }

    $scope.addSession = function(time){
        if ($scope.sessionLength<= 60) {
            $scope.sessionLength += time;
            $scope.timeLeft = $scope.sessionLength;
        }
    }  

    


});


