const bill = document.getElementById("bill");
const tip5 = document.getElementById("5percent");
const tip10 = document.getElementById("10percent");
const tip15 = document.getElementById("15percent");
const tip25 = document.getElementById("25percent");
const tip50 = document.getElementById("5percent");
const custom = document.getElementById("insertpercent");


bill.addEventListener("keydown", (e) => {

       const value = bill.value;
     
       tip5.addEventListener("click", (e) => {
             const total = value * 1.05;
       })


       tip10.addEventListener("click", (e) => {
              const total = value * 1.10;
        })


       tip15.addEventListener("click", (e) => {
              const total = value * 1.15;
       })

       tip25.addEventListener("click", (e) => {
              const total = value * 1.25;
       })

       tip50.addEventListener("click", (e) => {
              const total = value * 1.50;
         })



})


