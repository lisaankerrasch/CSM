const searchIcon = document.querySelector(".icon-search");
const desktopSearchBar = document.querySelector(".search-bar-desktop");
const mobileSearchBar = document.querySelector(".search-bar-mobile");
const menuIcon = document.querySelector(".icon-menu");
const mobileMenu = document.querySelector(".menu");
const goButton = document.querySelector(".button-go");

searchIcon.onclick = function () {
  if (desktopSearchBar.style.display === "block") {
    desktopSearchBar.style.display = "none";
  } else {
    desktopSearchBar.style.display = "block";
  }
};

menuIcon.onclick = function () {
  if (mobileMenu.style.display === "block") {
    mobileMenu.style.display = "none";
    mobileSearchBar.style.display = "none";
    goButton.style.display = "none";
  } else {
    mobileMenu.style.display = "block";
    mobileSearchBar.style.display = "block";
    goButton.style.display = "block";
  }
};
