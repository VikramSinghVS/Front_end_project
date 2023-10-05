const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnim(){
    var tl= gsap.timeline();

    tl.from("#nav", {
        y:'-10',
        opacity:0,
        duration:1.5,
        ease: Expo.easeInOut
    })
    .to(".boundingelem", {
        y:'0',
        duration:2,
        delay:-1,
        ease: Expo.easeInOut,
        stagger:.2

    })
    .from("#herofooter", {
        y:'-10',
        opacity:0,
        duration:1.5,
        delay:-1,
        ease: Expo.easeInOut
    })


}

//while moving the mouse we can make the circal skew at fix,

function circleChaptaKaro(){
    //define default scale value
    var xscale=1;
    var yscale=1;

    var xprev=0;
    var yprev=0;
    window.addEventListener("mousemove" , function(dets){

        xscale= gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);
        yscale= gsap.utils.clamp(.8, 1.2, dets.clientY - yprev);
       
         xprev=dets.clientX;
         yprev=dets.clientY;

         circalMousFollo(xscale,yscale);
         
    });
}



function circalMousFollo(xscale,yscale){
    window.addEventListener("mousemove", function(dets){
      
        document.querySelector("#minicircal").style.transform = `translate(${dets.clientX-5}px, ${dets.clientY-5}px) scale(${xscale}, ${yscale})`;
    });
}
circleChaptaKaro();
circalMousFollo();
firstPageAnim();

//teeno element select karo ,uske baad teeno par ek mousemove lagao , jab maouse
//mousemove ho to ye pata karo ki mouse kaha pr h , jiska matlab hai mouse ki x and y position pata karo , 
//ab mouse ki x y position ke badle us image ki show karo and us image ko move karo, move
// karte waqt rotate karo and jaise jaise mouse tez chale vaise vaise rotation bhi tej ho jay

document.querySelectorAll(".elem").forEach(function(elem){
var rotate=0;
var diffrot=0;

elem.addEventListener("mouseleave", function(dets){

   gsap.to(elem.querySelector("img"),{
       opacity:0,
       ease: Power3,
      duration: .5,
      })
   });

    elem.addEventListener("mousemove", function(dets){

     var diff=  dets.clientY-elem.getBoundingClientRect().top;
     
        diffrot=dets.clientX-rotate;
        rotate=dets.clientX;
        
       gsap.to(elem.querySelector("img"),{
        opacity:1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20,20,diffrot),
       })
    });
});

