var app = angular.module('pomodoroClock', []);

app.controller('clockController', function ($scope) {
    $scope.breakLength = 5;
    $scope.sessionLength = 25;
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
        if ($scope.sessionName === 'Work Session') {
            var readTime = $scope.timeLeft;
            var splitTime = readTime.split(":");
            var minsInt = parseInt(splitTime[0], 10);
            var secsInt = parseInt(splitTime[1], 10);
            var total = minsInt * 60 + secsInt;
            if (total > 0) {
                total--;
                var seconds = total % 60;
                if (seconds < 10) {
                    seconds = "0" + seconds;
                }
                $scope.timeLeft = Math.floor(total / 60) + ":" + seconds;  //mins + ":" + seconds
                $scope.$apply();
            }
            if (total <= 0) {
                $scope.sessionName = 'Break Session';
                $scope.timeLeft = $scope.breakLength + ":00";
                $scope.$apply();
            }
        }
        if ($scope.sessionName === 'Break Session') {
            document.body.style.background = '#E6E6FA';
            var readBreakTime = $scope.timeLeft;
            var splitBreakTime = readBreakTime.split(':');
            var minsIntBreak = parseInt(splitBreakTime[0], 10);
            var secsIntBreak = parseInt(splitBreakTime[1], 10);
            var totalBreak = minsIntBreak * 60 + secsIntBreak;
            totalBreak--;
            var secondsBreak = totalBreak % 60;
            if (secondsBreak < 10) {
                secondsBreak = "0" + secondsBreak;
            }
            $scope.timeLeft = Math.floor(totalBreak / 60) + ":" + secondsBreak;
            $scope.$apply();
        }
        if (totalBreak <= 0) {
            $scope.sessionName = 'Work Session';
            $scope.timeLeft = $scope.sessionLength + ":00";
            $scope.$apply();
            document.body.style.background = 'white';
        }

    }

    $scope.countdown = function () {
        myTimer = window.setInterval(updateText, 1000);
    }

    $scope.stopCountdown = function () {
        window.clearInterval(myTimer);
    }

    $scope.resetCountdown = function () {
        $scope.breakLength = 5;
        $scope.sessionLength = 25;
        $scope.timeLeft = $scope.sessionLength + ":00";    
    }

});