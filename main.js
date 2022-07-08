function toggleNav() {

    var navbar = document.getElementById("navbar-menu");
    var body = document.getElementsByTagName("BODY")[0];
    if (window.getComputedStyle(navbar).display != "none") {
        navbar.style.animationName = "navbar-menu-closure";
        setTimeout(function () {
            navbar.style.display = "none";
            body.style.overflowY = "visible";
        }, 470)
    }
    else {
        navbar.style.animationName = "navbar-menu";
        navbar.style.display = "block";
        body.style.overflowY = "hidden";
    }
}

