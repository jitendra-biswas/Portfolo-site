var side = document.querySelector(".side-nav")
var btn = document.querySelector("#bar")
var check = 0
btn.addEventListener("click",function(){
  if(check == 0){
    side.style.display = "block"
    console.log("hellow")
    check = 1
  }
  else{
    side.style.display = "none"
    console.log("hellow")
    check = 0
  }
})