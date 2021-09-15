
const navbarScroll = document.querySelector('.navbarScroll');

window.onscroll = function(){
    var top = window.scrollY;
    console.log(top);
    if (top >= 100){
        navbarScroll.classList.add('active')
    }else{
        navbarScroll.classList.remove('active');
    }
}