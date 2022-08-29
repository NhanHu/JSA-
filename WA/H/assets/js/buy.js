let Buy = {
    name: `${JSON.parse(localStorage.getItem("name"))}`,
    des: `${JSON.parse(localStorage.getItem("des"))}`,
    img: `${JSON.parse(localStorage.getItem("img"))}`,
    id : `${JSON.parse(localStorage.getItem("id"))}`
}
let items = document.querySelector('#Div')
items.innerHTML += `<div id="imgs"><img id="hello" src="${Buy.img}"></div><div id="Small_div"><h1 id ="Name">${Buy.name}</h1><h4>${Buy.des}</h4><a onclick="myFunction()" href ="${Buy.id}"id="Confirm">Confirm</a></div>`
function myFunction() {
    let a = JSON.parse(localStorage.getItem("Buy"))
    if (JSON.parse(localStorage.getItem("yeah")) === []){
            let b = []
        }
    s = JSON.parse(localStorage.getItem("yeah"))
    s.push(Buy.name)
    localStorage.setItem("yeah", JSON.stringify(s))
    
  }
