
let b1=document.getElementById("b1");
let q;
let price;

function check1()
{
   q=document.getElementById("numItem1").value;
   price=9.99*q;
   alert(`Great!  Order of ${q} items is received, total price is $${price.toFixed(2)}`);
    
}

function check2()
{
   q=document.getElementById("numItem2").value;
   price=14.99*q
   alert(`Great!  Order of ${q} items is received, total price is $${price}`);
}

function check3()
{
   q=document.getElementById("numItem3").value;
   price=19.99*q;
   alert(`Great!  Order of ${q} items is received, total price is $${price}`);
}
console.log("HI")

function navbarShow() {
   let navbar = document.getElementById("navbarV");
   navbar.classList.toggle("show");
}