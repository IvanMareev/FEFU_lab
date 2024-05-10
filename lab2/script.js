let result_content_first_set = '<input type="number" placeholder="основания трапеции 1"  class="input" id="v1" /><br><input type="number" placeholder="основания трапеции 2"  class="input" id="v2"/><br><input type="number" placeholder="боковую сторона"  class="input" id="v3"/><br><img src="first_set.png"/>'
let result_content_second_set = '<input type="number" placeholder="основания трапеции 1"  class="input" id="v1"/><br><input type="number" placeholder="основания трапеции 2"  class="input" id="v2"/><br><input type="number" placeholder="угол межу основанием и боковой стороной"  class="input" id="v3"/><br><img src="second_set.png"/>'
let num_set = 0;


document.getElementById("inputForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const inputType = document.getElementById("inputType").value;
    const img = document.getElementById("pict_figure");

    let result_content;

    if (inputType === "1") {
        result_content = result_content_first_set
        num_set = 1;
    } else if (inputType === "2") {
        result_content = result_content_second_set
        num_set = 2;
    }

    document.getElementById("result").innerHTML = result_content;
    let input_v1 = document.getElementById("v1");
    let input_v2 = document.getElementById("v2");
    let input_v3 = document.getElementById("v3");
    console.log(input_v1 , input_v2 , input_v3)

    if (input_v1 || input_v2 || input_v3) {
        [input_v1, input_v2, input_v3].forEach((input) => {
            input.addEventListener("focus", function () {
                input.className = 'input';
                error_message.innerText = ""
            });
        });
    } else {
        console.error("One or more input elements not found.");
    }
});


let empty_valid = function (inputs) {
    console.log(inputs, num_set)
    if (num_set === 0) {
        error_message.innerText = "Значения не могу быть пыстыми"
        error_message.className = "error"
        return true
    }
    inputs.map((input) => {
        if (num_set === 0)
            return true

        if (input.value === '') {
            if (input)
                input.className = 'error'
            error_message.innerText = "Значения не могу быть пыстыми"
            error_message.className = "error"
            return true
        } else {
            error_message.innerText = ""
            error_message.className = "error"
            input.className = ""
            return false
        }
    })
}

function calc() {
    let error_message = document.getElementById("error_message");
    let cornerIsChecked = document.getElementById("corner").checked;
    let heightIsChecked = document.getElementById("height").checked;
    let diagonalIsChecked = document.getElementById("diagonal").checked;
    let input_v1 = document.getElementById("v1")
    let input_v2 = document.getElementById("v2")
    let input_v3 = document.getElementById("v3")

    if (empty_valid([input_v1, input_v2, input_v3])) {
        console.log("s")
        return
    }

    let firstValue = parseFloat(input_v1.value);
    let secondValue = parseFloat(input_v2.value);
    let thirdValue = parseFloat(input_v3.value);

    let calculateValue = 0;
    let corner = '';
    let height = '';
    let diagonal = '';


    let checked_zero_value = function (value) {
        console.log("zn", value)
        if (value <= 0 || isNaN(value)) {
            error_message.innerText = "Не существует трапеции с такими значениями"
            return 0
        } else {
            return 1
        }
    }
    let checked_corner = function (corner) {
        if (corner >= 180 || corner <= 0) {
            error_message.innerText = "Не существует трапеции с такими значениями"
            return 0
        } else {
            return 1
        }
    }



    if (!(cornerIsChecked || heightIsChecked || diagonalIsChecked)) {
        document.getElementById("result_calc").innerHTML = "Выберете > 1 вычисляемого значения"
        return
    }

    if (document.getElementById("inputType").value === "1") {
        if (cornerIsChecked) {
            calculateValue = Math.abs(firstValue - secondValue) / (2 * thirdValue);
            if (checked_zero_value(calculateValue)) {
                error_message.innerText = ""
                corner = `угол между диа-ми: ${calculateValue.toFixed(4)}`;
            }
        }
        if (heightIsChecked) {
            let d = (firstValue + secondValue) / 2;
            calculateValue = Math.sqrt(thirdValue * thirdValue - d * d);
            if (checked_zero_value(calculateValue)) {
                error_message.innerText = ""
                height = `высота: ${calculateValue.toFixed(4)}`;
            }
        }
        if (diagonalIsChecked) {
            let diagonal1 = Math.sqrt(Math.pow(thirdValue, 2) + Math.pow((secondValue - firstValue) / 2, 2));
            let diagonal2 = Math.sqrt(Math.pow(thirdValue, 2) + Math.pow((secondValue + firstValue) / 2, 2));
            if (checked_zero_value(diagonal1) && checked_zero_value(diagonal2)) {
                error_message.innerText = ""
                diagonal = `d1:${diagonal1.toFixed(2)}<br>d2:${diagonal2.toFixed(4)}`;
            }
        }
    }

    if (document.getElementById("inputType").value === "2") {
        if (checked_corner(input_v3.value)) {
            if (cornerIsChecked) {
                calculateValue = Math.atan(Math.abs(firstValue - secondValue) / (2 * Math.tan(thirdValue))) * (180 / Math.PI);
                if (checked_zero_value(calculateValue)) {
                    error_message.innerText = ""
                    corner = `угол между диа-ми: ${calculateValue.toFixed(4)}`;
                }
            }
            if (heightIsChecked) {
                calculateValue = (firstValue - secondValue) / (2 * Math.tan(thirdValue));
                if (checked_zero_value(calculateValue)) {
                    error_message.innerText = ""
                    height = `высота: ${calculateValue.toFixed(4)}`;
                }
            }
            if (diagonalIsChecked) {
                let calculateValue = (firstValue - secondValue) / (2 * Math.tan(thirdValue));
                let diagonal1 = Math.sqrt(Math.pow(firstValue, 2) + Math.pow(calculateValue, 2));
                let diagonal2 = Math.sqrt(Math.pow(secondValue, 2) + Math.pow(calculateValue, 2));
                if (checked_zero_value(diagonal1) && checked_zero_value(diagonal2)) {
                    error_message.innerText = ""
                    diagonal = `d1:${diagonal1.toFixed(2)}<br>d2:${diagonal2.toFixed(4)}`;
                }
            }
        }
    }

    document.getElementById("result_calc").innerHTML = `${corner}<br>${height}<br>${diagonal}`;
}





