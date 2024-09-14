const hamburgerMenu = document.getElementsByClassName("hamburgerMenu")[0],
    sideNav = document.getElementsByClassName("sideNav")[0];
console.log("sideNav:", sideNav);

function showSideNav() {
    console.log("click");
    sideNav.classList.add("popUpSideBar");
}