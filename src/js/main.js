/* 
 jQuery(document).ready(function () {
    var mySwiper = new Swiper(".hero-vertical-swiper", {
        direction: "vertical",
        effect: "fade",
        allowTouchMove: false,

        speed: 2000,
        autoplay: {
            delay: 5000,
          },
        loop: true,
    
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
  })
 */
function rotateOnScroll(){
  const height = window.innerHeight;
  const scrolled = jQuery(window).scrollTop();
  jQuery(window).scroll(function(){
    const scrolled = jQuery(window).scrollTop()/80;
    jQuery(".bg-rotary-gear").css("transform", "rotate("+ (scrolled) +"deg)")
  });
};
rotateOnScroll();
/////BARBA
/////////////////////////////////////////////

 

function leaves(){
  const vh = window.innerHeight;
  const vw = window.innerWidth;
  anime({
    targets:".bottom-leave",
    translateY:vh,
    opacity:0,
    duration:1000,
    easing:"easeInExpo"
  }); 

  anime({
    targets:".right-leave-staggers",
    translateX:vw,
    opacity:0,
    duration:1000,
    delay: anime.stagger(250),
    easing:"easeInExpo"
    
  }); 
  
  anime({
    targets:".bottom-leave-staggers",
    translateY:vw,
    opacity:0,
    duration:1000,
    delay: anime.stagger(100),
    easing:"easeInExpo"
    
  }); 
  anime({
    targets:".fade-leave",
    opacity:0,
    duration:1000,
    easing:"easeInExpo"
    
  }); 
  anime({
    targets:".right-leave",
    translateX:vw,
    opacity:0,
    duration:1000,
    easing:"easeInExpo"
    
  }); 

  anime({
    targets:".top-leave",
    translateY:-vh,
    opacity:0,
    duration:1000,
    easing:"easeInExpo"
  });

  anime({
    targets:".left-leave",
    translateX:-vw,
    opacity:0,
    duration:1000,
    easing:"easeInExpo"
  }); 
  anime({
    targets:".scale-leave",
    scale:[1,0],
    opacity:0,
    duration:1000,
    easing:"easeInExpo"
  }); 

/*   animation.finished.then(function() {
    // Do things...
  }); */
}


//////////////////
function enters(){
  const vh = window.innerHeight;
  const vw = window.innerWidth;


  anime({
    targets:".bottom-enter",
    translateY:[vh,0],
    opacity:[0,1],
    duration:1000,
    easing:"easeInExpo"
  }); 
  anime({
    targets:".fade-enter",
    opacity:[0,1],
    duration:1000,
    easing:"easeInExpo"
  }); 
  anime({
    targets:".right-enter",
    translateX:[vw,0],
    opacity:[0,1],
    duration:1000,
    easing:"easeInExpo"
    
  }); 

  anime({
    targets:".top-enter",
    translateY:["-100%",0],
    opacity:[0,1],
    duration:1000,
    easing:"easeOutExpo"
  });

  anime({
    targets:".top-enter-staggers",
    translateY:[-vh,0],
    //opacity:[0,1],
    duration:1000,
    delay: anime.stagger(250, {direction: "reverse"}),
    easing:"easeOutExpo"
  });
  anime({
    targets:".bottom-enter-staggers",
    translateY:[vh,0],
    opacity:[0,1],
    duration:1000,
    delay: anime.stagger(100, {}),
    easing:"easeOutExpo"
  });
  anime({
    targets:".left-enter-stagger",
    translateX:[-vw,0],
    opacity:[0,1],
    duration:1000,
    delay: anime.stagger(100, {}),
    easing:"easeOutExpo"
  });
  anime({
    targets:".popup-enter-staggers",
    scale:[0,1],
    //opacity:[0,1],
    duration:1000,
    delay: anime.stagger(100),
    easing: 'spring(1, 80, 10, 0)'
  });
  anime({
    targets:".left-enter",
    translateX:[-vw,0],
    opacity:[0,1],
    duration:1000,
    easing:"easeOutExpo"
  }); 
  anime({
    targets:".left-enter-easy",
    translateX:["-100%",0],
    opacity:[0,1],
    duration:1000,
    easing:"easeOutExpo"
  }); 
  jQuery(window).scrollTop(0);

}
function delay(n){
  n = n || 2000;
  return new Promise(done =>{
    setTimeout(()=>{
      done();
    },n);
  });
}
function inits() {
  AOS.init({});
}

barba.hooks.afterOnce(() => {
  inits();
});

barba.hooks.after(() => {
  inits();
});

document.addEventListener('aos:in', ({ detail }) => {
  jQuery('video').each(function(){
    jQuery(this)[0].play();
  })
});

//////////////////////////
jQuery(window).on("load", function() {
	barba.init({
    sync:true,
    transitions: [{
      async leave(data){
        const done = this.async();
        leaves();

        await delay(1500);
        
        done();
        window.scroll(0, 0);

      },

      async enter(data) {
        window.scroll(0, 0);

        enters();
        AOS.refresh()

      },
      once(data){
        enters();
      }
      
    }]
  })
	

  AOS.init();
/*   document.addEventListener('aos:in', ({ detail }) => {
    console.log(detail);
  }); */


  butter.init({
    wrapperId: 'motion',
    cancelOnTouch: true
  }); 

});


