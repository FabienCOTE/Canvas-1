var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//Fond
ctx.fillStyle = "#a3d7e7";
ctx.fillRect(100,150,200,200);

//Porte
ctx.fillStyle = "#c9c9c9";
ctx.fillRect(175,275,50,75);

//Fenêtres
ctx.fillRect(125,175,50,50);
ctx.fillRect(225,175,50,50);

//Toit
ctx.fillStyle = "#d58636";
ctx.beginPath();
ctx.moveTo(200,50);
ctx.lineTo(100,150);
ctx.lineTo(300,150);
ctx.fill();

141,127 moitié maison
