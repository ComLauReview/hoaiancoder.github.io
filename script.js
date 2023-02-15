function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
const MenuBtn = document.getElementById("Menu-Btn ")
const OtherNavbar = document.getElementById("Other-Navbar ")
MenuBtn.onclick = () => {
    if (OtherNavbar.classList.contains("show ")) {
        OtherNavbar.classList.remove("show ")
    } else {
        OtherNavbar.classList.add("show ")
    }
}