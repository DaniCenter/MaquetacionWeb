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
  price: 200,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Laptop",
  price: 300,
  image:
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
});
productList.push({
  name: "Helmet",
  price: 50,
  image:
    "https://images.unsplash.com/photo-1623101598030-0d3738589f10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
});
productList.push({
  name: "Headphones",
  price: 20,
  image:
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
});
productList.push({
  name: "Mask",
  price: 5,
  image:
    "https://images.unsplash.com/photo-1584634731339-252c581abfc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1475&q=80",
});
const asideSecondary = document.querySelector(".product-detail-secondary");
const closeAsisdeSecondary = document.querySelector(".product-detail-close");
const pInformations = document.querySelectorAll(".product-info-secondary > p");
const imgInformation = document.querySelector(".product-detail-secondary > img");

function toggle(element, ...args) {
  element.classList.toggle("inactive");
  const arrayDeactivate = [...args];
  for (const element of arrayDeactivate) {
    element.classList.add("inactive");
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
    img.setAttribute("onclick", "viewDetail(this)");
    productInfo.classList.add("product-info");
    productPrice.innerText = `\$${product.price}`;
    productName.innerText = `${product.name}`;
    productInfoCart.setAttribute("src", "./Platzi_YardSale_Icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productInfoCart);
    productInfoDiv.append(productPrice, productName);
    productInfo.append(productInfoDiv, productInfoFigure);
    productCard.append(img, productInfo);

    cardsContainer.appendChild(productCard);
  }
}
function viewDetail(element) {
  const arrayInfo = element.nextElementSibling.childNodes[0].childNodes;
  pInformations[0].innerText = arrayInfo[0].innerText;
  pInformations[1].innerText = arrayInfo[1].innerText;
  imgInformation.setAttribute("src", element.src);
  if (asideSecondary.classList.contains("inactive")) {
    toggle(asideSecondary);
  }
}

navEmail.addEventListener("click", () => toggle(dektopMenu, aside, asideSecondary));
menuHamIcon.addEventListener("click", () => toggle(mobileMenu, aside, asideSecondary));
menuCarritoIcon.addEventListener("click", () => toggle(aside, dektopMenu, mobileMenu, asideSecondary));
closeAsisdeSecondary.addEventListener("click", () => toggle(asideSecondary, aside, dektopMenu));
renderProducs(productList);
