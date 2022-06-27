 anime.timeline({loop: true})
  .add({
    targets: '.wrapper, .title',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 900,
    delay: (el, i) => 800 * i
  }).add({
    targets: '.wrapper',
    opacity: 0,
    duration: 3000,
    easing: "easeOutExpo",
    delay: 4000
  });

  


 
 
 
 

 
 
 
 