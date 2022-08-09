canvas = document.getElementById('myCanvas');
ctx= canvas.getContext("2d");
images = ["https://media2.spaceref.com/news/2021/ooESP_046876_1465.jpg", "https://mars.nasa.gov/system/resources/detail_files/6132_Curiosity_Location_Sol589-full2.jpg", "https://st2.depositphotos.com/2800301/6995/i/950/depositphotos_69955609-stock-photo-mars-surface.jpg", "https://scx2.b-cdn.net/gfx/news/2021/signs-of-life-on-mars.jpg"];
number=Math.floor(Math.random()*4);
rover_width = 100;
rover_height=90;

rover_x = 10;
rover_y= 10;

background_image = images[number];
rover_image = "rover.png";

function add(){
    bg_imgtag= new Image();
    bg_imgtag.onload = uploadbg;
    bg_imgtag.src= background_image;
    
    rover_imgtag= new Image();
    rover_imgtag.onload = uploadrover;
    rover_imgtag.src= rover_image;

}

function uploadbg() {
ctx.drawImage(bg_imgtag, 0, 0, canvas.width, canvas.height);

}

function uploadrover() {
    ctx.drawImage(rover_imgtag, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);

    if(keypressed=='38'){
        up();
        console.log("up");

    }
    if(keypressed=='37'){
        left();
        console.log("left");
    }
    
    if(keypressed=='39'){
        right();
        console.log("right");
    }
    
    if(keypressed=='40'){
        down();
        console.log("down");
    }
}

function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        console.log("When up arrow is pressed, x = "+ rover_x +",  y = "+rover_y);
        uploadbg();
        uploadrover();
    }
}

function down(){
    if(rover_y<=500){
        rover_y=rover_y+10;
        console.log("When down arrow is pressed, x = "+ rover_x +", y= "+rover_y);
        uploadbg();
        uploadrover();
    }
}

function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        console.log("When down arrow is pressed, x = "+ rover_x +", y= "+rover_y);
        uploadbg();
        uploadrover();
    }
}

function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        console.log("When down arrow is pressed, x = "+ rover_x +", y= "+rover_y);
        uploadbg();
        uploadrover();
    }
}


