let Products = [
    {
        name: "Rose flowers",
        price: 12,
        img: "./img/bebe-flower.jpg",
    },
    {
        name: "Multicolored flowers",
        price: 14,
        img: "./img/multicolor-flower.jpg",
    }, {
        name: "Pink flowers",
        price: 25,
        img: "./img/rose-flower.jpg",
    }, {
        name: "Blue flowers",
        price: 19,
        img: "./img/bleu-flower.jpg",
    },
]

let MyAppRoot = document.getElementById('app')

let title = document.createElement('h1')
title.innerHTML = 'Come and explore our beautiful selection of flowers and find the perfect bouquet to brighten up your home or surprise a loved one with a thoughtful gift 🌸.'
MyAppRoot.appendChild(title)
Products.map((Produit, index) => {
    let div = document.createElement('div')
    div.setAttribute('class',"product")

    let ProductName = document.createElement('h3')
    ProductName.innerHTML = Produit.name
    div.appendChild(ProductName)
    


    let image=document.createElement('img')
    image.setAttribute("src",Produit.img)
    image.setAttribute("class","photo")
    div.appendChild(image)
    
    
    let reaction = document.createElement('div')
    reaction.setAttribute("class",'reaction')
    
    let inputQte = document.createElement('input')
    inputQte.setAttribute("value",1)
    inputQte.setAttribute("onClick","total()")
    inputQte.setAttribute("min",1)
    inputQte.setAttribute("type",'number')
    reaction.appendChild(inputQte)
    
    let heart = document.createElement('i')
    heart.setAttribute('class',"fa-regular fa-heart")
    reaction.appendChild(heart)
    let buttonDelete = document.createElement('i')
    buttonDelete.setAttribute('class',"fa-solid fa-trash")
    reaction.appendChild(buttonDelete)

    div.appendChild(reaction)



    const photosContainer = document.getElementById('photosContainer');
    // const sources = ['/img/bebe-flower.jpg', '/img/multicolor-flower.jpg', '/img/rose-flower.jpg']; 
    // for (let i = 0; i < sources.length; i++) {
    //     const img = document.createElement('img');
    //     img.src = sources[i];
    //     photosContainer.appendChild(img);
    //   }
     
    


     let price = document.createElement('p')
     price.innerHTML = Produit.price + "$"
     div.appendChild(price)

     heart.addEventListener ("click",()=>{
        heart.classList.toggle('fa-solid')
     })



    inputQte.addEventListener("change",(e)=>{
       let total = e.target.value * Produit.price
    
       price.innerHTML = total
    })







    MyAppRoot.appendChild(div)
    buttonDelete.addEventListener("click",()=>{
        MyAppRoot.removeChild(div);


    })

});

let MontantTotal = document.createElement('h1')
MontantTotal.setAttribute('id', 'MontantTotal')
MyAppRoot.appendChild(MontantTotal)

function total()
{
    var all=document.querySelectorAll("p");
    var som=0;
    for(let x of all)
    {
        let xx=x.innerText;   
        
       som+= parseInt(xx.replace("$",""));
       
    }

    document.getElementById('MontantTotal').innerHTML = "Total ="+som + "$"

   
    console.log(som)
    

}
total();
