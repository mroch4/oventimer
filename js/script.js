var minutes = 0;
var seconds = 0;

function minutesIncrementation() {
    if (minutes > 98) {
        $('#leftTens').html('0');
        $('#leftOnes').html('0');
        alert('This timer can be only set up to:\n1 hour,\n39 minutes and\n59 seconds!');
        setTimeout(location.reload(), 3000);
        return;
    }
    if (minutes < 0) {
        minutes == 0;
    } else {
        minutes = minutes + 1;
    } if (minutes < 10) {
        $('#leftOnes').html(minutes);
    } else {
        var tensPartOfMinutes = Math.floor((minutes / 10));
        var onesPartOfMinutes = minutes - tensPartOfMinutes * 10;
        $('#leftTens').html(tensPartOfMinutes);
        $('#leftOnes').html(onesPartOfMinutes);
    }
    // console.log(minutes);
}

function minutesDecrementation() {
    if (minutes == 0) {
        return;
    } else {
        minutes = minutes - 1;
    } if (minutes > 9) {
        var tensPartOfMinutes = Math.floor((minutes / 10));
        var onesPartOfMinutes = minutes - tensPartOfMinutes * 10;
        $('#leftTens').html(tensPartOfMinutes);
        $('#leftOnes').html(onesPartOfMinutes);
    } else {
        $('#leftTens').html(0);
        $('#leftOnes').html(minutes);
    }
    // console.log(minutes);
}


function secondsIncrementation() {
    if (seconds < 0) {
        seconds == 0;
    } else {
        seconds = seconds + 5;
    } if (seconds < 10) {
        $('#rightOnes').html(seconds);
    } else if (seconds > 9 && seconds < 60) {
        var tensPartOfSeconds = Math.floor((seconds / 10));
        var onesPartOfSeconds = seconds - tensPartOfSeconds * 10;
        $('#rightTens').html(tensPartOfSeconds);
        $('#rightOnes').html(onesPartOfSeconds);
    } else {
        $('#rightTens').html('0');
        $('#rightOnes').html('0');
        return seconds = 0;
    }
    // console.log(seconds);
}

function secondsDecrementation() {
    if (seconds == 0) {
        return;
    } else {
        seconds = seconds - 5;
        // console.log(seconds);
    } if (seconds < 9) {
        $('#rightTens').html(0);
        $('#rightOnes').html(seconds);
    } else {
        var tensPartOfSeconds = Math.floor((seconds / 10));
        var onesPartOfSeconds = seconds - tensPartOfSeconds * 10;
        $('#rightTens').html(tensPartOfSeconds);
        $('#rightOnes').html(onesPartOfSeconds);
    }
    // console.log(seconds);
}

function startCountdown() {
    document.getElementById("minutesIncrementation").disabled = true;
    document.getElementById("minutesDecrementation").disabled = true;
    document.getElementById("secondsIncrementation").disabled = true;
    document.getElementById("secondsDecrementation").disabled = true;
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
    var setTime = minutes * 60 + seconds;
    var leftTime = setTime;
    if (setTime == 0) {
        alert('Set time to start the timer!');
        location.reload();
    } else {
        function countdown() {
            if (setTime == 0) {
                var audio = new Audio('./bell.mp3');
                audio.play();
                return
            } else {
                setTime = setTime - 1;

                var leftMinutes = Math.floor(setTime / 60);
                var leftSeconds = setTime - 60 * leftMinutes;

                if (setTime > 599) {

                    var leftMinutesTens = Math.floor(leftMinutes / 10);
                    var leftMinutesOnes = leftMinutes - leftMinutesTens * 10;
                    var leftSecondsTens = Math.floor((setTime - (leftMinutesTens * 10 + leftMinutesOnes) * 60) / 10);
                    var leftSecondsOnes = leftSeconds - 10 * leftSecondsTens;
                    $('#leftTens').html(leftMinutesTens);
                    $('#leftOnes').html(leftMinutesOnes);
                    $('#rightTens').html(leftSecondsTens);
                    $('#rightOnes').html(leftSecondsOnes);

                } else {

                    $('#leftTens').html('0');
                    $('#leftOnes').html(leftMinutes);

                    if (leftSeconds < 10) {
                        $('#rightTens').html(0);
                        $('#rightOnes').html(leftSeconds);
                    }

                    else if (leftSeconds < 60) {
                        var leftSecondsTens = Math.floor(leftSeconds / 10);
                        var leftSecondsOnes = leftSeconds - 10 * leftSecondsTens;
                        $('#rightTens').html(leftSecondsTens);
                        $('#rightOnes').html(leftSecondsOnes);
                    }
                }
            }

            if (setTime / leftTime > .75) {
                document.getElementById('1').style.visibility = 'visible';
                document.getElementById('2').style.visibility = 'visible';
                document.getElementById('3').style.visibility = 'visible';
                document.getElementById('4').style.visibility = 'visible';
                document.getElementById('progressValue').style.visibility = 'visible';
                document.getElementById('progressValue').innerText = (Math.round(100 * (setTime / leftTime)) + '%');
            } else if (setTime / leftTime > .5 && setTime / leftTime <= .75) {
                document.getElementById('1').style.visibility = 'hidden';
                document.getElementById('2').style.visibility = 'visible';
                document.getElementById('3').style.visibility = 'visible';
                document.getElementById('4').style.visibility = 'visible';
                document.getElementById('progressValue').style.visibility = 'visible';
                document.getElementById('progressValue').innerText = (Math.round(100 * (setTime / leftTime)) + '%');
            } else if (setTime / leftTime > .25 && setTime / leftTime <= .5) {
                document.getElementById('1').style.visibility = 'hidden';
                document.getElementById('2').style.visibility = 'hidden';
                document.getElementById('3').style.visibility = 'visible';
                document.getElementById('4').style.visibility = 'visible';
                document.getElementById('progressValue').style.visibility = 'visible';
                document.getElementById('progressValue').innerText = (Math.round(100 * (setTime / leftTime)) + '%');
            } else if (setTime / leftTime > 0 && setTime / leftTime <= .25) {
                document.getElementById('1').style.visibility = 'hidden';
                document.getElementById('2').style.visibility = 'hidden';
                document.getElementById('3').style.visibility = 'hidden';
                document.getElementById('4').style.visibility = 'visible';
                document.getElementById('progressValue').style.visibility = 'visible';
                document.getElementById('progressValue').innerText = (Math.round(100 * (setTime / leftTime)) + '%');
            } else {
                document.getElementById('1').style.visibility = 'hidden';
                document.getElementById('2').style.visibility = 'hidden';
                document.getElementById('3').style.visibility = 'hidden';
                document.getElementById('4').style.visibility = 'hidden';
                document.getElementById('progressValue').style.visibility = 'hidden';
            }

            if (setTime % 2 == 0) {
                document.getElementById("separator").style.visibility = 'hidden';
            } else {
                document.getElementById("separator").style.visibility = 'visible';
            }
        }
    }
    setInterval(countdown, 1000);
}

function stopCountdown() {
    location.reload();
    return;
}