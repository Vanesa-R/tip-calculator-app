const bill = document.getElementById("bill");
let percents = document.querySelectorAll(".item__input");
let custom = document.getElementById("insertpercent");
let totalPercent;
const people = document.getElementById("people");

const CalcAmount = document.getElementById("amount");
const CalcTotal = document.getElementById("total");


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
              
              custom.addEventListener("keyup", (e) => {
                     let customPercent = (e.target.value) / 100;
                     totalPercent = valueBill * customPercent;
              })
              

              /* Capturar las personas e imprimir totales*/
              people.addEventListener("keyup", () => {
                     let numberPeople = people.value;
                     let amount =  totalPercent / numberPeople;
  
                      CalcAmount.innerHTML = `$${amount.toFixed(2)}`;
                      CalcTotal.innerHTML = `$${totalPercent.toFixed(2)}`;
 
               })          
              })
       })
})
