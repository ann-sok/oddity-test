const luckyBtn = document.getElementById("luckyBtn");
const googleLogo = document.querySelector(".logo--google");
const oddityLogo = document.querySelector(".logo--oddity");
luckyBtn.addEventListener("click", (event) => {
  event.preventDefault;
  googleLogo.classList.toggle("display-none");
  oddityLogo.classList.toggle("display-none");
});
console.log(luckyBtn);
