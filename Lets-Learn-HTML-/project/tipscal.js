document.getElementById('calculateButton').addEventListener('click', function() {
    // Get the bill amount and tip percentage
    let billAmount = parseFloat(document.getElementById('billAmount').value);
    let tipPercentage = parseFloat(document.getElementById('tipPercentage').value);

    // Validate inputs
    if (isNaN(billAmount) || isNaN(tipPercentage)) {
        alert('Please enter valid numbers for bill amount and tip percentage.');
        return;
    }

    // Calculate tip and total amount
    let tipAmount = (billAmount * tipPercentage) / 100;
    let totalAmount = billAmount + tipAmount;

    // Display tip and total amount
    document.getElementById('tipAmount').innerText = 'Tip Amount: $' + tipAmount.toFixed(2);
    document.getElementById('totalAmount').innerText = 'Total Amount: $' + totalAmount.toFixed(2);
});
