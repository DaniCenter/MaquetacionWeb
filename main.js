const navEmail = document.querySelector(".navbar-email");
const dektopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");
const productList = [];
const cardsContainer = document.querySelector(".cards-container");
productList.push({
  name: "Bike",
  price: 12700,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Bike",
  price: 12700,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Bike",
  price: 12700,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Bike",
  price: 12700,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Bike",
  price: 12700,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

function toggle(element, element2) {
  element.classList.toggle("inactive");

  if (element2 && !element2.classList.contains("inactive")) {
    element2.classList.toggle("inactive");
  }
}
function renderProducs(arr) {
  for (const product of arr) {
    const productCard = document.createElement("div");
    const img = document.createElement("img");
    const productInfo = document.createElement("div");
    const productInfoDiv = document.createElement("div");
    const productPrice = document.createElement("p");
    const productName = document.createElement("p");
    const productInfoFigure = document.createElement("figure");
    const productInfoCart = document.createElement("img");

    productCard.classList.add("product-card");
    img.setAttribute("src", product.image);
    productInfo.classList.add("product-info");
    productPrice.innerText = `\$${product.price}`;
    productName.innerText = `${product.name}`;
    productCard.setAttribute("src", "Platzi_YardSale_Icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productInfoCart);
    productInfoDiv.append(productPrice, productName);
    productInfo.append(productInfoDiv, productInfoFigure);
    productCard.append(img, productInfo);

    cardsContainer.appendChild(productCard);
  }
}

navEmail.addEventListener("click", () => toggle(dektopMenu, aside));
menuHamIcon.addEventListener("click", () => toggle(mobileMenu, aside));
if (window.matchMedia("(min-width: 641px)").matches) {
  menuCarritoIcon.addEventListener("click", () => toggle(aside, dektopMenu));
} else {
  menuCarritoIcon.addEventListener("click", () => toggle(aside, mobileMenu));
}
renderProducs(productList);
