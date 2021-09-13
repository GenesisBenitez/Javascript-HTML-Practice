let id = document.getElementById("clicker");
let output = document.getElementById("output");
id.addEventListener("click",function(){
    console.log("Hello");
    output.innerHTML = "Hello";
})