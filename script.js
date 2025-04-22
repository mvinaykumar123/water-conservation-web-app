// Water usage calculator
document.getElementById('waterForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get input value
    const gallons = parseFloat(document.getElementById('gallons').value);
    
    if (!isNaN(gallons)) {
        const result = (gallons * 30).toFixed(2); // Estimate monthly usage
        document.getElementById('result').textContent = `Your estimated monthly water usage is ${result} gallons.`;
    } else {
        document.getElementById('result').textContent = "Please enter a valid number.";
    }
});
