fetch("https://dummyjson.com/products").then((result) => {
    let myData = result.json();
    return myData;
}).then((myData) => {
    console.log(myData)
    return myData;
}).then((myData) => {
    let cardsContanier = document.querySelector(".products-show");
    for(let i = 0 ; i < myData.products.length ; i++ ) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("rotating-border");
    card.classList.add("rotating-border-google");
    cardsContanier.appendChild(card);
    
    let box1 = document.createElement("div");
    box1.classList.add("box1");
    card.appendChild(box1);
    
    let id = document.createElement("span");
    id.classList.add("id");
    card.appendChild(id);
    id.innerText = `${myData.products[i].id}`
    
    let rate = document.createElement("span");
    rate.classList.add("rate");
    card.appendChild(rate);
    rate.innerText = `${myData.products[i].rating.toFixed(1)}`
    
    let imageBox = document.createElement("div");
    imageBox.classList.add("image-box");
    box1.appendChild(imageBox);
        
        for(let j = 0 ; j < myData.products[i].images.length;j++){
            let image = document.createElement("img");
            image.setAttribute("src",`${myData.products[i].images[j]}`);
            image.setAttribute("alt",`image${myData.products[i].id} `)
            if(myData.products[i].images.length > 1){
                if(j==1)
                box1.appendChild(image);
                else
                imageBox.appendChild(image)
            }else {
                if(j == 0){
                    imageBox.style.overflowX="hidden";
                    box1.appendChild(image);
            }
        }
        }
        
    let box2 = document.createElement("div");
    box2.classList.add("box2");
    card.appendChild(box2);
    
    let brand = document.createElement("h3");
    brand.classList.add("brand");
    box2.appendChild(brand);
    brand.innerText = `${myData.products[i].brand}`;
    
    let catagory = document.createElement("span")
    catagory.classList.add("cata");
    brand.appendChild(catagory);
    catagory.innerText = `( ${myData.products[i].category} )`
    
    let description = document.createElement("p");
    description.classList.add("des");
    box2.appendChild(description);
    description.innerText = `${myData.products[i].description} .`

    let price = document.createElement("div");
    price.classList.add("price");
    let mainPrice = document.createElement("span");
    mainPrice.classList.add("main-price");
    price.appendChild(mainPrice);
    mainPrice.innerText= `$${myData.products[i].price}`
    let discount = document.createElement("span");
    discount.classList.add("discount");
    price.appendChild(discount);
    box2.appendChild(price);
    //calculate the discount from the percentage
    let calc =(myData.products[i].price - (myData.products[i].price * myData.products[0].discountPercentage)/100).toFixed(0)
    discount.innerText = `| $${calc}`

    let buyNow = document.createElement("a");
    buyNow.classList.add("buy-now");
    buyNow.classList.add("btn");
    buyNow.innerText = "Buy Now";
    price.appendChild(buyNow);
    
    let contact = document.createElement("a");
    contact.classList.add("contact");
    contact.classList.add("btn");
    contact.innerText = "Contact";
    price.appendChild(contact);
    
    };
    let cc = {cardsContanier};
    let count = 0;
    let s1 = 0, s2 =10; 
    let rButtons = document.querySelectorAll("button");
    for(let n = 1 ; n <= 3 ; n++){
        document.querySelector("#btn1").click();
        let buttons = document.querySelector(`#btn${n}`);
        buttons.onclick = () => {
            for(let r = 0 ; r < rButtons.length ; r++){
                rButtons[r].classList.remove("active");
            }
            buttons.classList.add("active");
            s1 = (n-1)*10;
            s2 = (n)*10;
            count = n-1;
            for(let m = 0 ; m < 30 ; m++ ){
                if(m<s1 || m>=s2) {
                    cc.cardsContanier.children[m].classList.add("d-none");
                }else {
                    cc.cardsContanier.children[m].classList.remove("d-none");
                }
            }
        }
        let arrowRight = document.querySelector(".right");
        let arrowLeft = document.querySelector(".left");
        arrowRight.onclick = () => {
            if(count<2){
                count++;
                rButtons[count].click();
            }
        }
        arrowLeft.onclick = () => {
            if(count>0){
                count--;
                rButtons[count].click();
                }
        }
    }
    let searchBar = document.querySelector("input");
    let card = document.querySelectorAll(".card");
    let disAppCards = document.querySelector(".products-slide");
    searchBar.onkeyup = () => {
        let n = parseInt(document.querySelector(".active").id.slice(3));
        let value = searchBar.value.toLowerCase();
        if(searchBar.value !== "") {
            disAppCards.classList.add("d-none")
        }else {
            disAppCards.classList.remove("d-none")
        }
        for(let i = 0 ; i < 30; i++){
            let cardLowerCase = card[i].innerText.toLowerCase();
                if(cardLowerCase.indexOf(`${value}`) !== -1) {
                    card[i].classList.remove("d-none");
                }
                else {
                    card[i].classList.add("d-none");
                }
                if(value==""){
                    s1 = (n-1)*10;
                    s2 = (n)*10;
                    for(let m = 0 ; m < 30 ; m++ ){
                    if(m<s1 || m>=s2) {
                    cc.cardsContanier.children[m].classList.add("d-none");
                    }else {
                    cc.cardsContanier.children[m].classList.remove("d-none");
                        }
                    }
                }
            }
        }
});
window.onunload = () => {
    document.querySelector("#spin").classList.remove("d-none")
    console.log(true)
}
window.onload = () => {
    setTimeout(() => {
        document.querySelector("#spin").classList.add("d-none");
    }, 3000);
}

console.log(window);

