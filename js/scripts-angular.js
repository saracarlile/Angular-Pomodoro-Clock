
var app = angular.module('pomodoroClock', []);

app.controller('clockController', function($scope) {
    $scope.breakLength = 5;
    $scope.sessionLength = 29;
    $scope.timeLeft = $scope.sessionLength;
    $scope.sessionName = 'Work Session';
    $scope.currentTotal;

    $scope.subtractBreak = function() { 
        if ($scope.breakLength > 1) {
            $scope.breakLength -= 1;
        }
    }

    $scope.addBreak = function(){
        if ($scope.breakLength<= 60) {
            $scope.breakLength += 1;
            
        }
    }
    $scope.subtractSession = function() { 
        if ($scope.sessionLength > 1) {
            $scope.sessionLength -= 1;
                $scope.timeLeft = $scope.sessionLength;
        }
    }

    $scope.addSession = function(){
        if ($scope.sessionLength<= 60) {
            $scope.sessionLength += 1;
            $scope.timeLeft = $scope.sessionLength;
        }
    }  

    


});


