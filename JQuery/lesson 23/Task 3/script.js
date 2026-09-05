$(document).ready(function(){
    $("#change").click(function(){
        let w = $("#w").val()
        let h = $("#h").val()
        if(w.search("%") != -1){
            $(".dimension").width(w)
        }else if(w.search("px") != -1){
            $(".dimension").width(w.slice(0, -2))
        }
        if(h.search("%") != -1){
            $(".dimension").height(h)
        }else if(h.search("px") != -1){
            $(".dimension").height(h.slice(0, -2))
        }
    })
})