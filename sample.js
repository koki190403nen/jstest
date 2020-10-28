function myfunc(){
  let logo = document.forms.form1.text1.value;
  var myh1 = document.getElementById("myh1");
  let logo2 = Number(logo) + 3;
  myh1.innerHTML = logo2;
}