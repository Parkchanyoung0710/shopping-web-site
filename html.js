let products = [
    { price: 40000, title: "souffle", img: "0.png" },
    { price: 70000, title: "Caramel Macchiato", img: "1.png" },
    { price: 50000, title: "Fruit ice", img: "2.png" },
    { price: 60000, title: "Donuts", img: "3.png" },
    { price: 40000, title: "Tart", img: "4.png" },
    { price: 30000, title: "pancake", img: "5.png" },
  ];
  for (let i = 0; i < products.length; i++) {
    products[i].id = i;
    const cardContainer = document.getElementById("cardContainer");
    const card = document.createElement("div");
    card.className = "card";
    const img = document.createElement("img");
    img.className = "이미지";
    img.src = `./img/${products[i].img}`;
    const cardBody = document.createElement("div");
    cardBody.className = "card-body";
    const title = document.createElement("h5");
    title.className = "title";
    title.innerText = products[i].title;
    const price = document.createElement("p");
    price.className = "price";
    price.innerText = products[i].price;
    const btn = document.createElement("button");
    btn.className = "btn btn-danger";
    btn.innerText = "주문하기";

    cardBody.appendChild(title);
    cardBody.appendChild(price);
    cardBody.appendChild(btn);

    card.appendChild(img);
    card.appendChild(cardBody);
    cardContainer.appendChild(card);
  }