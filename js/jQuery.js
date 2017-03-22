$(document).ready(function() {
    var overlay = $('#overlay'); 
    var open_modal = $('.open_modal'); 
    var close = $('.modal_close, #overlay'); 
    var modal = $('.modal_div'); 
     open_modal.click( function(event){
         event.preventDefault(); 
         var div = $(this).attr('href');
         console.log(div);
         overlay.fadeIn(400, 
             function(){ 
                 $(div)
                     .css('display', 'block') 
                     .animate({opacity: 1, top: '50%'}, 200); 
         });
     });

     close.click( function(){ 
            modal
             .animate({opacity: 0, top: '45%'}, 200, 
                 function(){ 
                     $(this).css('display', 'none');
                     overlay.fadeOut(400);
                 }
             );
     });
});

$("#tv_60").click(function(){
    $("#choosenTarrif").attr("placeholder","Телебачення 60грн/міс");
});
$("#internet_40").click(function(){
    $("#choosenTarrif").attr("placeholder","Інтернет 10Мбіт/с 40грн/міс");
});
$("#internet_80").click(function(){
    $("#choosenTarrif").attr("placeholder","Інтернет 100Мбіт/с 80грн/міс");
});
$("#tv-internet_80").click(function(){
    $("#choosenTarrif").attr("placeholder","ТБ+Інтернет 10Мбіт/с 80грн/міс");
});
$("#tv-internet_120").click(function(){
    $("#choosenTarrif").attr("placeholder","ТБ+Інтернет 100Мбіт/с 120грн/міс");
});