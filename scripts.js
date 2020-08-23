"use strict";

const share = document.getElementById('share')
const shareBox = document.getElementById('share-box')
const mediumBp = matchMedia("(min-width:1440px)");
function showToolTip(mediaQueryList){
  if(!mediaQueryList.matches) {
    shareBox.style.top = "initial";
    shareBox.style.left = "initial";
    return
  }
  shareBox.style.top = share.offsetParent.offsetTop-share.offsetParent.clientHeight*1.5+"px"
  shareBox.style.left = share.offsetParent.offsetLeft - shareBox.clientWidth/2 + share.offsetParent.clientWidth/2 +"px"
}
showToolTip(mediumBp);

share.addEventListener('click',event=>{
  shareBox.classList.toggle('active')
  share.classList.toggle('icon-active')
  showToolTip(mediumBp);
})

mediumBp.addListener(showToolTip);

addEventListener('resize', ()=>{
  showToolTip(mediumBp);
})
