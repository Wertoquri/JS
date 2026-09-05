$(document).ready(function(){
    let state = false;
    $("#btn").click(function(){
        if(state){
            $("body").removeClass('italic')
            state = !state;
        }else{
            $("body").addClass("italic")
            state = !state;
        }
    })
})