$(document).ready(function(){
    $(".hour").knob({
        'min': 0,
        'max': 24,
        'bgColor': "#333",
        'fgColor': "Blue",
        'displayInput': false,
        'width': 300,
        'height': 300,
        'thickness': 0.3,
    })
    $(".minute").knob({
        'min': 0,
        'max': 60,
        'bgColor': "#333",
        'fgColor': "aqua",
        'displayInput': false,
        'width': 200,
        'height': 200,
        'thickness': 0.45,
    })
    $(".second").knob({
        'min': 0,
        'max': 60,
        'bgColor': "#333",
        'fgColor': "lightBlue",
        'displayInput': false,
        'width': 100,
        'height': 100,
        'thickness': 0.3,
    })
    clock()
})

function clock(){
    let $s = $(".second")
    let $m = $(".minute")
    let $h = $(".hour")
    let d = new Date();
    let s = d.getSeconds();
    let m = d.getMinutes();
    let h = d.getHours();
    $s.val(s).trigger("change");
    $m.val(m).trigger("change");
    $h.val(h).trigger("change");
    setTimeout("clock()", 1000);
}