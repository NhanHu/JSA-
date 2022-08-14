let products = [
    {
        name: 'Pho',
        title: 'Day la mon an co truyen cua Ha Noi va Viet Nam',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae eaque consectetur voluptates amet rem cum commodi distinctio iure? Animi nulla repellat hic? Voluptatum totam iusto eaque deleniti officiis nemo?',
        img: '/Users/tom/Desktop/WA/H/assets/img/hello.jpeg',
        id: 'm'
    },
    {
        name: 'Bun rieu',
        title: 'Day la mon an tuyet voi va rat thich hop de di an voi nguoi yeu',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae eaque consectetur voluptates amet rem cum commodi distinctio iure? Animi nulla repellat hic? Voluptatum totam iusto eaque deleniti officiis nemo?',
        img: '/Users/tom/Desktop/WA/H/assets/img/hello.jpeg',
        id: 'b'
    },
    {
        name: 'Banh da cua',
        title: 'Day la mot mon sieu ngon cua HaiPhong',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae eaque consectetur voluptates amet rem cum commodi distinctio iure? Animi nulla repellat hic? Voluptatum totam iusto eaque deleniti officiis nemo?',
        img: '/Users/tom/Desktop/WA/H/assets/img/hello.jpeg',
        id: 'e'
    },
    {
        name: 'Bun bo Hue',
        title: 'Mon ngon cua Hue',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae eaque consectetur voluptates amet rem cum commodi distinctio iure? Animi nulla repellat hic? Voluptatum totam iusto eaque deleniti officiis nemo?',
        img: '/Users/tom/Desktop/WA/H/assets/img/hello.jpeg',
        id: 'f'
    },
    {
        name: 'Banh bot loc',
        title: 'Mon ngon dac san cua Hue',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae eaque consectetur voluptates amet rem cum commodi distinctio iure? Animi nulla repellat hic? Voluptatum totam iusto eaque deleniti officiis nemo?',
        img: '/Users/tom/Desktop/WA/H/assets/img/hello.jpeg',
        id: 'c'
    },
    {
        name: 'Bun oc ',
        title: 'Mot mon ngon va dinh cao vao mua dong',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae eaque consectetur voluptates amet rem cum commodi distinctio iure? Animi nulla repellat hic? Voluptatum totam iusto eaque deleniti officiis nemo?',
        img: '/Users/tom/Desktop/WA/H/assets/img/hello.jpeg',
        id: 'a'
    }
]
let items = document.querySelector('#first-div')
for (i of products){
    items.innerHTML += `<div class="small_div"><img src=${i.img}> <h4 id = ${products.id}>${i.name}</h4><div class = "button" onclick="onclicks('${i.id}')"><p>Bấm vào đây để mua</p></div></div>`
}
console.dir()
localStorage.setItem("e", JSON.stringify(products))
function onclicks(Value){
    
    let co = document.getElementById(Value).textContent
    document.getElementById("second-div").innerHTML += `<p>${co}</p><br>`}