function menuShow(){
    let menuHamburguer = document.querySelector('.hamburguer-menu');
    if (menuHamburguer.classList.contains('open')){
        menuHamburguer.classList.remove('open');
        document.querySelector('icon').src="assets/img/menu_white_36dp.svg";
    } else{
        menuHamburguer.classList.add('open');
        document.querySelector('icon').src="assets/img/close_white.svg";
    }
}