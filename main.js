canvas = document.getElementById("myCanvas");
color = "red";

canvas.getContext("2d").beginPath();
canvas.getContext("2d").strokeStyle = color;
canvas.getContext("2d").lineWidth = 5;
canvas.getContext("2d").arc(490, 270, 50, 0, 2*Math.PI);
canvas.getContext("2d").stroke();

color = "black";

canvas.getContext("2d").beginPath();
canvas.getContext("2d").strokeStyle = color;
canvas.getContext("2d").lineWidth = 5;
canvas.getContext("2d").arc(380, 270, 50, 0, 2*Math.PI);
canvas.getContext("2d").stroke();

color = "blue";

canvas.getContext("2d").beginPath();
canvas.getContext("2d").strokeStyle = color;
canvas.getContext("2d").lineWidth = 5;
canvas.getContext("2d").arc(270, 270, 50, 0, 2*Math.PI);
canvas.getContext("2d").stroke();

color = "yellow";

canvas.getContext("2d").beginPath();
canvas.getContext("2d").strokeStyle = color;
canvas.getContext("2d").lineWidth = 5;
canvas.getContext("2d").arc(325, 330, 50, 0, 2*Math.PI);
canvas.getContext("2d").stroke();

color = "green";

canvas.getContext("2d").beginPath();
canvas.getContext("2d").strokeStyle = color;
canvas.getContext("2d").lineWidth = 5;
canvas.getContext("2d").arc(435, 330, 50, 0, 2*Math.PI);
canvas.getContext("2d").stroke();