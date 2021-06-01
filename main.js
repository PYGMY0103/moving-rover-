canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");

var nasa_mars_img = ["img_1.jpg","img 2.jpg","img 3.jpg","img 4.jpg","img 5.jpg"];

random_number = Math.floor(Math.random() * 4);


rover_width = 100;
rover_height = 90;

background_img= nasa_mars_img[random_number];
console.log("background img = " + background_img);
rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_img;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    KeyPressed = e.keyCode;
    console.log(KeyPressed);
     if(KeyPressed == '38')
     {
         console.log("up");
         up();
     }
     if(KeyPressed == '40')
     {
        console.log("down");
         down();
        
     }
     if(KeyPressed == '37')
     {
         console.log("left");
         left()
     }
     if(KeyPressed == '39')
     {
         console.log("right");
         right();
     }
}

function up()
{
    if(rover_y >=0)
    {
        rover_y -=10;
        console.log("when up arrow is pressed = " + rover_x + " - " +rover_y);
        uploadBackground();
        uploadrover();

    }
}

function down()
{
    if(rover_y <=500)
    {
        rover_y += 10;
        console.log("when down is pressed, x = " + rover_x + " | y - " +rover_y);
        uploadBackground();
        uploadrover();

    }
}
function left()
{
    if(rover_x >= 0)
    {
        rover_x -= 10;
        console.log("when left arrow is pressed, x = " + rover_x + " | y = " +rover_y);
        uploadBackground();
        uploadrover();

    }
}
function right()
{
    if(rover_x <=700)
    {
        rover_x += 10;
        console.log("when right is pressed, x = " + rover_x + " | y = " +rover_y);
        uploadBackground();
        uploadrover();

    }
}