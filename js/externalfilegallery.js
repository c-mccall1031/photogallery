function upDate(previewPic){
 let imageElement = document.getElementById('image');
 imageElement.style.backgroundImage = `url('${previewPic.src}')`;
 imageElement.textContent = previewPic.alt;
}

function unDo(){
 let imageElement = document.getElementById('image');
 imageElement.style.backgroundImage = "url('')";
 imageElement.textContent = "Hover over an image below to display here.";
}

function openFunction(){
  el = document.getElementById("content");
  el.style.display = "block";
}

function closeFunction(){
  el = document.getElementById("content");
  el.style.display = "none";
}
