document.getElementById("menu-close").onclick = function() {closeMenu()};

function menuBTN(a){
  document.getElementById("menuID").setAttribute("style","display: normal" );
  document.getElementById("menuID").setAttribute("class",'mobile-menu');
}

function closeMenu(){
  document.getElementById("menuID").setAttribute("style","display: none" );
}