const searchBarContainerEl = document.querySelector(".serach-bar-container");

const magnifierEl = document.querySelector(".magnifier");

magnifierEl.addEventListener("click", () =>{
searchBarContainerEl.classList.toggle("active");
});