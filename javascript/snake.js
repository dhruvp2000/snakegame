window.onload = function() {
const cvs = document.getElementById("canvas");
const ctx = cvs.getContext("2d");
var cvsW = cvs.width;
var cvsH = cvs.height;
var scr=0;
var snkW= 10;
var snkH = 10;
var direction = "right";
document.addEventListener("keydown",getDirection);
function getDirection(event){
	if(event.keyCode == 37 && direction != "right"){
		direction = "left";
	}
	else if(event.keyCode == 38 && direction != "down"){
		direction = "up";
	}
	if(event.keyCode == 39 && direction != "left"){
		direction = "right";
	}
	if(event.keyCode == 40 && direction != "up"){
		direction = "down";
	}
}
function drawFood(x,y){
	ctx.fillStyle = "red";
		ctx.fillRect(x*snkW,y*snkH,snkW,snkH);

		ctx.fillStyle = "blue";
		ctx.strokeRect(x*snkW,y*snkH,snkW,snkH);

}
function drawSnk(x,y)
{
		ctx.fillStyle = "lime";
		ctx.fillRect(x*snkW,y*snkH,snkW,snkH);

		ctx.fillStyle = "lime";
		ctx.strokeRect(x*snkW,y*snkH,snkW,snkH);

}
function drawS(x,y)
{
		ctx.fillStyle = "black";
		ctx.fillRect(x*snkW,y*snkH,snkW,snkH);

		ctx.fillStyle = "blue";
		ctx.strokeRect(x*snkW,y*snkH,snkW,snkH);

}
var len = 1;
var snake = [];
for(var i=len-1;i>=0;i--){
	snake.push(
	{
		x:i,
		y:0
	}
		);
}
 food = {
	x : Math.round(Math.random()*(cvsW/snkW-1)+1),
	y : Math.round(Math.random()*(cvsH/snkH-1)+1)
}
function collide(x,y,array){
	for(var i=1;i<array.length;i++){
		if( x == array[i].x && y == array[i].y){
			return true;
		}
	}
	return false;
}
function drawscr(x){
	ctx.fillStyle = "white";
	ctx.font = "15px Comic Sans MS"
	ctx.fillText("Score :"+x,5,cvsH-5);

}
function draw(){
	ctx.clearRect(0,0,cvsW,cvsH)
	for(var i=0;i<snake.length;i++){
var x = snake[i].x;
var y = snake[i].y;
drawSnk(x,y);
	}
	 for(var i=0;i<15;i++){
	    drawS(i,10);
}
 for(var i=0;i<15;i++){
	    drawS(27,i);
}
 for(var i=25;i<50;i++){
	    drawS(i,25);
}
for(var i=10;i<30;i++){
	    drawS(i,40);
}
for(var i=10;i<25;i++){
	    drawS(40,i);
}
 for(var i=25;i<50;i++){
	    drawS(10,i);
}
	drawFood(food.x,food.y);
	var snkX = snake[0].x;
	var snkY = snake[0].y;

    if(snkX<0 || snkY<0 || snkX>= cvsW/snkW ||snkY>= cvsH/snkH || collide(snkX,snkY,snake)){
    	location.reload();
    } 

	 for(var i=0;i<15;i++){
	 if(snkX ==i && snkY == 10) location.reload();   
}
 for(var i=0;i<15;i++){
	   if(snkX ==27 && snkY == i) location.reload();
}
 for(var i=25;i<50;i++){
	     if(snkX ==i && snkY == 25) location.reload();
}
for(var i=10;i<30;i++){
	    if(snkX ==i && snkY == 40) location.reload(); 
}
for(var i=10;i<25;i++){
	    if(snkX ==40 && snkY == i) location.reload(); 
}
 for(var i=25;i<50;i++){
	     if(snkX ==10 && snkY == i) location.reload();
	}
	if(direction == "left")snkX--;
	else if(direction == "right")snkX++;
	else if(direction == "up")snkY--;
	else if(direction == "down")snkY++;

if(snkX == food.x && snkY==food.y){
food = {
	x : Math.round(Math.random()*(cvsW/snkW-1)+1),
	y : Math.round(Math.random()*(cvsH/snkH-1)+1)
};
		 for(var i=0;i<15;i++){
	
if( i == food.x && food.y==10){
food = {
	x : Math.round(Math.random()*(cvsW/snkW-1)+1),
	y : Math.round(Math.random()*(cvsH/snkH-1)+1)
}   
}
}
 for(var i=0;i<15;i++){
	  
if( food.x == 27 && food.y == i){
food = {
	x : Math.round(Math.random()*(cvsW/snkW-1)+1),
	y : Math.round(Math.random()*(cvsH/snkH-1)+1)
}
}	  
}
 for(var i=25;i<50;i++){
	    
if( food.x ==i && food.y==25){
food = {
	x : Math.round(Math.random()*(cvsW/snkW-1)+1),
	y : Math.round(Math.random()*(cvsH/snkH-1)+1)
}
}	   
}
for(var i=10;i<30;i++){
	   
if(snkX == food.x && snkY==food.y){
food = {
	x : Math.round(Math.random()*(cvsW/snkW-1)+1),
	y : Math.round(Math.random()*(cvsH/snkH-1)+1)
}
}	   
}
for(var i=10;i<25;i++){
	   
if(food.x ==40 && food.y==i){
food = {
	x : Math.round(Math.random()*(cvsW/snkW-1)+1),
	y : Math.round(Math.random()*(cvsH/snkH-1)+1)
}
}	    
}
 for(var i=25;i<50;i++){
	    
if( food.x==10 && food.y==i){
food = {
	x : Math.round(Math.random()*(cvsW/snkW-1)+1),
	y : Math.round(Math.random()*(cvsH/snkH-1)+1)
}
}	   
	}
	var newH ={
		x:snkX,
		y:snkY
	};
	scr++;
}
else{
	snake.pop();
		var newH ={
		x:snkX,
		y:snkY
	};
}


	snake.unshift(newH);
	drawscr(scr);
}
var t = 80;
setInterval(draw,t);
document.getElementById("speed").onclick=function() {
t=t-10;
setInterval(draw,t);
}

}