function transformNumber() {
    var userNumber = document.getElementById('userNumber').value;
    var resultElement = document.getElementById('result');

    if (userNumber === "") {
        resultElement.textContent = "Vui lòng nhập một số.";
        return;
    }

    var transformedNumber = generateDifferentNumber(userNumber);
    resultElement.textContent = "Số đã chuyển đổi của bạn là: " + transformedNumber;
}

function generateDifferentNumber(number) {
    var newNumber = parseInt(number) + 1;
    if (newNumber == number) {
        newNumber++;
    }
    return newNumber;
}
