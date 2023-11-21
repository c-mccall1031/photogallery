<script>
function bigImg(x) {
   x.style.height = "64px";
   x.style.width = "64px";
}

function normalImg(x) {
   x.style.height = "32px";
   x.style.width = "32px";
}
</script>
  
<img onmouseover="bigImg(this)" onmouseout="normalImg(this)" border="0" src="images/Axis_in_snow.jpg" alt="My dog hiking in the snow" width="32" height="32">
