document.getElementById('buy-now-btn').onclick = function() {
    document.getElementById('modal').style.display = 'block';
    document.body.classList.add('no-scroll');
}

document.getElementsByClassName('close-btn')[0].onclick = function() {
    document.getElementById('modal').style.display = 'none';
    document.body.classList.remove('no-scroll');
}

