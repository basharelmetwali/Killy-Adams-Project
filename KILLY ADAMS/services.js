/*Services */
let services=document.querySelector(".services")
document.body.onload=function(){
  services.classList.add("activeservices")
}

///on hover form services  basket logo



let servicesBasketball=document.querySelector(".basketball");
let servicesbasketlogo=document.querySelector(".basketball div");
servicesBasketball.onmouseenter=function(){
  servicesbasketlogo.style.color="#f5f5f5";
  servicesbasketlogo.style.backgroundColor="#03cccc";
  
}
servicesBasketball.onmouseleave=function(){
  servicesbasketlogo.style.backgroundColor="#f5f5f5";
  servicesbasketlogo.style.color="#03cccc";
}
//////////////
///on hover form services  form logo
let servicesform=document.querySelector(".form");
let servicesformlogo=document.querySelector(".form div");
servicesform.onmouseenter=function(){
  servicesformlogo.style.color="#f5f5f5";
  servicesformlogo.style.backgroundColor="#cc7c03";
  
}
servicesform.onmouseleave=function(){
  servicesformlogo.style.backgroundColor="#f5f5f5";
  servicesformlogo.style.color="#cc7c03";
}
///on hover services speed logo
let servicesSpeed=document.querySelector(".speed");
let servicesSpeedlogo=document.querySelector(".speed div");
servicesSpeed.onmouseenter=function(){
  servicesSpeedlogo.style.color="#f5f5f5";
  servicesSpeedlogo.style.backgroundColor="#a403cc";
  
}
servicesSpeed.onmouseleave=function(){
  servicesSpeedlogo.style.backgroundColor="#f5f5f5";
  servicesSpeedlogo.style.color="#a403cc";
}
//on hover services layer logo
let serviceslayer=document.querySelector(".layers");
let serviceslayerlogo=document.querySelector(".layers div");
serviceslayer.onmouseenter=function(){
  serviceslayerlogo.style.color="#f5f5f5";
  serviceslayerlogo.style.backgroundColor="#f3f708";
  
}
serviceslayer.onmouseleave=function(){
  serviceslayerlogo.style.backgroundColor="#f5f5f5";
  serviceslayerlogo.style.color="#f3f708";
}
//on hover screenplay  logo
let servicesScreenplay=document.querySelector(".screenplay");
let servicesScreenplaylogo=document.querySelector(".screenplay div");

servicesScreenplay.onmouseenter=function(){
  servicesScreenplaylogo.style.backgroundColor="#cc3203";
  servicesScreenplaylogo.style.color="#f5f5f5";
}

servicesScreenplay.onmouseleave=function(){
  servicesScreenplaylogo.style.color="#cc3203";
  servicesScreenplaylogo.style.backgroundColor="#f5f5f5";
}
//on hover archway logo
servicesarcway=document.querySelector(".archway")
servicesarcwaylogo=document.querySelector(".archway div");


servicesarcway.onmouseenter=function(){
  servicesarcwaylogo.style.backgroundColor="#03cccc";
  servicesarcwaylogo.style.color="#f5f5f5";
}

servicesarcway.onmouseleave=function(){
  servicesarcwaylogo.style.color="#03cccc";
  servicesarcwaylogo.style.backgroundColor="#f5f5f5";
}

let serviceslist1=document.querySelector(".serviceslist");
let serviceslistlink1=document.querySelector(".serviceslist a");
serviceslistlink1.style.setProperty("color","black","important");
serviceslist1.classList.add("activehomelist")





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
  