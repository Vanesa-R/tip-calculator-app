const bill = document.getElementById("bill");
const people = document.getElementById("people");
const CalcTotal = document.getElementById("total");
const CalcAmount = document.getElementById("amount");

const tip5 = document.getElementById("5percent");
const tip10 = document.getElementById("10percent");
const tip15 = document.getElementById("15percent");
const tip25 = document.getElementById("25percent");
const tip50 = document.getElementById("5percent");
const custom = document.getElementById("insertpercent");



bill.addEventListener("keyup", () => {
       const bills = bill.value;

       tip15.addEventListener("click", () => {
             const total =  bills * 0.15;
             
             people.addEventListener("keyup", (e) => {

                    const numberPeople = people.value;
                     let amount = total / numberPeople;
       
                     CalcAmount.innerHTML = amount.toFixed(2);
                     CalcTotal.innerHTML = total.toFixed(2);

             })

       })

/*
       tip10.addEventListener("click", (e) => {
              return total = value * 1.10;
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

         */
})


