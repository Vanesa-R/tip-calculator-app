const bill = document.getElementById("bill");

const percents = document.querySelectorAll(".btn__tip");
const custom = document.getElementById("custom");
let totalPercent;
const people = document.getElementById("people");

const CalcAmount = document.getElementById("amount");
const CalcTotal = document.getElementById("total");

const reset = document.getElementById("reset");


/* Calculadora sin datos*/

const empty = () => {
       if (bill.value === "" ||  people.value ===""){

              CalcAmount.textContent = `$0.00`;
              CalcTotal.textContent= `$0.00`;
       
              reset.disabled = true;
              
       }
}
empty();



/* Capturar valor factura*/
bill.addEventListener("keyup", () => {
       let valueBill = bill.value;


              
       /* Capturar el porcentaje y calcular propina*/
       percents.forEach(percent => {
              percent.addEventListener("click", (e) => {
                 let valuePercent = e.target.id;

                 switch(valuePercent){
                     case "5percent":
                            totalPercent = valueBill * 0.05;
                            break;
                     case "10percent":
                            totalPercent = valueBill * 0.10;
                            break;
                     case "15percent":
                            totalPercent = valueBill * 0.15;
                            break;
                     case "25percent":
                            totalPercent = valueBill * 0.25;
                            break;
                     case "50percent":
                            totalPercent = valueBill * 0.50;
                            break;
                 }    
              })
       })

       custom.addEventListener("keyup", (e) => {
              let customPercent = (e.target.value) / 100;
              totalPercent = valueBill * customPercent;
       })
       

       /* Capturar las personas e imprimir totales*/
       people.addEventListener("keyup", () => {
              let numberPeople = people.value;
              let amount =  totalPercent / numberPeople;

               CalcAmount.textContent = `$${amount.toFixed(2)}`;
               CalcTotal.textContent = `$${totalPercent.toFixed(2)}`;

               reset.disabled = false;


               if (reset.disabled == false){

                     reset.addEventListener("click", (e) => {
              
                            bill.value = "";
                            people.value = "";

                            empty();

                     })
              }

        })             

})

