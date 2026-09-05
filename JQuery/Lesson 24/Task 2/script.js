$(document).ready(function(){
    $("#alert").on("click", function(){
        alertify.alert("Hello world")
        return false
    })
    $("#confirm").on("click", function(){
        alertify.confirm("нажми ок і буде ок", function(e){
            if(e){
                alertify.success("Молодець, тепер все ок")
            }else{
                alertify.error("тепер все не ок")
            }
        })
        return false
    })
    $("#prompt").on("click", function(){
        alertify.prompt("Напиши скільки хочеш грошей!", function(e, str){
            if(e){
                alertify.success(`Тримай своє бабло ${str}`)
            }else{
                alertify.error("Ти не отримав бабло")
            }
        })
        return false
    })
    $("#nofic").on("click", function(){
        alertify.log("нащо ти клікнув на мене")
        return false
    })
    $("#success").on("click", function(){
        alertify.success("Красавчик, ти клікнув на мене")
        return false
    })
    $("#error").on("click", function(){
        alertify.error("АЙ, боляче!")
        return false
    })
    $("#delay").on("click", function(){
        alertify.set({delay: 10000});
        alertify.log("я повільний")
        return false
    })
    $("#forever").on("click", function(){
        alertify.log("Я тут вічно поки на мене не натиснеш", "", 0)
        return false
    })
    $("#labels").on("click", function(){
        alertify.set({labels: {
            ok: "Ядерка на москву",
            cancel: "100000$"
        }})
        alertify.confirm("Дуже тяжко", function(e){
            if(e){
                alertify.success("московію знищено")
            }else{
                alertify.error("ти багатий,але москалі живі")
            }
        })
        return false
    })
})