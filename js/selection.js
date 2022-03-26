//mypractice
Cookies.set('selectionsite', 'true', { expires: 7 })
var myCookie = Cookies.get('selectionsite'); 
console.log(myCookie); //to test that its working -it worked -returned 'true' 


window.onload = function (){
  if(document.cookie.length !=0){
    var nameValueArray = document.cookie.split("=");
    document.body.style.backgroundColor = nameValueArray[1];
    document.getElementById("colorTheme").value = nameValueArray[1];
  }
}
function setColorCookie() {
var selectedColor = document.getElementById("colorTheme").value;
if (selectedColor != "Select Color") {
  document.body.style.backgroundColor = selectedColor;
  document.cookie = "color=" + selectedColor + ";expires=Fri, 15 April 2022 01:00:00 UTC;";
}
}