let buttonCalculator = document.querySelector("button");
let result = document.querySelector(".test-operations");
let resultRepayment = document.querySelector(".test-operations-repayment");
let resultInterest = document.querySelector(".test-operations-interest");
let mortageAmount = document.querySelector(".amount");
let mortageTerm = document.querySelector(".term");
let interestRate = document.querySelector(".interest");
let ratioRepayment = document.querySelector(".repayment");
let ratioInterest = document.querySelector(".interest-only");

//inicializando variable global
let i,n, B, D, operation, totalPayment = 0;

//formateo de moneda
//uso de API Intl.NumberFormat
let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "GBP"
});


buttonCalculator.addEventListener("click", () => {
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

