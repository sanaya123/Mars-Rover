canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")

rover_x = 10
rover_y = 10
rover_width=90
rover_height = 100
background_image = "mars.jpg"
rover_image = "rover.png"

function add(){
    background_imagetag=new Image()
    background_imagetag.onload = upload_background;
    background_imagetag.src = background_image;

    rover_imagetag=new Image()
    rover_imagetag.onload = upload_rover;
    rover_imagetag.src = rover_image;
}

function upload_background(){
    ctx.drawImage(background_imagetag,0,0,canvas.width,canvas.height)
}

function upload_rover(){
    ctx.drawImage(rover_imagetag,rover_x,rover_y,rover_width,rover_height)
}

window.addEventListener("keydown",mykeydown)
function mykeydown(e)
{
    keyPressed = e.keyCode
    console.log(keyPressed);

  if(keyPressed=='38'){
    up();
}
if(keyPressed=='40'){
    down();
}
if(keyPressed=='37'){
    left();
}
if(keyPressed=='39'){
    right();
}
}
function up()
{
    if (rover_y>=0){
        rover_y=rover_y-10
        console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
        upload_rover()
        upload_background()
    }
}
function down()
{
    if (rover_y<=500){
        rover_y=rover_y+10
        upload_rover()
        upload_background()
    }
}
function left()
{
    if (rover_x>=0){
        rover_x=rover_x-10
        upload_rover()
        upload_background()
    }
}
function right()
{
    if (rover_x<=700){
        rover_x=rover_x+10
        upload_rover()
        upload_background()
    }
}