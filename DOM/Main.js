let a = document.getElementById("a")

console.log(a.hasAttribute("danil"))

a.setAttribute("danil", "negr")
console.log(a.getAttribute("danil"))

for(let atr of a.attributes){
    console.log(atr.name +":"+ atr.value)
}