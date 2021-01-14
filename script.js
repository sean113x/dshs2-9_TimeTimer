var btnPlay = $("#play"),
btnPause = $("#pause"),
btnReset = $("#reset");

var minute  = 60,        
remainTime,
timer,
run =false;

var canvas = document.getElementById("remainTime");
var ctx = canvas.getContext("2d");
ctx.strokeStyle = "#f6ff00";
ctx.lineWidth = 90;

var darkMode = $("#darkMode");
var lightMode = $("#lightMode");

const currentMode = localStorage.getItem("mode");

btnPause.hide();

btnPlay.on("click", clickPlay);
btnPause.on("click", clickPause);
btnReset.on("click", clickReset);



function handleChange() {
if (document.getElementById('minute').value > 60) document.getElementById('minute').value = 60;
if (document.getElementById('minute').value < 1) document.getElementById('minute').value = 1;
}

function getMinute() {
var minute = document.getElementById('minute').value;
remainTime = minute * 60;
if (minute == 60) remainTime--;
drawArc();
}

function drawArc() {
var remainPercent = (60 * 60 - remainTime) / (60*60);
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.beginPath();
ctx.arc(110, 110, 64, 1.5 * Math.PI + remainPercent * (2 * Math.PI), 1.5 * Math.PI);
ctx.stroke();
}

function clickPlay(){
run = true;
btnPlay.hide();
btnPause.show();
timer = setInterval(runTimer, 1000);
}

function clickPause(){
run = false;
btnPlay.show();
btnPause.hide();
clearInterval(timer);
$("body").removeClass("blink");
}

function clickReset(){
clickPause();
getMinute();
}

function runTimer() {
if (remainTime === 0) {
clearInterval(timer);
$("body").addClass("blink");
btnPause.hide();
} else {
remainTime--;
drawArc();
}
}

var Body = {
    setColor:function(color) {
      document.querySelector('body').style.color=color;
    },
    setBackgroundColor:function(color) {
      document.querySelector('body').style.backgroundColor=color;
    }
  }
  function darkModeClick(){
  Body.setBackgroundColor('black');
  Body.setColor('white');
  darkMode.hide();
  lightMode.show();
  localStorage.setItem("mode", "dark");
} 

  function lightModeClick(){
  Body.setBackgroundColor('white');
  Body.setColor('black');
  darkMode.show();
  lightMode.hide();
  localStorage.setItem("mode", "light");
} 

function cookiemode(mode) {
  if (mode==="dark") {
    darkModeClick();
  } else {
    lightMode.hide();
  }
}


function getChecklist(){
	alert('의견을 제출해 주셔서 감사합니다. 더욱 노력하는 파인애플 타이머가 되겠습니다.');
}

 if(getyellow() == pineapple){
   ctx.strokeStyle = "#f6ff00";
}else if(getblue() == 블루오션){
   ctx.strokeStyle = "#2E9AFE";
}else if(getbrown() == 💩){
   ctx.strokeStyle = "#8A4B08";
}

cookiemode(currentMode);



