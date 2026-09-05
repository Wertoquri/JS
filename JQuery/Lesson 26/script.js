$(document).ready(function(){
    let controller = new ScrollMagic.Controller();

    let pinHeaderScene1 = new ScrollMagic.Scene({
        triggerElement: ".project1",
        triggerHook: 0,
        duration: "30%"
    })
    .setPin(".header", {pushFollowers: false})
    .addIndicators()
    .addTo(controller)

    $(".project").each(function(){
        let secondPinScene = new ScrollMagic.Scene({
       triggerElement: this,
       duration: "200%",
       triggerHook: 0,
    })
    .setPin(this,{pushFollowers: false})
    .addIndicators()
    .addTo(controller)
    });
});


