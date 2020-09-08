function liquid_move(e) {
  var x = e.clientX;
  var y = e.clientY;
  var x_new = Math.round(x/15);
  var y_new = Math.round(y/15);  
  
  var liquid_1 = document.getElementById("liquid_slider_2"); 
  liquid_1.style.paddingBottom =  "540px";
  liquid_1.style.marginLeft =  x_new+"px";
  liquid_1.style.bottom =  y_new+"px";

  var liquid_2 = document.getElementById("liquid_slider_3"); 
  liquid_2.style.paddingBottom =  "400px";
  liquid_2.style.marginLeft =  x_new+"px";
  liquid_2.style.bottom =  y_new+"px";

  var liquid_3 = document.getElementById("liquid_slider_4"); 
  liquid_3.style.paddingBottom =  "95px";
  liquid_3.style.marginLeft =  x_new+"px";
  liquid_3.style.bottom =  y_new+"px";

}

var body_tag = document.getElementsByTagName("body")[0].onmousemove = function(event) {liquid_move(event)};


  