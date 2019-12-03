function myFunction() {
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
    document.getElementsByClassName("logo")[0].classList.toggle("responsive");
}
function validasi()
    {
        var nama=document.forms["myform"]["username"].value;
        var tlp=document.forms["myform"]["tlp"].value;
        var password=document.forms["myform"]["password"].value;
        var repassword=document.forms["myform"]["repassword"].value;
        var numbers=/^[0-9]+$/;
        if (nama=="")
          {
          alert("Nama tidak boleh kosong !");
          return false;
          };
	    if (tlp=="")
	      {
	      alert("No Telepon tidak boleh kosong !");
	      return false;
	      };
	    if (!tlp.match(numbers))
          {
          alert("Mana ada No Telepon pakai huruf???");
          return false;
          };
        if (password=="")
          {
          alert("Kata Sandi tidak boleh kosong !");
          return false;
          };
        if (password != repassword)
          {
          alert("Masukkan lagi Kata Sandi dengan benar !");
          return false;
          };
     }