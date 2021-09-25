let initialPrice = document.querySelector("#initial-price");
let stockQuantity = document.querySelector("#stock-quantity");
let currentPrice = document.querySelector("#current-price");
let submitBtn = document.querySelector("#submit-button");
let clearBtn = document.querySelector("#clear-button");
let outputText = document.querySelector("#output");


submitBtn.addEventListener("click", submitButtonClickHandler);
clearBtn.addEventListener("click", function () {
    initialPrice.value = "";
    stockQuantity.value = "";
    currentPrice.value = "";
    outputText.innerHTML = "";
    outputText.style = "";
    document.body.style.background = "none";
})


function submitButtonClickHandler() {
    let initialPriceInput = Number(initialPrice.value);
    let stockQuantityInput = Number(stockQuantity.value);
    let currentPriceInput = Number(currentPrice.value);

    //validations :
    // inputs shouldn't be empty
    //if (value not empty){
    //if(value > 0){calculate}
    //}else if(value <0){enter value >0 }
    // else{please enter value}


    if ((initialPrice.value !== "") && (stockQuantity.value !== "") && (currentPrice.value !== "")) {

        console.log("fields are not empty");
        if ((initialPriceInput > 0) && (stockQuantityInput > 0) && (currentPriceInput > 0)) {
            calculateProfitLoss(initialPriceInput, stockQuantityInput, currentPriceInput);
        } else if ((initialPriceInput === 0) || (stockQuantityInput === 0) || (currentPriceInput === 0)) {
            alert("Please enter Values greater than zero.😊")
        } else {
            alert("You have entered a negative number. Please enter Values greater than zero.😊")
        }
    } else {
        alert("Please enter all the three values.😊");
    }
}

function showProfit(profit, profitPercentage) {
    outputText.style.fontSize = "xx-Large"
    outputText.style.backgroundColor = "green";
    outputText.innerHTML = `Yayy!!
    The profit is Rs. ${profit.toFixed(2)} and the profit percentage is ${profitPercentage.toFixed(2)} %. <span>😄</span>`;
}

function showLoss(loss, lossPercentage) {
    outputText.style.fontSize = "xx-Large"
    outputText.style.backgroundColor = "red";
    if (lossPercentage < 50) {
        outputText.innerHTML = `The loss is Rs. ${loss.toFixed(2)} and the loss percentage is ${lossPercentage.toFixed(2)} %.😨`;
    } else {
        document.body.style.background = "grey";
        outputText.innerHTML = `More than 50 percent loss!!!

        The loss is Rs. ${loss.toFixed(2)} and the loss percentage is ${lossPercentage.toFixed(2)} %.😩`;
    }
}

function calculateProfitLoss(initialPriceInput, stockQuantityInput, currentPriceInput) {

    if (currentPriceInput > initialPriceInput) {

        let profit = (currentPriceInput - initialPriceInput) * stockQuantityInput;
        let profitPercentage = ((currentPriceInput - initialPriceInput) / initialPriceInput) * 100;
        showProfit(profit, profitPercentage)

    } else if (currentPriceInput < initialPriceInput) {

        let loss = (initialPriceInput - currentPriceInput) * stockQuantityInput;
        let lossPercentage = ((initialPriceInput - currentPriceInput) / initialPriceInput) * 100;
        showLoss(loss, lossPercentage);

    } else if (currentPriceInput === initialPriceInput) {
        outputText.innerHTML = `No Profit , No Loss 😃!!!`

    }
}