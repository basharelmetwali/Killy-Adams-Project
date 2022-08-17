let contactpage=document.querySelector(".contact");
document.body.onload=function(){
  contactpage.classList.add("activecontact");
}
/*
if(homepage.style.display !="none"){
  document.body.onload =function(){
    headhome.classList.add("activeHeadHome")
    }

}*/
let contactlist1=document.querySelector(".contactlist");
let contactlistlink1=document.querySelector(".contactlist a");
contactlistlink1.style.setProperty("color","black","important");
contactlist1.classList.add("activehomelist")




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
  

