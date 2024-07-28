function loco(){
    gsap.registerPlugin(ScrollTrigger);
  
  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
  
  }
loco();


//   document.querySelector("img1").addEventListener(MouseEvent,function(){
//     document.querySelector("#main").style.backgroundColor="red"
//   })
document.querySelector("#img1").addEventListener("mouseenter",function(){
  document.querySelector("#main").style.backgroundColor="black"
})
document.querySelector("#img1").addEventListener("mouseleave",function(){
  document.querySelector("#main").style.backgroundColor="white"
})

document.querySelector("#img2").addEventListener("mouseenter",function(){
  document.querySelector("#main").style.backgroundColor="red"
})
document.querySelector("#img2").addEventListener("mouseleave",function(){
  document.querySelector("#main").style.backgroundColor="white"
})
document.querySelector("#img3").addEventListener("mouseenter",function(){
  document.querySelector("#main").style.backgroundColor="royalblue"
})
document.querySelector("#img3").addEventListener("mouseleave",function(){
  document.querySelector("#main").style.backgroundColor="white"
})
document.querySelector("#img4").addEventListener("mouseenter",function(){
  document.querySelector("#main").style.backgroundColor="pink"
})
document.querySelector("#img4").addEventListener("mouseleave",function(){
  document.querySelector("#main").style.backgroundColor="white"
})

document.querySelector("#img6").addEventListener("mouseenter",function(){
  document.querySelector("#main").style.backgroundColor="violet"
})
document.querySelector("#img6").addEventListener("mouseleave",function(){
  document.querySelector("#main").style.backgroundColor="white"
})

document.querySelector("#img5").addEventListener("mouseenter",function(){
  document.querySelector("#main").style.backgroundColor="grey"
})
document.querySelector("#img5").addEventListener("mouseleave",function(){
  document.querySelector("#main").style.backgroundColor="white"
})

document.querySelector("#img7").addEventListener("mouseenter",function(){
  document.querySelector("#main").style.backgroundColor="violet"
})
document.querySelector("#img7").addEventListener("mouseleave",function(){
  document.querySelector("#main").style.backgroundColor="white"
})

document.querySelector("#img8").addEventListener("mouseenter",function(){
  document.querySelector("#main").style.backgroundColor="orange"
})
document.querySelector("#img8").addEventListener("mouseleave",function(){
  document.querySelector("#main").style.backgroundColor="white"
})
document.querySelector("#img9").addEventListener("mouseenter",function(){
  document.querySelector("#main").style.backgroundColor="yellow"
})
document.querySelector("#img9").addEventListener("mouseleave",function(){
  document.querySelector("#main").style.backgroundColor="white"
})
document.querySelector("#img10").addEventListener("mouseenter",function(){
  document.querySelector("#main").style.backgroundColor="purple"
})
document.querySelector("#img10").addEventListener("mouseleave",function(){
  document.querySelector("#main").style.backgroundColor="white"
})


