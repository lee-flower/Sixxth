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

  // 将在canvas中绘制好的图像转换成 Blob 对象并写入 img 标签 src 属性
  paint.canvas.toBlob(
    (blob) => {
      let img_url = URL.createObjectURL(blob),
        self = { url: img_url },
        img_display = document.getElementById("class-sixxth");

      img_display.alt = "class image";

      img_display.width = root.clientWidth - 4;
      img_display.height = root.clientHeight - 4;

      img_display.addEventListener("load", (_ev) => {
        URL.revokeObjectURL(self.img_url);
      });

      img_display.src = img_url;
    },
    "image/png",
    1
  );
};

addEventListener("load", inloading);
addEventListener("resize", painting);
