'use strict'

const barsMenu = document.querySelector(".bars .fa-bars");
const barsMobil = document.querySelector(".bars-off");
const barsClose = document.querySelector(".clous");
const bodyColor = document.querySelector(".bars-bag");
const butto = document.querySelector(".akardion-button-1");
const button = document.querySelector(".mybutton1")
const butto1 = document.querySelector(".akardion-button-2");
const button1 = document.querySelector(".mybutton2")
const butto2 = document.querySelector(".akardion-button-3");
const button2 = document.querySelector(".mybutton3")
const butto3 = document.querySelector(".akardion-button-4");
const button3 = document.querySelector(".mybutton4")

///MOB MENU
barsMenu.addEventListener("click", () => {
    barsMobil.classList.add("active-menu");
    bodyColor.style.background = "rgba(30,40,69,0.8)";
      
});
barsClose.addEventListener("click" , () => {
    barsMobil.classList.remove("active-menu")
    bodyColor.style.background = "none";

})
////MOB MENU
/////ACARDION
$('.home').click(function(){
    $('ul').stop().slideUp(500);
    $(this).next().stop().slideToggle(1000)
})
////ACARDION
document.addEventListener("mousemove" , parallax);
function parallax(e){
   this.querySelectorAll('.layer').forEach(layer => {
       const speed = layer.getAttribute('data-speed');

       const x = (window.innerWidth - e.pageX*speed)/100;
       const y = (window.innerHeight - e.pageY*speed)/100;

       layer.style.transform = `translateX(${x}px) translateY(${y}px)`
   })
   console.log(e);
};
////////BUTON

butto.addEventListener("click", () => {
    button.classList.toggle("active-btn")})

    butto1.addEventListener("click", () => {
        button1.classList.toggle("active-btn")})

        butto2.addEventListener("click", () => {
            button2.classList.toggle("active-btn")})

            butto3.addEventListener("click", () => {
                button3.classList.toggle("active-btn")}
                )
                //////BUTON
                // Optional parameters
                let swiper = new swiper('.mySwiper',{
                    direction: 'vertical',
                    loop: true,
                  
                    // If we need pagination
                    pagination: {
                      el: '.swiper-pagination',
                    },
                  
                    // Navigation arrows
                    navigation: {
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev',
                    },
                  
                    // And if we need scrollbar
                    scrollbar: {
                      el: '.swiper-scrollbar',
                    },
});


                                    
