let headhome=document.querySelector(".headhome")
let homepage=document.querySelector(".home");
document.body.onload=function(){
headhome.classList.add("activeHeadHome")


}
let homelist1=document.querySelector(".homelist");
let homelistlink1=document.querySelector(".homelist a");
homelistlink1.style.setProperty("color","black","important");
homelist1.classList.add("activehomelist")



////scroll button
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
///////////////
//click about button
let aboutbutton=document.querySelector(".aboutbutton")

aboutbutton.onclick=function(){
  location.href="about.html"
}