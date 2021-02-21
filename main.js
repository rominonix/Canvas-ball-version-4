var boll = document.getElementById("boll");
boll.width = 500;
boll.height=300;
boll.style.backgroundColor="#DCFFFE";
var ctx = boll.getContext("2d");

var x = 12;
var y = 150;
var speedX = 4;
var speedY = 2;
var radie = 10;
var yPos = 100;

function animation(){
    ctx.clearRect(0,0,boll.width, boll.height);
    ctx.beginPath();
    ctx.fillRect(249,yPos,2,100);
    ctx.fillStyle="#735DF5"
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x,y,radie,0,2*Math.PI,false);
    ctx.closePath();
    ctx.fill();
    x += speedX;
    y += speedY;
    // STUDS MOT VÄGG
    if(x>=boll.width-radie || x<=radie){
        speedX = -speedX;
    }
    if(y>boll.height-radie || y<radie){
        speedY = -speedY;
    }
    //STUDS MOT VÄNSTER SIDA PÅ HINDER
    if((x>=240 && x<245) &&(y>yPos && y<(yPos+100))){
            speedX = -speedX;
    }
    //STUDS MOT HÖGER SIDA PÅ HINDER
    if((x<=260 && x>250) &&(y>yPos && y<(yPos+100))){
            speedX = -speedX;
    }
    requestAnimationFrame(animation);
}

animation();

var arrow = window.addEventListener("keydown",function(){
    var kc=event.keyCode;
    if(kc==38) goUp();
    if(kc==40) goDown();
    },false);


function goUp(){
    if(yPos>0) yPos-=4;
}
function goDown(){
    if(yPos<200) yPos+=4;
}