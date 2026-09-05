let answer = ["женя лизогуб","нацист","машина","русик","бобер","стілець","мішутка","негр","данило"]

let num = Math.floor(Math.random()*9)

function startRebus(arg){
   $("#picture").attr("src", `img/${arg}.png`)
}

$(document).ready(function(){
    $(".rules").slideUp();
    $(".slideRules").click(function(){
        $(".rules").slideToggle();
    });
    startRebus(num)
})