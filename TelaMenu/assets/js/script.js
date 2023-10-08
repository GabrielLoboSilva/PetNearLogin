function menuShow(){
    let menuMobile = document.querySelector('.hamburguer-menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('icon').src="assets/img/menu_white_36dp.svg";
    } else{
        menuMobile.classList.add('open');
        document.querySelector('icon').src="assets/img/close_white.svg";
    }
}