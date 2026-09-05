let count = 1;
let ol = document.getElementById("todolist");

function add() {
    let val = document.getElementById("text").value
    if(val) {
        let item = document.createElement("li");
        item.textContent = val;
        item.id = `Item${count}`
        item.setAttribute("onclick", `changeStatus(${count})`)
        count++;
        ol.append(item);
        document.getElementById("text").value = ""
    }
}

function changeStatus(arg) {
    let elem = document.getElementById(`Item${arg}`);
    setInterval(() => {
       elem.remove();
    },1000)
}