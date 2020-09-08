document.getElementById("toggle-burger").onclick = function() {

    var navbar_burger_top = document.getElementsByClassName("navbar-burger-top");
    for (var i = 0; i < navbar_burger_top.length; i++) {
        navbar_burger_top [i].classList.toggle("navbar-burger-top--transform");
    }

    var navbar_burger_middle = document.getElementsByClassName("navbar-burger-middle");
    for (var x = 0; x < navbar_burger_middle.length; x++) {
        navbar_burger_middle[x].classList.toggle("navbar-burger-middle--transform");
    }

    var navbar_burger_bottom = document.getElementsByClassName("navbar-burger-bottom");
    for (var i = 0; i < navbar_burger_bottom.length; i++) {
        navbar_burger_bottom[i].classList.toggle("navbar-burger-bottom--transform");
    }

    var navigation_menu = document.getElementsByClassName("navigation-menu");
    for (var i = 0; i < navigation_menu.length; i++) {
        navigation_menu[i].classList.toggle("navigation-menu-mobile");
    }

    var mouse_scroll = document.getElementsByClassName("mouse-scroll");
    for (var i = 0; i < mouse_scroll.length; i++) {
        mouse_scroll[i].classList.toggle("mouse-scroll-hide");
    }

    var body_tag = document.getElementsByTagName("body")[0];
    body_tag.classList.toggle("scroll-fix");

    var html_tag = document.getElementsByTagName("html")[0];
    html_tag.classList.toggle("scroll-fix");

};


