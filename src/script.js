let buttonCalculator = document.querySelector("button");
let result = document.querySelector(".test-operations");
let resultRepayment = document.querySelector(".test-operations-repayment");
let resultInterest = document.querySelector(".test-operations-interest");
let mortageAmount = document.querySelector(".amount");
let mortageTerm = document.querySelector(".term");
let interestRate = document.querySelector(".interest");
let ratioRepayment = document.querySelector(".repayment");
let ratioInterest = document.querySelector(".interest-only");
let noEmpty = document.querySelector(".container-no-empty");
let yesEmpty = document.querySelector(".container-empty");
let clearAll = document.getElementById("clear-all");
let mensajeError1 = document.querySelector(".me-1")
let mensajeError2 = document.querySelector(".me-2")
let mensajeError3 = document.querySelector(".me-3")
let div1 = document.querySelector(".div1")
let div2 = document.querySelector(".div2")
let div3 = document.querySelector(".div3")
let span1 = document.querySelector(".span-1");
let span2 = document.querySelector(".span-2");
let span3 = document.querySelector(".span-3");
let input = document.querySelectorAll(".item");


//inicializando variable global
let i, n, B, D, operation, totalPayment = 0;

//formateo de moneda
//uso de API Intl.NumberFormat
let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "GBP"
});


clearAll.addEventListener("click", () => {
    noEmpty.style.display = "none"
    yesEmpty.style.display = "block"
    return;
})

buttonCalculator.addEventListener("click", (e) => {
    e.preventDefault();

    if (sinLlenarCampo() == true) {
        noEmpty.style.display = "block"
        yesEmpty.style.display = "none"
    } else {
        return;
    }


    noEmpty.style.display = "block"
    yesEmpty.style.display = "none"

    //calculo de interes
    i = (parseFloat(interestRate.value) / 100) / 12;
    //total de pagos
    n = parseFloat(mortageTerm.value) * 12;

    //C=A[B/D]
    B = i * Math.pow((1 + i), n);

    D = Math.pow((1 + i), n) - 1;

    //depurar variable mortageAmount para aceotar ;a coma ","
    // ->  Number(mortageAmount.value.replace(/,/g,""))

    operation = Number(mortageAmount.value.replace(/,/g, "")) * (parseFloat(B) / parseFloat(D));
    result.textContent = formatter.format(operation);
})

//calculo de total a pagar
ratioRepayment.addEventListener("click", () => {
    totalPayment = operation * n;
    resultRepayment.textContent = formatter.format(totalPayment);
})

//calcullo de itereses a pagar
ratioInterest.addEventListener("click", () => {
    let totalInterest = totalPayment - Number(mortageAmount.value.replace(/,/g, ""));
    resultInterest.textContent = formatter.format(totalInterest);
})

//LO SE, SE PUDE OPTIMIZAR, PERO NO SE ME HA OCURRIDO ALGO MAS RAPIDO

function sinLlenarCampo() {
    if (mortageAmount.value.trim() === "") {
        span1.setAttribute("style", "background-color: red");
        div1.setAttribute("style", "border: solid 1.3px red");
        mensajeError1.style.display = "block";

    }else if ( mortageTerm.value.trim() === ""){
        span2.setAttribute("style", "background-color: red");
        div2.setAttribute("style", "border: solid 1.3px red");
        mensajeError2.style.display = "block";
    }else if(interestRate.value.trim() === "") {
        span3.setAttribute("style", "background-color: red");
        div3.setAttribute("style", "border: solid 1.3px red")
        mensajeError3.style.display = "block";
        return false;
    } else {
        span1.setAttribute("style", "background-color: ");
        span2.setAttribute("style", "background-color: ");
        span3.setAttribute("style", "background-color: ");
        div1.setAttribute("style", "border: solid 1.3px ")
        div2.setAttribute("style", "border: solid 1.3px ")
        div3.setAttribute("style", "border: solid 1.3px ")
        mensajeError1.style.display = "none"
        mensajeError2.style.display = "none"
        mensajeError3.style.display = "none"
        return true
    }
}

mortageAmount.addEventListener("input", () => {
    if (mortageAmount.value.trim() != "" || mortageTerm.value.trim() === "" || interestRate.value.trim() === "") {
        span1.setAttribute("style", "background-color: ");
        div1.setAttribute("style", "border: solid 1.3px ")
        mensajeError1.style.display = "none"
    } else {
        span1.setAttribute("style", "background-color: red");
        div1.setAttribute("style", "border: solid 1.3px red")
        mensajeError1.style.display = "block"
    }
})

mortageTerm.addEventListener("input", () => {
    if (mortageTerm.value.trim() != "" || mortageTerm.value.trim() === "" || interestRate.value.trim() === "") {
        span2.setAttribute("style", "background-color: ");
        div2.setAttribute("style", "border: solid 1.3px ")
        mensajeError2.style.display = "none"
    } else {
        span2.setAttribute("style", "background-color: red");
        div2.setAttribute("style", "border: solid 1.3px red")
        mensajeError2.style.display = "block"
    }
})

interestRate.addEventListener("input", () => {
    if (interestRate.value.trim() != "" || mortageTerm.value.trim() === "" || interestRate.value.trim() === "") {
        span3.setAttribute("style", "background-color: ");
        div3.setAttribute("style", "border: solid 1.3px ")
        mensajeError3.style.display = "none"
    } else {
        span3.setAttribute("style", "background-color: red");
        div3.setAttribute("style", "border: solid 1.3px red")
        mensajeError3.style.display = "block"
    }
})
