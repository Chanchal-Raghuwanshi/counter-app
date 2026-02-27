const head = document.getElementById("heading")
const btn = document.getElementById("btn")

let count = 0;

btn.addEventListener('click' , () =>{
     
     count = count + 1;

     head.textContent = count;

})