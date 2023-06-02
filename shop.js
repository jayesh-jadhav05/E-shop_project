async function showData(whichOne) {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    console.log(data);
    const Mens = data.filter((c) => c.category === "men's clothing");
    const WoMens = data.filter((c) => c.category === "women's clothing");
    const Jevellery = data.filter((c) => c.category === "jewelery");
    const Electronics = data.filter((c) => c.category === "electronics");

    displayAll(data);
    if (whichOne === "Mens Clothings") {
        displayAll(Mens);
    } else if (whichOne === "Womens Clothings") {
        displayAll(WoMens);
    } else if (whichOne === "Jevellery") {
        displayAll(Jevellery);
    } else if (whichOne === "Electronics") {
        displayAll(Electronics);
    } else if (whichOne === "All") {
        displayAll(data);
    }

    const price1 = data.filter((item) => item.price < 25);
    const price2 = data.filter((item) => item.price > 25 && item.price < 50);
    const price3 = data.filter((item) => item.price > 50 && item.price < 75);
    const price4 = data.filter((item) => item.price > 75);

    document.getElementById('priceOne').addEventListener('click', () => displayAll(price1));
    document.getElementById('priceTwo').addEventListener('click', () => displayAll(price2));
    document.getElementById('priceThree').addEventListener('click', () => displayAll(price3));
    document.getElementById('priceFour').addEventListener('click', () => displayAll(price4));
}


const displayAll = (d) => {

    const bData = document.getElementById("bottomData");
    bData.innerHTML = null;
    d.map((curr) => {
        const div = document.createElement("div");
        div.className = "card";
        const div2 = document.createElement("div");
        div2.className = "rating";
        const img = document.createElement("img");
        img.src = curr.image;
        const h5 = document.createElement("h5");
        h5.innerHTML = curr.title;
        const p = document.createElement("p");
        p.innerHTML = `Rs ${curr.price}`;
        const btn = document.createElement("button");
        btn.innerHTML = "Add to Cart";
        btn.onclick = () => setData(curr);
        div.appendChild(img);
        div2.appendChild(p);
        div2.appendChild(h5);
        div.appendChild(div2);
        div.appendChild(btn);
        bData.appendChild(div);
    });
};

var storedData = localStorage.getItem("loggedInUser");
var data = JSON.parse(storedData);
var myCartArray = data.mycart;

const setData = (item) => {
    myCartArray.push(item);
    data.mycart = myCartArray;
    localStorage.setItem("loggedInUser", JSON.stringify(data));
}

showData();


