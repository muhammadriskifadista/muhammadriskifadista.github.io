function myFunction() {
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
    document.getElementsByClassName("logo")[0].classList.toggle("responsive");
}
    $('.scroll').on('click', function(e){
        
        var tujuan = $(this).attr('href');
        
        var elemenTujuan = $(tujuan);
        
        
        $('body').animate({
           scrollTop: elemenTujuan.offset().top - 150 
        }, 1000);
        
        e.preventDefault();
    })