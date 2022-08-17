
//about java script


let sliderbuttons=document.querySelectorAll(".controlslider div")
let persons=document.querySelectorAll(".person")
let controlslider=document.querySelector(".controlslider")
















let checkclicked=[]
controlslider.onclick=function(){
  sliderbuttons[0].onclick=function(){
    checkclicked[0]=true;
  }
  sliderbuttons[1].onclick=function(){
    checkclicked[1]=true;
  }
  sliderbuttons[2].onclick=function(){
    checkclicked[2]=true;
  }
  sliderbuttons[3].onclick=function(){
    checkclicked[3]=true;
  }
  if(checkclicked.includes(true)){
  for(let i=0;i<sliderbuttons.length;i++){
    if(checkclicked[i]==true){
      persons[i].classList.add("activephoto")
      sliderbuttons[i].classList.add("activebutton")
          }
    else{
      persons[i].classList.remove("activephoto")
      sliderbuttons[i].classList.remove("activebutton")
    }
  }
}
  checkclicked=[];

}
/////////////////////////////////////////////////////////////////////////////////////////////
let skills=document.querySelector(".skills-content-head")
let facts=document.querySelector(".facts");
let clientsnumber=document.querySelector(".clients h2");
let projectsnumber=document.querySelector(".Projects h2")
let supporthoursnumber=document.querySelector(".supporthours h2")
let Testiomenials=document.querySelector(".Testiomenials")
let slidershow=document.querySelector(".slidershow")
let a=0
document.body.onscroll=function(){
if(window.scrollY>="200"){
skills.classList.add("activeslide")
}

if(window.scrollY>=342   && a==0){
  facts.classList.add("activeslide")
  //edit projects number on facts
  let projectstop=setInterval(function(){
    if(projectsnumber.innerHTML>=parseInt("187")){
      clearInterval(projectstop);
    }
     projectsnumber.innerHTML=parseInt(projectsnumber.innerHTML)+1
  },13)
    //edit supporthour number on facts
    let supporthourstop=setInterval(function(){
      if(supporthoursnumber.innerHTML>=parseInt("526")){
        clearInterval(supporthourstop);
      }
       supporthoursnumber.innerHTML=parseInt(supporthoursnumber.innerHTML)+1
    },3)
  //edit client number on facts
  let clientstop=setInterval(function(){
    if(clientsnumber.innerHTML>=parseInt("83")){
      clearInterval(clientstop);
    }
     clientsnumber.innerHTML=parseInt(clientsnumber.innerHTML)+1
  },24)
 


a=1
}
if(window.scrollY>1260){
    Testiomenials.classList.add("activeslide")
    slidershow.classList.add("activeslide")

}
}

///////////////////////////////////////////////////////////////



/////////////////



let aboutlist1=document.querySelector(".aboutlist");
let aboutlistlink1=document.querySelector(".aboutlist a");
aboutlistlink1.style.setProperty("color","black","important");
aboutlist1.classList.add("activehomelist")








let scrollbutton=document.querySelector(".scrolltoup");
document.body.onscroll=function(){
  if(window.scrollY>="200"){
    skills.classList.add("activeslide")
    }
    
    if(window.scrollY>=500   && a==0){
      console.log("Bashar")
      facts.classList.add("activeslide")
      //edit projects number on facts
      let projectstop=setInterval(function(){
        if(projectsnumber.innerHTML>=parseInt("187")){
          clearInterval(projectstop);
        }
         projectsnumber.innerHTML=parseInt(projectsnumber.innerHTML)+1
      },13)
        //edit supporthour number on facts
        let supporthourstop=setInterval(function(){
          if(supporthoursnumber.innerHTML>=parseInt("526")){
            clearInterval(supporthourstop);
          }
           supporthoursnumber.innerHTML=parseInt(supporthoursnumber.innerHTML)+1
        },3)
      //edit client number on facts
      let clientstop=setInterval(function(){
        if(clientsnumber.innerHTML>=parseInt("83")){
          clearInterval(clientstop);
        }
         clientsnumber.innerHTML=parseInt(clientsnumber.innerHTML)+1
      },24)
     
      a=1

    }
    
  
    if(window.scrollY>800){
        Testiomenials.classList.add("activeslide")
    
    }
    if(window.scrollY>940){
      slidershow.classList.add("activeslide")

    }
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