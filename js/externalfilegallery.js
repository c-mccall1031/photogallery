function upDate(previewPic) {

  let my_element = document.getElementById("image");

  console.log("gallery preview active: " + previewPic.alt);

  my_element.style.backgroundImage = "url('" + previewPic.src + "')";

  my_element.innerHTML = previewPic.alt;
}

function unDo() {

  let my_element = document.getElementById("image");
 my_element.style.backgroundImage = "url()";
  
 my_element.innerHTML = "Hover over an image below to display here.";
}

function setup_images() {
  console.log("window loaded and updating the image event listeners");
  currentImages = document.querySelectorAll(".preview");
  for (var i = 0; i < currentImages.length; i++) {
    currentImages[i].setAttribute("tabindex", "0");
    
    currentImages[i].addEventListener("focus", function () {
      upDate(this);
    });
    currentImages[i].addEventListener("blur", function () {
      unDo();
    });
  }
}
