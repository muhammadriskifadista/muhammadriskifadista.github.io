function myFunction() {
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
    document.getElementsByClassName("logo")[0].classList.toggle("responsive");
}
function validasi() {
    var username = document.forms["sign in"]["username"].value;
    var password = document.forms["sign in"]["password"].value;
    if (username == "085130308165" && password == "agritawan") {
        return true;} 
    else {
        alert("No Telepon atau Kata Sandi anda salah");
        alert("Akun free No Telepon = 085130308165 Kata Sandi = agritawan");
        return false;}
}