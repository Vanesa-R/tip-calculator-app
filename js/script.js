/* DOM */
const bill = document.getElementById("bill");
const percents = document.querySelectorAll(".btn__tip");
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


/* Capturar valor factura*/
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


                                                 
 /* Capturar tipo de propina (porcentaje) y calcular propina*/

let valuePercent;
let totalPercent;
let select;

percents.forEach(percent =>  {

        percent.addEventListener("click", (e) => {
              valuePercent = e.target.id;
             
              
              /* Cálculos según propina seleccionada */
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
                     default:
                            break;
              }

              if (percent){
                     percent.style.backgroundColor = "hsl(172, 67%, 45%)";
                     percent.style.color = "hsl(183, 100%, 15%)";
              }

       })
       
})

let customPercent;
custom.addEventListener("keyup", (e) => {
       customPercent = (e.target.value) / 100;
       totalPercent = valueBill * customPercent;

       if (custom){
              custom.style.backgroundColor = "hsl(189, 41%, 97%)";
              custom.style.border = "1px solid hsl(172, 67%, 45%)"
       }
})


/* Capturar número de  personas e imprimir totales*/
let numberPeople;
people.addEventListener("keyup", () => {

       /* Capturar número de personas*/
       numberPeople = people.value;

        /* Cálculo*/
       let amount =  totalPercent / numberPeople;

       /* Estado del input*/
       if (people.value) {
              people.style.border = "2px solid hsl(172, 67%, 45%)";
       } else {
              people.style.border = "none";
       }
       
       

       /* Impresión de datos, estilos y reseteo*/
       CalcAmount.textContent = `$${amount.toFixed(2)}`;
       CalcTotal.textContent = `$${totalPercent.toFixed(2)}`;
       
       reset.disabled = false;

       if (reset.disabled == false){
              reset.addEventListener("click", (e) => {
                     bill.value = "";
                     people.value = "";
                     bill.style.border = "none";
                     people.style.border = "none";
                     empty();
              })
       }

})             