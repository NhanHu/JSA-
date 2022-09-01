let d = 1
let a = document.querySelector('#nav')
localStorage.setItem("Buy", JSON.stringify([]))
a.innerHTML += `<a href = "/Users/tom/Desktop/JSA-/WA/H/assets/Confirm.html"id="fiffav">${JSON.parse(localStorage.getItem("yeah")).length}</a>`
let b = document.getElementById("fiffav")
localStorage.setItem("Buy", 0)
let get_Item = JSON.parse(localStorage.getItem("yeah"))
let hello = document.querySelector('#hehe')
for (i of get_Item){
  hello.innerHTML += `<div id = "${i}" class="small_div"><h1 id ="Name">${i}<h1 onclick="Add('${i}')">+</h1><h1 onclick="Del('${i}')">-</h1></h1></div>`
}

function Add(v){
    
    let get_Item = JSON.parse(localStorage.getItem("yeah"))
    console.log(d)
    hello.innerHTML += `<div id = "${v}" i"class="small_div"><h1 id ="Name">${v}<h1 onclick="Add('${v}')">+</h1><h1 onclick="Del('${i}')">-</h1></h1></div>`
    get_Item.push(`${v}`)
    console.log(get_Item)
    localStorage.setItem("yeah", JSON.stringify(get_Item))
    location.href = "/Users/tom/Desktop/JSA-/WA/H/assets/Confirm.html";

}
function Del(v){
    const element = document.getElementById(`${v}`);
    element.remove();
    let get_Item = JSON.parse(localStorage.getItem("yeah"))
    var Index = get_Item.indexOf(`${v}`);
    get_Item.splice(Index, 1);
    localStorage.setItem("yeah", JSON.stringify(get_Item))
    location.href = "/Users/tom/Desktop/JSA-/WA/H/assets/Confirm.html";
} 
function RESET(){
    localStorage.setItem("yeah", JSON.stringify([]))
}
