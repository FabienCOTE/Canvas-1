var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//Toit
ctx.fillStyle = "#d58636";
ctx.rotate(45 * Math.PI / 180);
ctx.fillRect(179,-107,140,140);
ctx.setTransform(1, 0, 0, 1, 0, 0);

// Fond
ctx.fillStyle = "#a3d7e7";
ctx.fillRect(103.5,150,198,200);

// Porte
ctx.fillStyle = "#c9c9c9";
ctx.fillRect(175,275,50,75);

// Fenêtres
ctx.fillRect(125,175,50,50);
ctx.fillRect(225,175,50,50);
