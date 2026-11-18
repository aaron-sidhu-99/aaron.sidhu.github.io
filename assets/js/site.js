(function(){
  "use strict";
  document.querySelectorAll(".year").forEach(function(el){el.textContent=String(new Date().getFullYear());});
  var filterButtons=Array.from(document.querySelectorAll(".filter-button"));
  var entries=Array.from(document.querySelectorAll(".project-entry"));
  var count=document.getElementById("project-count");
  var empty=document.getElementById("empty-state");
  function applyFilter(category){
    var visible=0;
    entries.forEach(function(entry){var show=category==="all"||entry.dataset.category===category;entry.hidden=!show;if(show)visible++;});
    if(count)count.textContent=visible+" SELECTED PROJECT"+(visible===1?"":"S");
    if(empty)empty.hidden=visible!==0;
    filterButtons.forEach(function(button){var active=button.dataset.filter===category;button.classList.toggle("active",active);button.setAttribute("aria-pressed",active?"true":"false");});
  }
  filterButtons.forEach(function(button){button.addEventListener("click",function(){applyFilter(button.dataset.filter);});});
  var box=document.getElementById("lightbox");
  if(!box)return;
  var image=box.querySelector("img"),caption=box.querySelector("figcaption");
  var closeButton=box.querySelector(".lightbox-close"),prevButton=box.querySelector(".lightbox-prev"),nextButton=box.querySelector(".lightbox-next");
  var activeButtons=[],activeIndex=0,lastFocus=null;
  function refreshGallery(){activeButtons=Array.from(document.querySelectorAll(".project-entry:not([hidden]) .gallery-image"));}
  function showImage(index){if(!activeButtons.length)return;activeIndex=(index+activeButtons.length)%activeButtons.length;var b=activeButtons[activeIndex],thumb=b.querySelector("img");image.src=b.dataset.full;image.alt=thumb?thumb.alt:"Project image";caption.textContent=b.dataset.caption||"";}
  function open(button){refreshGallery();activeIndex=activeButtons.indexOf(button);if(activeIndex<0){activeButtons=Array.from(document.querySelectorAll(".gallery-image"));activeIndex=activeButtons.indexOf(button);}lastFocus=button;showImage(activeIndex);box.setAttribute("aria-hidden","false");document.body.classList.add("viewer-open");closeButton.focus();}
  function close(){box.setAttribute("aria-hidden","true");document.body.classList.remove("viewer-open");image.src="";if(lastFocus)lastFocus.focus();}
  document.addEventListener("click",function(event){var b=event.target.closest(".gallery-image");if(b)open(b);});
  closeButton.addEventListener("click",close);prevButton.addEventListener("click",function(){showImage(activeIndex-1);});nextButton.addEventListener("click",function(){showImage(activeIndex+1);});
  box.addEventListener("click",function(event){if(event.target===box)close();});
  document.addEventListener("keydown",function(event){if(box.getAttribute("aria-hidden")!=="false")return;if(event.key==="Escape")close();if(event.key==="ArrowLeft")showImage(activeIndex-1);if(event.key==="ArrowRight")showImage(activeIndex+1);if(event.key==="Tab"){var focusables=[closeButton,prevButton,nextButton];var first=focusables[0],last=focusables[focusables.length-1];if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}}});
})();
