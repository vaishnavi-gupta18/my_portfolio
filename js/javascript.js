function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("heart_blue")) {
      image.src="img/heart_grey.png";
    } else {
      image.src = "img/heart_blue.png";
    }
  }