
/*resume page */

let resumehead=document.querySelector(".headresume");
let rescontent=document.querySelector(".resumecontent");
document.body.onload=function(){
  setTimeout(function(){
    resumehead.classList.add("activeres")
  },
  500)
  setTimeout(function(){
rescontent.classList.add("activeres");


  },1600)
}
let resumelist1=document.querySelector(".resumelist");
let resumelistlink1=document.querySelector(".resumelist a");
resumelistlink1.style.setProperty("color","black","important");
resumelist1.classList.add("activehomelist")






let scrollbutton=document.querySelector(".scrolltoup");

document.body.onscroll=function(){
  if(scrollY>="18")
  {
    scrollbutton.classList.add("activeScrollbutton")
  }
  else{
  scrollbutton.classList.remove("activeScrollbutton")
  }
  }
  scrollbutton.onclick=function(){
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  }
  
