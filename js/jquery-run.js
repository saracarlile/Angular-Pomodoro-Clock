$(document).ready(function () {
    FastClick.attach(document.body); // remove 300ms delay of click on mobile
    $('button').nodoubletapzoom(); // remove double tap zoon on iOS jQuery plugin   

    
    var sessionRunning;
     var startStopSession = function () {
        if (sessionRunning === undefined) {
            sessionRunning = true;
        }
        else {
            sessionRunning === true ? sessionRunning = false : sessionRunning = true;
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


    document.getElementById("control-btn").addEventListener("click", startStopSession);
    document.getElementById("stop-btn").addEventListener("click", startStopSession);
});

