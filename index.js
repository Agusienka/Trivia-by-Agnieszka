 anime.timeline({loop: true})
  .add({
    targets: '.wrapper, .title',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i
  }).add({
    targets: '.wrapper',
    opacity: 0,
    duration: 2000,
    easing: "easeOutExpo",
    delay: 1000
  });

  


 
 
 
 

 
 
 
 