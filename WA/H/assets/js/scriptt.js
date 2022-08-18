let products = [
    {
        name: 'Pen 1A',
        title: 'But 1A',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae eaque consectetur voluptates amet rem cum commodi distinctio iure? Animi nulla repellat hic? Voluptatum totam iusto eaque deleniti officiis nemo?',
        img: '/Users/tom/Desktop/WA/H/assets/img/hello.jpeg',
        id: 'm'
    },
    {
        name: 'Pen 2A',
        title: 'But 2A',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae eaque consectetur voluptates amet rem cum commodi distinctio iure? Animi nulla repellat hic? Voluptatum totam iusto eaque deleniti officiis nemo?',
        img: '/Users/tom/Desktop/WA/H/assets/img/hello.jpeg',
        id: 'b'
    },
    {
        name: 'Pen 3A',
        title: 'But 3A',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae eaque consectetur voluptates amet rem cum commodi distinctio iure? Animi nulla repellat hic? Voluptatum totam iusto eaque deleniti officiis nemo?',
        img: '/Users/tom/Desktop/WA/H/assets/img/hello.jpeg',
        id: 'e'
    },
    {
        name: 'Pen 4A',
        title: 'But 4A',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae eaque consectetur voluptates amet rem cum commodi distinctio iure? Animi nulla repellat hic? Voluptatum totam iusto eaque deleniti officiis nemo?',
        img: '/Users/tom/Desktop/WA/H/assets/img/hello.jpeg',
        id: 'f'
    },
    {
        name: 'Pen 5A',
        title: 'But 5A',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae eaque consectetur voluptates amet rem cum commodi distinctio iure? Animi nulla repellat hic? Voluptatum totam iusto eaque deleniti officiis nemo?',
        img: '/Users/tom/Desktop/WA/H/assets/img/hello.jpeg',
        id: 'c'
    },
    {
        name: 'Pen 6A',
        title: 'But 6A',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae eaque consectetur voluptates amet rem cum commodi distinctio iure? Animi nulla repellat hic? Voluptatum totam iusto eaque deleniti officiis nemo?',
        img: '/Users/tom/Desktop/WA/H/assets/img/hello.jpeg',
        id: 'a'
    }
]
let items = document.querySelector('#first-div')
for (i of products){
    items.innerHTML += `<div class="small_div"><img src=${i.img}> <h4 id = ${products.id}>${i.name}</h4><div class = "button" onclick="onclicks('${i.img}, ${i.name}, ${i.des}')"><p>Bấm vào đây để mua</p></div></div>`
}
console.dir()

function onclicks(img, name, des){
        console.log(img)
        console.log(name)
        console.log(des)
    }