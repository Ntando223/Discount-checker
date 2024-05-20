
document.getElementById('checkButton').addEventListener('click', checkEligibility);

function checkEligibility() {
    const age = parseInt(document.getElementById('age').value);
    const isMember = document.getElementById('membership').checked;
    let resultMessage = '';

    if (isNaN(age)) {
        resultMessage = 'Please enter a valid age.';
    } else if (age >= 65) {
        resultMessage = 'You are eligible for a Senior Discount.';
    } else if (age >= 18 && isMember) {
        resultMessage = 'You are eligible for a Member Discount.';
    } else {
        resultMessage = 'You are not eligible for a discount.';
    }

    document.getElementById('result').textContent = resultMessage;
}


