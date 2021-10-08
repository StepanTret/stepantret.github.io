




$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

let tab = function(){
    let tabNav = document.querySelectorAll('.tabs-nav__item'),
        tabContent = document.querySelectorAll('.tabs__block'),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    })
    function selectTabNav(){
        tabNav.forEach(item =>{
            item.classList.remove('is-active')
        })
        this.classList.add('is-active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName)
    }
    function selectTabContent(){
        tabContent.forEach(item =>{
            item.classList.contains(tabName)? item.classList.add('is-active'):item.classList.remove('is-active')
        })
    }
}
tab()

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
         var   scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
         var   scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    setTimeout(() => {
        animOnScroll();
    }, 900);
    
}