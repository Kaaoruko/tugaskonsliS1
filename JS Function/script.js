alert("Javascript money converter (only from IDR to USD, EUR, JPY  )");


let moneyValue   = parseInt(prompt("Your money value"));
let exchangeRate = prompt("Convert to  USD, EUR, JPY");
let result = 0;

function moneyConvert(moneyValue, exchangeRate){
    if(exchangeRate == "USD"){
        result = moneyValue * 0.000065;
        console.log("From", moneyValue, "Rupiah (Rp.) to", result, "US Dollar ($)");
        document.writeln("From ", moneyValue, " Rupiah (Rp.) to ", result, " US Dollar ($)");
    }else if (exchangeRate == "EUR"){
        result = moneyValue * 0.000058;
        console.log("From", moneyValue, "Rupiah (Rp.) to", result, "Europe Euro (€)");
        document.writeln("From ", moneyValue, " Rupiah (Rp.) to ", result, " Europe Euro (€) ");
    }else if (exchangeRate == "JPY"){
        result = moneyValue * 0.0094;
        console.log("From", moneyValue, "Rupiah (Rp.) to", result, "Japanese Yen (¥)");
        document.writeln("From ", moneyValue, " Rupiah (Rp.) to ", result, " Japanese Yen (¥)");
    }
    else {
        console.info("Unlisted currency to convert");
    }
}

moneyConvert(moneyValue, exchangeRate);