let ten = document.getElementById("ten_btn");
let twy = document.getElementById("twenty_btn");
let dred = document.getElementById("dred_btn");
let number = document.getElementById("number");





ten.addEventListener("click", tenFunction);

function tenFunction(){
    
    number.textContent = Math.floor(Math.random() * 11);
}

twy.addEventListener("click", twyFunction);

function twyFunction(){
    
    number.textContent = Math.floor(Math.random() * 21);
}


dred.addEventListener("click", dredFunction);

function dredFunction(){
    
    number.textContent = Math.floor(Math.random() * 101);
}















