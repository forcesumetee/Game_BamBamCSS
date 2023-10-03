window.onload = pageLoad;

var timer;

function pageLoad(){
	document.getElementById("start").onclick = startGame;
}
function startGame(){
	alert("Ready");
	Box();
	timeStart();

}

function timeStart(){
	var TIMER_TICK = 1000;
	var min = 0.5; // เอาไปคูณ
	var AnswerTime = min*60;
	var x = document.getElementById('clock');

	timer = setInterval(function(){
		AnswerTime -= 1;
		x.innerHTML = AnswerTime + "s";
		if(AnswerTime <= 0){
			clearInterval(timer);
			if(document.querySelectorAll("#layer div").length > 0){
				alert("Game Over");
				clearScreen();
			} else {
				alert("Win!")
			}
		}
	}, TIMER_TICK)
}

function Box(){
	var numbox = parseInt(document.getElementById("numbox").value);
	var gameLayer = document.getElementById("layer");
	var colorDrop = document.getElementById("color").value;

	for (var i = 0; i < numbox; i++) {
		var tempbox = document.createElement("div");
		tempbox.className = "square " + colorDrop;
		tempbox.id = "box" +i;
		tempbox.style.left = Math.random()*(500-25) + "px";
		tempbox.style.top = Math.random()*(500-25) + "px";

		gameLayer.appendChild(tempbox);
		bindBox(tempbox);
        
        
	}
}

function bindBox(box){
	box.onclick = function(){
        box.parentNode.removeChild(box);
    }
}

function clearScreen(){
	var allbox = document.querySelectorAll("#layer div");

    for (var i=0;i<allbox.length;i++){
        allbox[i].parentNode.removeChild(allbox[i]);
        
    }
}