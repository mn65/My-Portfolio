$(document).ready(function()
{
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky")
        }
        else{
            $('.navbar').removeClass("sticky")
        }
    })
})

burgur = document.querySelector('.menu-btn')
menu = document.querySelector('.menu')

burgur.addEventListener('click', function(){
    menu.classList.toggle('line-height')
    menu.classList.toggle('line-height-2')
})