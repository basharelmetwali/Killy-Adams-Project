
let homelist=document.querySelector(".homelist");
let homelistlink=document.querySelector(".homelist a");
let homeclicked=false;


homelist.onmouseenter=function(){
    homelist.classList.add("activehomelist")
    homelistlink.style.color="black"
    homelistlink.style.fontWeight="bold"

  }
  
  homelist.onmouseleave=function(){
    if(!(location.href.split("/").includes("home.html")))
    {

    
    if(homeclicked==false){
    homelist.classList.remove("activehomelist")
    homelistlink.style.color="darkgray"
    }
  }
  }


//////////////////
let aboutlist=document.querySelector(".aboutlist");
let aboutlistlink=document.querySelector(".aboutlist a");
let aboutclicked=false;

aboutlist.onmouseenter=function(){
    aboutlist.classList.add("activehomelist")
    aboutlistlink.style.color="black"
    aboutlistlink.style.fontWeight="bold"

  }
  
  aboutlist.onmouseleave=function(){
    if(!(location.href.split("/").includes("about.html")))
    {
    if(aboutclicked==false){
    aboutlist.classList.remove("activehomelist")
    aboutlistlink.style.color="darkgray"
    }
  }
}
///////////////////
let resumelist=document.querySelector(".resumelist");
let resumelistlink=document.querySelector(".resumelist a");
let resumeclicked=false;

resumelist.onmouseenter=function(){
    resumelist.classList.add("activehomelist")
    resumelistlink.style.color="black"
    resumelistlink.style.fontWeight="bold"

  }
  
  resumelist.onmouseleave=function(){
    if(!(location.href.split("/").includes("resume.html")))
    {
    if(resumeclicked==false){
    resumelist.classList.remove("activehomelist")
    resumelistlink.style.color="darkgray"
    }
  }
}
///////////////////////////

let serviceslist=document.querySelector(".serviceslist");
let serviceslistlink=document.querySelector(".serviceslist a");
let servicesclicked=false;


serviceslist.onmouseenter=function(){
    serviceslist.classList.add("activehomelist")
    serviceslistlink.style.color="black"
    serviceslistlink.style.fontWeight="bold"

  }
  
  serviceslist.onmouseleave=function(){
    if(!(location.href.split("/").includes("services.html")))
    {

    
    if(servicesclicked==false){
    serviceslist.classList.remove("activehomelist")
    serviceslistlink.style.color="darkgray"
    }
  }
  }
//////////////////////////
let contactlist=document.querySelector(".contactlist");
let contactlistlink=document.querySelector(".contactlist a");
let contactclicked=false;


contactlist.onmouseenter=function(){
    contactlist.classList.add("activehomelist")
    contactlistlink.style.color="black"
    contactlistlink.style.fontWeight="bold"

  }
  
  contactlist.onmouseleave=function(){
    if(!(location.href.split("/").includes("contact.html")))
    {

    
    if(contactclicked==false){
    contactlist.classList.remove("activehomelist")
    contactlistlink.style.color="darkgray"
    }
  }
  }

  //////////////////////////////
  
  /*
  let prolist=document.querySelector(".prolist");
  let prolistlink=document.querySelector(".prolist a");
  let proclicked=false;
  
  
  prolist.onmouseenter=function(){
      prolist.classList.add("activehomelist")
      prolistlink.style.color="black"
      prolistlink.style.fontWeight="bold"
  
    }
    
    prolist.onmouseleave=function(){
      if(!(location.href.split("/").includes("protfolio.html")))
      {
  
      
      if(proclicked==false){
      prolist.classList.remove("activehomelist")
      prolistlink.style.color="darkgray"
      }
    }
    }*/