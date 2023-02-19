const classImage = new Image();
const headSculpture = new Image();

classImage.src = "./images/classSixxth2.png";
// headSculpture.src = "./images/leeflower.png";

let paint, root;

const inloading = (_ev) => {
  paint = document
    .getElementById("paint-area")
    .getContext("2d", { alpha: true });
  root = document.getElementById("root");
  painting(_ev);
};

const painting = (_ev) => {
  paint.canvas.width = root.clientWidth;
  paint.canvas.height = root.clientHeight;
  paint.drawImage(classImage, 0, 0, root.clientWidth, root.clientHeight);

  let img_data = paint.canvas.toDataURL("image/png", 1);
  document.getElementById("class-sixxth").src = img_data;
};

addEventListener("load", inloading);
addEventListener("resize", painting);
