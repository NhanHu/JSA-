let products = [
    {
        name: 'Pencil haha',
        title: 'But 1A',
        des: '$40',
        img: 'https://rukminim1.flixcart.com/image/416/416/j5fmqa80/pencil/f/d/b/neon-doms-original-imaew4ggajytyxng.jpeg?q=70',
        id: '/Users/tom/Desktop/JSA-/WA/H/assets/Pencil.html'
    },
    {
        name: 'Pencil 548A',
        title: 'But 2A',
        des: '$70',
        img: 'https://m.media-amazon.com/images/I/91KwBLk6laL._AC_SL1500_.jpg',
        id: '/Users/tom/Desktop/JSA-/WA/H/assets/Pencil.html'
    },
    {
        name: 'Pencil 600',
        title: 'But 3A',
        des: '$345',
        img: 'https://media.istockphoto.com/photos/lead-pencil-picture-id847232194?k=20&m=847232194&s=170667a&w=0&h=bjb84vZKB4R908VGayy23LUeggAnkPBctSycbr8-tnY=',
        id: '/Users/tom/Desktop/JSA-/WA/H/assets/Pencil.html'
    },
    {
        name: 'Pencil i-s 3A',
        title: 'But 4A',
        des: '$1',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWVtyR_5wvGYGS98AM_AxvPKgFo3A9X09rQg&usqp=CAU',
        id: '/Users/tom/Desktop/JSA-/WA/H/assets/Pencil.html'
    },
    {
        name: 'Pencil Nhan',
        title: 'But 5A',
        des: '$338944',
        img: 'https://images.pexels.com/photos/159752/pencil-office-design-creative-159752.jpeg?cs=srgb&dl=pexels-pixabay-159752.jpg&fm=jpg',
        id: '/Users/tom/Desktop/JSA-/WA/H/assets/Pencil.html'
    },
    {
        name: 'Penci 36A',
        title: 'But 6A',
        des: '$176322369623764723796324967679237962',
        img: 'https://www.thespacereview.com/archive/613a.jpg',
        id: '/Users/tom/Desktop/JSA-/WA/H/assets/Pencil.html'
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