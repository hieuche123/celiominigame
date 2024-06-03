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

function generateDifferentNumber(userNumber) {
    var min = 1; // Số nhỏ nhất trong khoảng ngẫu nhiên
    var max = 100; // Số lớn nhất trong khoảng ngẫu nhiên
    var newNumber;
    userNumber = parseInt(userNumber);

    // Tạo số ngẫu nhiên và kiểm tra không trùng với số người dùng nhập
    do {
        newNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (newNumber === userNumber);

    return newNumber;
}