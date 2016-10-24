
var app = angular.module('pomodoroClock', []);

app.controller('clockController', function ($scope) {
    $scope.breakLength = 5;
    $scope.sessionLength = 29;
    $scope.timeLeft = $scope.sessionLength + ":00";
    $scope.sessionName = 'Work Session';
    $scope.currentTotal;

    $scope.subtractBreak = function () {
        if ($scope.breakLength > 1) {
            $scope.breakLength -= 1;
        }
    }

    $scope.addBreak = function () {
        if ($scope.breakLength <= 60) {
            $scope.breakLength += 1;

        }
    }
    $scope.subtractSession = function () {
        if ($scope.sessionLength > 1) {
            $scope.sessionLength -= 1;
            $scope.timeLeft = $scope.sessionLength + ":00";
        }
    }

    $scope.addSession = function () {
        if ($scope.sessionLength <= 60) {
            $scope.sessionLength += 1;
            $scope.timeLeft = $scope.sessionLength + ":00";
        }
    }


    var myTimer = null;


    function updateText() {
        var readTime = $scope.timeLeft;
        var splitTime = readTime.split(":");
        var minsInt = parseInt(splitTime[0], 10);
        var secsInt = parseInt(splitTime[1], 10);
        var total = minsInt * 60 + secsInt;
        if (total > 0) {
            total--;
            var seconds =  total % 60;
            if(seconds < 10){
                seconds = "0" + seconds;
            }
            $scope.timeLeft = Math.floor(total / 60) + ":" + seconds;  //mins + ":" + seconds
            $scope.$apply();          
        }
    }


    $scope.countdown = function () {
        myTimer = window.setInterval(updateText, 1000);
    }

    $scope.stopCountdown = function () {
        console.log("not running");
        window.clearInterval(myTimer);
    }

});


