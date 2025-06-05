class CurrencyConverter {
    static async fetchRate(){
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const data = await response.json();
        return data.rates.BDT;
    }
    static async USDtoBDT(amount){
        const rate = await CurrencyConverter.fetchRate();
        const bdt = amount * rate;
        return bdt;
    }
    static async BDTtoUSD(amount){
        const rate = await CurrencyConverter.fetchRate();
        const usd = amount / rate;
        return usd;
    }
}

const amountUSD = 100;
const amountBDT = 10000;
const bdt = await CurrencyConverter.USDtoBDT(amountUSD);
console.log(`${amountUSD} USD is equal to ${bdt} BDT`);


const usd = await CurrencyConverter.BDTtoUSD(amountBDT);
console.log(`${amountBDT} BDT is equal to ${usd} USD`);
