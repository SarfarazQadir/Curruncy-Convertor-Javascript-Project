
const amountInput = document.getElementById('amount');
const sourceCurrencySelect = document.getElementById('sourceCurrency');
const targetCurrencySelect = document.getElementById('targetCurrency');
const resultDisplay = document.getElementById('result');


const conversionRates = {
    USD: {
        EUR: 0.85,
        GBP: 0.73,
        JPY: 111.20,
        CAD: 1.27,
    },
    EUR: {
        USD: 1.18,
        GBP: 0.86,
        JPY: 130.89,
        CAD: 1.48,
    },
    GBP: {
        USD: 1.38,
        EUR: 1.16,
        JPY: 152.22,
        CAD: 1.73,
    },
    JPY: {
        USD: 0.009,
        EUR: 0.008,
        GBP: 0.007,
        CAD: 0.011, 
    },
    CAD: {
        USD: 0.79,
        EUR: 0.68,
        GBP: 0.58,
        JPY: 88.11, 
    }
};


function convertCurrency() {
    const amount = parseFloat(amountInput.value);
    const sourceCurrency = sourceCurrencySelect.value;
    const targetCurrency = targetCurrencySelect.value;

    if (isNaN(amount)) {
        resultDisplay.textContent = 'Please enter a valid numeric amount.';
        return;
    }

    if (!conversionRates[sourceCurrency] || !conversionRates[sourceCurrency][targetCurrency]) {
        resultDisplay.textContent = 'Invalid currency selection.';
        return;
    }

    const convertedAmount = amount * conversionRates[sourceCurrency][targetCurrency];
    resultDisplay.textContent = `${amount} ${sourceCurrency} = ${convertedAmount.toFixed(2)} ${targetCurrency}`;
}
