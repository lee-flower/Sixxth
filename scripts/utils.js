export function loadImages(path, callbackfn) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open("GET", path);

    request.addEventListener("load", (_ev) => {
      if (_ev.target.status === 200) {
        callbackfn(JSON.parse(request.responseText));
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    });

    request.addEventListener("error", (_ev) => {
      reject(Error("Network Error"));
    });

    request.send(null);
  });
}

export function drawImages(paint_brush, image_path, img_element) {
  const image = new Image();
  let img_data_url = "";
  image.src = image_path;
  paint_brush.clearRect(0, 0, paint_brush.canvas.width, paint_brush.canvas.height);
  image.addEventListener("load", (_ev) => {
    paint_brush.drawImage(_ev.target, 0, 0, paint_brush.canvas.width, paint_brush.canvas.height);
    img_data_url = paint_brush.canvas.toDataURL("image/png", 1);
    img_element.setAttribute("src", img_data_url);
  });
}

export function randomRotate(element) {
  let rotation_degree = Math.floor(Math.random() * 90);

  if (element.getAttribute("style") != null) {
    element.setAttribute("style", `${element.getAttribute("style")};transform: rotate(${rotation_degree}deg);`);
  } else {
    element.setAttribute("style", `transform: rotate(${rotation_degree}deg);`);
  }
}