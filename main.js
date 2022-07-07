function toggleNav(){
    
    var x = document.getElementById("navbar-menu");
    var body = document.getElementsByTagName("BODY")[0];
    if(window.getComputedStyle(x).display != "none"){
        x.style.animationName = "navbar-menu-closure";
        setTimeout(function(){
            x.style.display = "none";
            body.style.overflowY = "visible";
        }, 470)
        }
    else{x.style.animationName = "navbar-menu";
    x.style.display = "block";
    body.style.overflowY = "hidden";}
}

