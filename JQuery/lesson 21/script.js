

$(document).ready(function () {
    let counter = 1;
    $("#btn").click(function () {
        let item = $("#text").val();
        $("#todolist").append(`<li class="Item item${counter}">${item}</li>`)
        $("#text").val("");
        counter++
    });
    $("html").on("click", ".Item", function(){
       $(this).fadeOut(1000);
       setTimeout(()=>$(this).remove(), 1000)
    })
})