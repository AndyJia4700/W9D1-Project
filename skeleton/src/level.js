export default class Level {
  constructor(dimensions) {
    this.dimensions = dimensions;
  }

  drawBackground(ctx) {
    const ctx = canvasEl.getContext("2d"); //11
    ctx.fillStyle = "skyblue";
    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
  }
}

// const canvasEl = document.getElementById("bird-game");
// canvasEl.width = 500;
// canvasEl.height = 500;

// const ctx = canvasEl.getContext("2d");
// ctx.fillStyle = "purple";
// ctx.fillRect(10, 10, 500, 500);