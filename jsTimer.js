//timer variables
var minutesLabel;
var secondsLabel;
var totalSeconds;
var valString;
var intreval;
//timer functions
function startTimer(){
	minutesLabel = document.getElementById("minutes");
	secondsLabel = document.getElementById("seconds");
	totalSeconds = 0;
	intreval=setInterval(setTime, 1000);

	function setTime() {
	  ++totalSeconds;
	  secondsLabel.innerHTML = pad(totalSeconds % 60);
	  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
	}

	function pad(val) {
	  var valString = val + "";
	  if (valString.length < 2) {
	    return "0" + valString;
	  } else {
	    return valString;
	  }
	}
}
var click=1;
function startFunction() {
	if(click==1){
    	startTimer();
    	document.getElementById("image").src = 'G6.png';
    	document.getElementById("text").innerHTML = "STUDY";
    }
    click++;
}
function stop(){
	click=1;
	clearInterval(intreval);
	document.getElementById("image").src = 'G2.png';
	document.getElementById("text").innerHTML = "BREAK";
}