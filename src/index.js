document.getElementById("menu-close").onclick = function() {closeMenu()};

function menuBTN(a){
  document.getElementById("menuID").setAttribute("style","display: normal" );
  document.getElementById("menuID").setAttribute("class",'mobile-menu');
}

function closeMenu(){
  document.getElementById("menuID").setAttribute("style","display: none" );
}

document.getElementById('buy-now-btn').onclick = function() {
    document.getElementById('modal').style.display = 'block';
    document.body.classList.add('no-scroll');
}

document.getElementsByClassName('close-btn')[0].onclick = function() {
    document.getElementById('modal').style.display = 'none';
    document.body.classList.remove('no-scroll');
}