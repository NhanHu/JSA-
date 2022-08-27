let products = [
    {
        name: 'Eraser Deluxe',
        title: 'But 1A',
        des: '$92',
        img: 'https://cf.shopee.vn/file/f46fc759b9e6e568f04a7122f4bad317',
        id: '/Users/tom/Desktop/JSA-/WA/H/assets/Eraser.html'
    },
    {
        name: 'Eraser B4',
        title: 'But 2A',
        des: '$67880',
        img: 'https://images.officeworks.com.au/api/2/img/https://s3-ap-southeast-2.amazonaws.com/wc-prod-pim/JPEG_1000x1000/ST526B20NB_staedtler_rasoplast_eraser_large.jpg/resize?size=600&auth=MjA5OTcwODkwMg__',
        id: '/Users/tom/Desktop/JSA-/WA/H/assets/Eraser.html'
    },
    {
        name: 'Eraser era',
        title: 'But 3A',
        des: '$5',
        img: 'https://paperconcept.pl/76047-home_default/art-eraser-big.jpg',
        id: '/Users/tom/Desktop/JSA-/WA/H/assets/Eraser.html'
    },
    {
        name: 'Eraser việt',
        title: 'But 4A',
        des: '$5.000.000.000.000',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJLMnLwC4xPqMvjU8udGLs9EIbPKgWbNO17g&usqp=CAU',
        id: '/Users/tom/Desktop/JSA-/WA/H/assets/Eraser.html'
    },
    {
        name: 'Eraser K1',
        title: 'But 5A',
        des: '$354',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNKyVlm5j56igXrMl0QSlsV1jMq7j5VT7rsA&usqp=CAU',
        id: '/Users/tom/Desktop/JSA-/WA/H/assets/Eraser.html'
    },
    {
        name: 'Eraser ç√ß',
        title: 'But 6A',
        des: '$1763223',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPIUJa6Lg2jWszNiYxL4gM8e82gwUL6YlB9A&usqp=CAU',
        id: '/Users/tom/Desktop/JSA-/WA/H/assets/Eraser.html'
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