var btnSignin = document.querySelector("#logar");
var btnSingup = document.querySelector("#cadastrar");

var body = document.querySelector("body");



btnSignin.addEventListener("click", function () {
  body.className = "logar";
});


btnSingup.addEventListener("click",function(){
  body.className = "cadastrar"
})
