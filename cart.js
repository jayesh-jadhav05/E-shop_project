const checkMe = document.getElementById('addcartproduct');
// console.log(checkMe)
const result = JSON.parse(localStorage.getItem("loggedInUser")).mycart;
console.log(result);
const products = document.getElementById("cartData"); 
const fun = () => {
    
    result.map((item) => {
       const div = document.createElement("div");
       div.className = "card";
       const div2 = document.createElement("div");
       div2.className = "rating";
       const img = document.createElement("img");
       img.src = item.image;
       const h5 = document.createElement("h5");
       h5.innerHTML = item.title;
       const p = document.createElement("p");
       p.innerHTML = `Rs ${item.price}`;
       const p2 = document.createElement("p");
       p2.innerHTML = `rating:${item.rating.rate}`;
       const btn = document.createElement("button");
       btn.innerHTML = "Add to Cart";
       div.appendChild(img);
       div.appendChild(h5);
       div2.appendChild(p);
       div2.appendChild(p2);
       div.appendChild(div2);
       div.appendChild(btn);
       products.appendChild(div);
    });
}

fun();

let count = 1;
let TotalPrice = 0;
function b2(data){
    console.log(data + " cart Data")
    data.map((item) => {
        const div = document.createElement('div');
        div.className = "price";
        const title = document.createElement('h6');
        title.innerHTML = `${count++} ${item.title}`;
        const price = document.createElement('h6');
        price.className = "pc"
        price.innerHTML = item.price;
        div.appendChild(title);
        div.appendChild(price);
        checkMe.appendChild(div);
        TotalPrice = TotalPrice + item.price;
    });
    let actual = TotalPrice.toFixed(3);
    document.getElementById('TotalPrice').innerHTML = `Total : ${actual}`;
}
b2(result);
