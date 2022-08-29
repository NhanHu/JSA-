d = 0
let a = document.querySelector('#nav')
localStorage.setItem("Buy", JSON.stringify([]))
a.innerHTML += `<a href = "/Users/tom/Desktop/JSA-/WA/H/assets/Confirm.html"id="fiffav">${JSON.parse(localStorage.getItem("yeah")).length}</a>`
let b = document.getElementById("fiffav")
localStorage.setItem("Buy", 0)
let get_Item = JSON.parse(localStorage.getItem("yeah"))
let hello = document.querySelector('#hehe')
for (i of get_Item){
  hello.innerHTML += `<div id = "${d}" class="small_div"><h1 id ="Name">${i}<h1 onclick="Add('${d}')">+</h1><h1>-</h1></h1></div>`
  d++
}

function Add(v){
    console.log(v)
}
function RESET(){
    localStorage.setItem("yeah", JSON.stringify([]))
}
