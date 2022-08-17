let tex=document.querySelectorAll(".tex")
let photo=document.querySelectorAll(".photos> div")
console.log(photo)

photo[0].onmouseenter=function(){
    tex[0].classList.add("activetex")
}
photo[0].onmouseleave=function(){
    tex[0].classList.remove("activetex")

}

photo[1].onmouseenter=function(){
    tex[1].classList.add("activetex")
}
photo[1].onmouseleave=function(){
    tex[1].classList.remove("activetex")

}
photo[2].onmouseenter=function(){
    tex[2].classList.add("activetex")
}
photo[2].onmouseleave=function(){
    tex[2].classList.remove("activetex")

}

photo[3].onmouseenter=function(){
    tex[3].classList.add("activetex")
}
photo[3].onmouseleave=function(){
    tex[3].classList.remove("activetex")

}



photo[4].onmouseenter=function(){
    tex[4].classList.add("activetex")
}
photo[4].onmouseleave=function(){
    tex[4].classList.remove("activetex")

}


photo[5].onmouseenter=function(){
    tex[5].classList.add("activetex")
}
photo[5].onmouseleave=function(){
    tex[5].classList.remove("activetex")

}

photo[6].onmouseenter=function(){
    tex[6].classList.add("activetex")
}
photo[6].onmouseleave=function(){
    tex[6].classList.remove("activetex")

}


photo[7].onmouseenter=function(){
    tex[7].classList.add("activetex")
}
photo[7].onmouseleave=function(){
    tex[7].classList.remove("activetex")

}


photo[8].onmouseenter=function(){
    tex[8].classList.add("activetex")
}
photo[8].onmouseleave=function(){
    tex[8].classList.remove("activetex")

}






//on load
let headprotfolio=document.querySelector(".headprotfolio")


let photos=document.querySelector(".photos")
document.body.onload=function(){
    headprotfolio.classList.add("activeprotfolio")

    photos.classList.add("activephotos")
}


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
  


  let prolist1=document.querySelector(".prolist");
let prolistlink1=document.querySelector(".prolist a");
prolistlink1.style.setProperty("color","black","important");
prolist1.classList.add("activehomelist")