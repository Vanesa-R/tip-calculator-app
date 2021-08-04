/* Acceso DOM */
const bill = document.getElementById("bill");
const tips = document.querySelectorAll(".tip");
const custom = document.getElementById("custom");
const people = document.getElementById("people");
const warningPeople = document.querySelector(".people__warning");
const tipAmount = document.getElementById("amount");
const tipTotal = document.getElementById("total");
const reset = document.getElementById("reset");

/* Variables funciones */
let valueBill;
let tipSelected;
let customTip;
let numberPeople;
let amount;
let totalTip;


/* OBTENER DATOS */

/* Bill */
bill.addEventListener("input", () => {
       valueBill = parseFloat(bill.value);
       calc();
       states();
       empty();
})

/* Select Tip %*/
tips.forEach(tip => {
       tip.addEventListener("click", (e) => {

              tipSelected = tip.dataset.btnTip / 100;
              calc();
              empty();
              

              /* Estado activado*/
              
              if(tip.classList.contains("tip--selected")){
                     tip.classList.remove("tip--selected");
                     tip.classList.add("tip--unselected");
                 }else{            
                     tips.forEach(t =>{
                         t.classList.remove("tip--selected");
                         custom.value = "";
                     })
                     tip.classList.remove("tip--unselected");
                     tip.classList.add("tip--selected");
                 }
       })
})

custom.addEventListener("input", (e) => {
       customTip = (e.target.value) / 100;
       calc();
       states();
       empty();
})

/* Number of people */
people.addEventListener("input", () => {
       numberPeople = parseInt(people.value);
       calc();
       states();
       empty();
})


/* CALCULAR DATOS E IMPRIMIR */
const calc = () => {

       // Cálculos

       if (tipSelected){
              amount = (valueBill / numberPeople) * tipSelected;
              totalTip = (valueBill / numberPeople) + amount;
       } else {
              amount = (valueBill / numberPeople) * customTip;

              if (customTip) {
                     totalTip = (valueBill / numberPeople) + customTip;
              } else {
                     totalTip = (valueBill / numberPeople);
              }

       }
       
       
       // Impresión de cálculos

       (() => {
              tipAmount.textContent = `$${(amount || 0).toFixed(2)}`;
              tipTotal.textContent = `$${totalTip.toFixed(2)}`;
              
              enabledReset();
       })();
       
}



/* Modificar estado de inputs */

const states = () => {

       /* Bill */
       bill.classList.toggle("--active", bill.value);

       /* Custom Tip*/       
       custom.classList.toggle("--active", custom.value);
       

       /* Number of People */
       if (people.value) {
              people.classList.add("--active");
              people.classList.remove("--warning");

              if  (people.value === "0"){
                     warningPeople.textContent = "Don't be  zero";
                     people.classList.remove("--active");
                     people.classList.add("--warning");

              } else {
                     warningPeople.textContent = "";
              }

       } else {
              people.classList.remove("--active", "--warning");
              warningPeople.textContent = "";
       }


}


/* Deshabilitar reset */
const disabledReset = () => {
       reset.disabled = true;
}

/* Habilitar reset */
const enabledReset = () => {
       reset.disabled = false;
       clean();
}


/* Resetear datos */
const clean = () => {
       if (enabledReset){
             reset.addEventListener("click", () => {
                     bill.value = "";
                     people.value = "";
                     custom.value = "";
                     tips.forEach(tip => {
                            tip.classList.remove("tip--selected");
                            tipSelected = "";
                     })
                     empty(); 
                     states();
             })
       }
}


/* Calculadora sin datos*/
const empty = () => {
       if (bill.value === "" 
              || people.value === ""  || people.value === "0") {

              tipAmount.textContent = `$0.00`;
              tipTotal.textContent= `$0.00`;

              disabledReset();
       }
}
empty();