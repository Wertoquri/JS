$(document).ready(function () {
    $(".mistake").hide();
    $("#password").change(function () {
        let pasw = $(this).val()
        if (pasw.length < 8) {
            $("#length").show()
        } if (!pasw.match(/[A-z]/)) {
            $("#letter").show()
        }
        if (!pasw.match(/[A-Z]/)) {
            $("#Uletter").show()
        }
        if (!pasw.match(/[0-9]/)) {
            $("#digit").show()
        }
    })

})