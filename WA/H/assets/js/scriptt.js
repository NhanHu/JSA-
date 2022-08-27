let products = [
    {
        name: 'Pen 1A',
        title: 'But 1A',
        des: '$40',
        img: 'https://media.istockphoto.com/photos/pen-picture-id1059543698?k=20&m=1059543698&s=170667a&w=0&h=BKhT1Q-6CZHasjhpA4UR2O6fJ1COKUc5DiUIUYOIzAE=',
        id: '/Users/tom/Desktop/JSA-/WA/H/assets/Pen.html'
    },
    {
        name: 'Pen 2A',
        title: 'But 2A',
        des: '$20',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeYwtexH84MFt_FfS_T-6Z29D403f0ubL-CM4JChTFDQrW6JfskQTuILpTmvH-Ivb7r8s&usqp=CAU',
        id: '/Users/tom/Desktop/JSA-/WA/H/assets/Pen.html'
    },
    {
        name: 'Pen 3A',
        title: 'But 3A',
        des: '$39',
        img: 'https://i.pinimg.com/originals/c0/16/d5/c016d599e4165520c60f006354e9ac43.jpg',
        id: '/Users/tom/Desktop/JSA-/WA/H/assets/Pen.html'
    },
    {
        name: 'Pen 4A',
        title: 'But 4A',
        des: '$12',
        img: 'https://5scenter.in/wp-content/uploads/2021/04/pen.jpg',
        id: '/Users/tom/Desktop/JSA-/WA/H/assets/Pen.html'
    },
    {
        name: 'Pen 5A',
        title: 'But 5A',
        des: '$34',
        img: 'https://m.media-amazon.com/images/I/711F6-eLS6L._AC_SS450_.jpg',
        id: '/Users/tom/Desktop/JSA-/WA/H/assets/Pen.html'
    },
    {
        name: 'Pen 6A',
        title: 'But 6A',
        des: '$1763223',
        img: 'https://media.istockphoto.com/photos/pen-picture-id1059543698?k=20&m=1059543698&s=170667a&w=0&h=BKhT1Q-6CZHasjhpA4UR2O6fJ1COKUc5DiUIUYOIzAE=',
        id: '/Users/tom/Desktop/JSA-/WA/H/assets/Pen.html'
    }
]
let items = document.querySelector('#first-div')
for (i of products){
    items.innerHTML += `<div class="small_div" id="${i.id}"><img src=${i.img}> <h4 id = ${products.id}>${i.name}</h4><div class = "button" onclick="onclicks('${i.img}', '${i.name}', '${i.des}', '${i.id}')"><a id="a"href="/Users/tom/Desktop/JSA-/WA/H/assets/Buy.html">Click here to buy</a></div></div>`
}
console.dir()

function onclicks(img, name, des, id){
    localStorage.setItem("img", JSON.stringify(img))
    localStorage.setItem("name", JSON.stringify(name))
    localStorage.setItem("des", JSON.stringify(des))
    localStorage.setItem("id", JSON.stringify(id))

    }