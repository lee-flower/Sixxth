import contants from "./contants.js";
import { loadImages, drawImages, randomRotate } from "./utils.js";

function loading(_ev) {
  const paint_brush = document.getElementById("paint").getContext("2d");
  const img_elements = document.querySelectorAll(".img-box img");
  const boxes = document.getElementsByClassName("img-box");

  paint_brush.canvas.width = 480;
  paint_brush.canvas.height = 320;
  loadImages(contants.IMAGE_DATA_PATH, (data) => {
    for (let i = 0; i < data.length; i++) {
      drawImages(paint_brush, data[i], img_elements[i]);
    }
  });
}

addEventListener("load", loading);
