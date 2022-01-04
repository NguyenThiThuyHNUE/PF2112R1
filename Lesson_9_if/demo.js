function Check() {
    let number1 = document.getElementById("num1").value;
    let number2 = document.getElementById("num2").value;
    let number3 = document.getElementById("num3").value;
    let result = "";
    if (number1 > number2) {
        if (number1 > number3) {
            result = number1 + " lớn nhất";
        } else {
            result = number3 + " lớn nhất";
        }
    } else if (number2 > number3) {
                result = number2 + " lớn nhất";
            } else {
                result = number3 + " lớn nhất";
    }

    document.getElementById('result').innerHTML = result;
}