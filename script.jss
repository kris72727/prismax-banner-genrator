const upload = document.getElementById("upload");
const preview = document.getElementById("pfpPreview");

upload.addEventListener("change", function(e){
  const file = e.target.files[0];
  if(!file) return;

  const reader = new FileReader();
  reader.onload = function(event){
    preview.src = event.target.result;
  }
  reader.readAsDataURL(file);
});

function downloadBanner(){
  html2canvas(document.getElementById("banner")).then(canvas=>{
    const link=document.createElement("a");
    link.download="prisma-x-banner.png";
    link.href=canvas.toDataURL("image/png");
    link.click();
  });
}
