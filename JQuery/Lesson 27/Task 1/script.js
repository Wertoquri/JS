$(document).ready(function(){
    let controller = new ScrollMagic.Controller();

    let wipeAnimation = new TimelineMax()
    .fromTo(".project2", {x: "-100%"}, {x:"0%", ease: Linear.easeNode})
    .fromTo(".project3", {x: "100%"}, {x:"0%", ease: Linear.easeNode})
    .fromTo(".project4", {y: "-100%"}, {y:"0%", ease: Linear.easeNode})

    let Scene1 = new ScrollMagic.Scene({
        triggerElement: "#main",
        triggerHook: "onLeave",
        duration: "300%"
    })
    .setPin("#main")
    .setTween(wipeAnimation)
    .addIndicators()
    .addTo(controller)
})