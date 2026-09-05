let startTime;
let endTime;
let results = [];


$(document).ready(function () {
    $("#check").on("click", function () {
        startTime = $.now()
        exam(3)
    })
})

function exam(arg) {
    let a = Math.floor(Math.random() * 100)
    let b = Math.floor(Math.random() * 100)
    let answer = parseInt(a + b);

    alertify.prompt(`Тест №${4 - arg}: ${a} + ${b}`, function (e, str) {
        if (e) {
            if (answer == parseInt(str)) {
                alertify.success(`Вірно ${str}`)
                arg--;
            } else {
                alertify.error(`Не вірно, правильна відповідь буде ${answer}`);
            }
            if (arg <= 0) {
                endTime = $.now();
                alertify.alert(`Ти витратив на це ${(endTime - startTime) / 1000} секунд`
                );
                addResult((endTime - startTime) / 1000)
                return false
            } else {
                exam(arg)
            }
        }
        else {
            return false
        }
    });
}

function addResult(time) {
    alertify.prompt("Як тебе звати?", function (e, str) {
        if (e) {
            results.push({
                name: str,
                time: time
            })
            results.sort((a, b) => {
                if (a.time > b.time) return 1;
                if (a.time < b.time) return -1;
                return 0;
            })
            $("table").html("")
            $("table").append("<tr><th>Rank</th><th>Name</th><th>Time</th></tr>")
            for (let i = 0; i < results.length; i++) {
                $("table").append(`<tr>
                   <td>${i + 1}</td>
                   <td>${results[i].name}</td>
                   <td>${results[i].time}</td>
                </tr>`)
            }
        }
    })
}