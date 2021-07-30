/* DOM */
const bill = document.getElementById("bill");
const tips = document.querySelectorAll(".tip");
const custom = document.getElementById("custom");
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


/* SECCIÓN BILL*/
let valueBill;
bill.addEventListener("keyup", () => {
       valueBill = bill.value;

       /* Estado del input*/
       if (bill.value) {
              bill.style.border = "2px solid hsl(172, 67%, 45%)";
       } else {
              bill.style.border = "none";
       }
})


                                                 
 /* SECCIÓN SELECT TIP*/

let tipSelect;
let totalTip;

tips.forEach(tip =>  {

        tip.addEventListener("click", (e) => {
              tipSelect = e.target.id;           
              
              /* Cálculos según propina seleccionada */
              switch(tipSelect){
                     case "5percent": 
                            totalTip = valueBill * 0.05;
                            break;
                     case "10percent":
                            totalTip = valueBill * 0.10;
                            break;
                     case "15percent":
                            totalTip = valueBill * 0.15;
                            break;
                     case "25percent":
                            totalTip = valueBill * 0.25;
                            break;
                     case "50percent":
                            totalTip = valueBill * 0.50;
                            break;
                     default:
                            break;
              }

              /* Estado de propina seleccionada*/
             if (tip){
                    tip.classList.toggle("tip--active");
             }
       
       })
       
})

let customTip;
custom.addEventListener("keyup", (e) => {
       customTip = (e.target.value) / 100;
       totalTip = valueBill * customTip;

       if (custom){
              custom.style.backgroundColor = "hsl(189, 41%, 97%)";
              custom.style.border = "1px solid hsl(172, 67%, 45%)"
       }
})


/* SECCIÓN NUMBER OF PEOPLE e impresión */
let numberPeople;
people.addEventListener("keyup", () => {

       /* Capturar número de personas*/
       numberPeople = people.value;

        /* Cálculo*/
       let amount =  totalTip / numberPeople;

       /* Estado del input*/
       if (people.value) {
              people.style.border = "2px solid hsl(172, 67%, 45%)";
       } else {
              people.style.border = "none";
       }
       
       

       /* Impresión de datos, estilos y reseteo*/
       CalcAmount.textContent = `$${amount.toFixed(2)}`;
       CalcTotal.textContent = `$${totalTip.toFixed(2)}`;
       
       reset.disabled = false;

       if (reset.disabled == false){
              reset.addEventListener("click", (e) => {
                     bill.value = "";
                     people.value = "";
                     bill.style.border = "none";
                     people.style.border = "none";
                     tips.forEach(tip => {
                            tip.classList.remove("tip--active");
                     })
                     empty();
              })
       }

})             