$(document).ready(function(){
    let R = $("#rangeRed").val()
    let G = $("#rangeGreen").val()
    let B = $("#rangeBlue").val()
    document.body.style.background = `rgb(${R}, ${G}, ${B})`
    $("#rangeRed").on("input", function(){
        $("#textRed").attr("")
        R = this.value
        document.body.style.background = `rgb(${R}, ${G}, ${B})`
        $("#textRed").attr("value", R)
    })
    $("#rangeGreen").on("input", function(){
        $("#textGreen").attr("")
        G = this.value
        document.body.style.background = `rgb(${R}, ${G}, ${B})`
        $("#textGreen").attr("value", G)
    })
    $("#rangeBlue").on("input", function(){
        $("#textBlue").attr("    ")
        B = this.value
        document.body.style.background = `rgb(${R}, ${G}, ${B})`
        $("#textBlue").attr("value", B)
    })
    $("#textRed").on("input", function(){
        R = this.value
        $("#rangeRed").val(R);
        document.body.style.background = `rgb(${R}, ${G}, ${B})`
    })
    $("#textGreen").on("input", function(){
        G = this.value
        $("#rangeGreen").val(G);
        document.body.style.background = `rgb(${R}, ${G}, ${B})`
    })
    $("#textBlue").on("input", function(){
        B = this.value
        $("#rangeBlue").val(B);
        document.body.style.background = `rgb(${R}, ${G}, ${B})`
    })

})