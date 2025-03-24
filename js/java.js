$(document).ready(function(){
    $('.carousel-01').owlCarousel({
         loop:true,
         margin:10,
         nav:true,
         responsive:{
             0:{
                 items:1
             },
             600:{
                 items:2
             },
             1000:{
                 items:4
             }
         }
   });
 
   $('.carousel-02').owlCarousel({
     loop:true,
     margin:10,
     nav:true,
     responsive:{
         0:{
             items:1
         },
         600:{
             items:2
         },
         1000:{
             items:3
         }
     }
 });
 
 })
 
 