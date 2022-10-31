

const titleImgSeletion1 = document.querySelector(".title-right-selective-img-1");
titleImgSeletion1.addEventListener("click", () => {

document.querySelector(".title-right-active-img").src = "../img/bouquet_4.png";
document.querySelector(".title-rpc-active").classList.remove("title-rpc-active");
document.querySelector("#circle1").classList.add("title-rpc-active");
});

const titleImgSeletion2 = document.querySelector(".title-right-selective-img-2");
titleImgSeletion2.addEventListener("click", () => {

document.querySelector(".title-right-active-img").src = "../img/bouquet_2.png";
document.querySelector(".title-rpc-active").classList.remove("title-rpc-active");
document.querySelector("#circle2").classList.add("title-rpc-active");
});

const titleImgSeletion3 = document.querySelector(".title-right-selective-img-3");
titleImgSeletion3.addEventListener("click", () => {

document.querySelector(".title-right-active-img").src = "../img/bouquet_3.png";
document.querySelector(".title-rpc-active").classList.remove("title-rpc-active");
document.querySelector("#circle3").classList.add("title-rpc-active");
});
