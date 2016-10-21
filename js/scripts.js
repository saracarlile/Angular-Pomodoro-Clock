$(document).ready(function () {
    FastClick.attach(document.body); // remove 300ms delay of click on mobile
    $('button').nodoubletapzoom(); // remove double tap zoon on iOS jQuery plugin   

    var sessionRunning;
    var breakPeriod = false;

    var subtractBreak = function () {
        var breakNum = $('#break-time').text();
        breakNum--;
        if (breakNum > 0) {
            $('#break-time').text(breakNum);
        }
    };

    var addBreak = function () {
        var breakNum = $('#break-time').text();
        breakNum++;
        if (breakNum <= 60) {
            $('#break-time').text(breakNum);
        }
    };

    var subtractSession = function () {
        var sessionNum = $('#session-time').text();
        sessionNum--;
        if (sessionNum > 0) {
            $('#session-time').text(sessionNum);
            $('#minutes').text(sessionNum);
            $('#seconds').text('00');
        }
    };

    var addSession = function () {
        var sessionNum = $('#session-time').text();
        sessionNum++;
        if (sessionNum <= 60) {
            $('#session-time').text(sessionNum);
            $('#minutes').text(sessionNum);
            $('#seconds').text('00');
        }
    };

    var startStopSession = function () {
        if (sessionRunning === undefined) {
            sessionRunning = true;
        }
        else {
            sessionRunning === true ? sessionRunning = false : sessionRunning = true;
            console.log(sessionRunning);
        }


        function disableButton() {
            $('#minus-break, #plus-break, #minus-session, #plus-session').attr('disabled', 'disabled').css('background-color', '#B2DFDB');
            $('#control-btn').css("background-color", '#009688').css("display", "none");
            $('#stop-btn').css("background-color", '#009688').css("display", "block");
            $('body').css("background-color", '#FFFFFF');
        }

        function enableButton() {
            $('#minus-break, #plus-break, #minus-session, #plus-session').removeAttr('disabled').css('background-color', '#009688');
            $('#control-btn').css("background-color", '#FFCDD2').css("display", "block");
            $('#stop-btn').css("display", "none");
            $('body').css("background-color", '#BDBDBD');
        }

        if (sessionRunning === true) {
            disableButton();
        }
        else {
            enableButton();
        }

    }

    function setTimer() {
        if (breakPeriod === false) {
            var sessionNumTime = $('#session-time').text();
            $('#minutes').text(sessionNumTime);
            $('#seconds').text('00');
        }
    }

    function minsGetTime() {
        var minutesLocal = document.getElementById('minutes').textContent;
        return minutesLocal;
    }
    function secsGetTime() {
        var secondsLocal = document.getElementById('seconds').textContent;
        return secondsLocal;
    }


    var myTimer = null;
    var oElem = document.getElementById("session-time").textContent;
    var mins = minsGetTime();
    var secs = secsGetTime();  //mins and seconds are being set when document loads ... not after buttons are used to add/remove break/session......
                                ///add function to buttons to update min value in work session
    var minsInt = parseInt(mins, 10);
    var secsInt = parseInt(secs, 10);
    var total = (minsInt * 60) + secsInt;
    console.log(total);

    function getseconds() {
        return total % 60;
    }

    function getminutes() {
        return Math.floor(total / 60);
    }


    function updateText() {
        total--;
        console.log(total);
        var readMins = getminutes();
        var readSecs = getseconds();
        $('#minutes').text(readMins);
        $('#seconds').text(readSecs);
    }



    function countdown() {
        myTimer = window.setInterval(updateText, 1000);
    }

    function stopUpdateText() {
        console.log("not running");
        window.clearInterval(myTimer);
    }










    $('#minus-break').on('click', subtractBreak);
    $('#plus-break').on('click', addBreak);
    $('#minus-session').on('click', subtractSession);
    $('#plus-session').on('click', addSession);

    $('#control-btn').on('click', function () {
        startStopSession();
        setTimer();
        countdown();
    });
    $('#stop-btn').on('click', function () {
        startStopSession();
        stopUpdateText();
    });

});

