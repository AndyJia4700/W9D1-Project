export default class FlappyBird {
  constructor(canvas){
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    // ctx.fillStyle = "purple";
  }

  ctx.drawimage(birdname, X, Y, width, height);

}



// document.addEventListener("DOMContentLoaded", function () {
  // const canvasEl = document.getElementById("bird-game");
  // canvasEl.width = 500;
  // canvasEl.height = 500;

  // const ctx = canvasEl.getContext("2d");
  // ctx.fillStyle = "purple";
  // ctx.fillRect(10, 10, 500, 500);

//   ctx.beginPath();
//   ctx.arc(100, 100, 20, 0, 2 * Math.PI, true);
//   ctx.strokeStyle = "green";
//   ctx.lineWidth = 5;
//   ctx.stroke();
//   ctx.fillStyle = "blue";
//   ctx.fill();
// });