let animItems = document.querySelectorAll('._anim-items');

if(animItems.length > 0){
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(){
        for(let index = 0; index < animItems.length; index++){
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight; 
            const animItemsOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if(animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if((scrollY > animItemsOffset - animItemPoint) && scrollY < (animItemsOffset + animItemHeight)){
                animItem.classList.add('_active');
            } else{
                if(!animItem.classList.contains('_anim-no-hide')){
                    animItem.classList.remove('_active');
                }
            }
        }
    }
    function offset(el){
        const rect = el.getBoundingClientRect();
         var   scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }

    setTimeout(() => {
        animOnScroll();
    }, 1000);
    
}








$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    })
})