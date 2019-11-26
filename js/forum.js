function myFunction() {
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
    document.getElementsByClassName("logo")[0].classList.toggle("responsive");
}

$(document).ready(function() {
     $(".jawab").click(function(){
         $(".jawab1").toggle(500);
         $(".tampil").toggle(500);
         $(".jawab2").css("display","none");
     });
     $(".tampil").click(function(){
         $(".jawab2").toggle(500);
     });
});