function mobile_navbar_window_resize() {
    var body_tag = document.getElementsByTagName("body")[0];
    body_tag.classList.remove("scroll-fix");

    var html_tag = document.getElementsByTagName("html")[0];
    html_tag.classList.remove("scroll-fix");

    var navigation_menu = document.getElementsByClassName("navigation-menu");
    for (var i = 0; i < navigation_menu.length; i++) {
        navigation_menu[i].classList.remove("navigation-menu-mobile");
    }
    
    var navbar_burger_top = document.getElementsByClassName("navbar-burger-top");
    for (var i = 0; i < navbar_burger_top.length; i++) {
        navbar_burger_top [i].classList.remove("navbar-burger-top--transform");
    }

    var navbar_burger_middle = document.getElementsByClassName("navbar-burger-middle");
    for (var x = 0; x < navbar_burger_middle.length; x++) {
        navbar_burger_middle[x].classList.remove("navbar-burger-middle--transform");
    }

    var navbar_burger_bottom = document.getElementsByClassName("navbar-burger-bottom");
    for (var i = 0; i < navbar_burger_bottom.length; i++) {
        navbar_burger_bottom[i].classList.remove("navbar-burger-bottom--transform");
    }
    


  }
  
window.onresize = mobile_navbar_window_resize;