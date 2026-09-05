$(document).ready(function(){
    let controller = new ScrollMagic.Controller();
    let pinHeaderScene = new ScrollMagic.Scene({
        triggerElement: ".header",
        triggerHook: 0,
        duration: "35%",
    })
    .setPin(".header", {pushFollowers: false})
    .addTo(controller)

    let pinHeaderScene2 = new ScrollMagic.Scene({
        triggerElement: ".p1",
        triggerHook: 0.5,
    })
    .setPin(".header", {pushFollowers: true})
    .addTo(controller)

    let slideParalaxScene = new ScrollMagic.Scene({
        triggerElement: ".paralax1",
        triggerHook: 0.5,
        duration: "200%",
    })
    .setTween(".bgc1", {y: "50%", ease: Linear.easeNote})
    .addIndicators()
    .addTo(controller)

    let slideParalaxScene2 = new ScrollMagic.Scene({
        triggerElement: ".paralax2",
        triggerHook: 0.5,
        duration: "200%",
    })
    .setTween(".bgc2", {y: "50%", ease: Linear.easeNote})
    .addIndicators()
    .addTo(controller)

    let slideParalaxScene3 = new ScrollMagic.Scene({
        triggerElement: ".paralax3",
        triggerHook: 0.5,
        duration: "200%",
    })
    .setTween(".bgc3", {y: "50%", ease: Linear.easeNote})
    .addIndicators()
    .addTo(controller)
    
    let slideParalaxScene4 = new ScrollMagic.Scene({
        triggerElement: ".paralax4",
        triggerHook: 0.5,
        duration: "200%",
    })
    .setTween(".bgc4", {y: "50%", ease: Linear.easeNote})
    .addIndicators()
    .addTo(controller)
})
