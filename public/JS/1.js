"use strict";
// Создать калькулятор на странице, полность на TS
// Страница:
// - действия только между 2мя числами 
// - выбор действия из выпадающего списка(+ - * / **)
// - калькулятор высчитывает результат в живом времени при любых изменениях 
// - если получилось посчитать результат - на странице добрый смайл 
// - если нет - грустный(когда при вычислении получаем NaN)
// - вывод сбоку истории действия, каждое с новой строки в виде "5 + 7 = 12" (когда результат получить не получилось - в историю не добавляем)
const firstInput = document.getElementById("first-value");
const secondInput = document.getElementById("second-value");
const historyDiv = document.getElementById("history");
const result = document.getElementById("result");
const operation = document.getElementById("operation");
firstInput.addEventListener('change', calculate);
secondInput.addEventListener('change', calculate);
function calculate() {
    let num1 = parseFloat(firstInput.value);
    let num2 = parseFloat(secondInput.value);
    if (isNaN(num1) || isNaN(num2)) {
        result.textContent = "Result: 😡";
        result.style.color = "darkred";
    }
    else {
        if (operation.value === "+") {
            result.style.color = "darkgreen";
            result.textContent = `Result: 😊${num1 + num2}`;
            historyDiv.innerHTML += `<p>${num1}+${num2}=${num1 + num2}\n</p>`;
            firstInput.value = "";
            secondInput.value = "";
        }
        else if (operation.value === "-") {
            result.style.color = "darkgreen";
            result.textContent = `Result: 😊${num1 - num2}`;
            historyDiv.innerHTML += `<p>${num1}-${num2}=${num1 - num2}\n</p>`;
            firstInput.value = "";
            secondInput.value = "";
        }
        else if (operation.value === "*") {
            result.style.color = "darkgreen";
            result.textContent = `Result: 😊${num1 * num2}`;
            historyDiv.innerHTML += `<p>${num1}*${num2}=${num1 * num2}\n</p>`;
            firstInput.value = "";
            secondInput.value = "";
        }
        else if (operation.value === "/") {
            if (num2 !== 0) {
                result.style.color = "darkgreen";
                result.textContent = `Result: 😊${num1 / num2}`;
                historyDiv.innerHTML += `<p>${num1}/${num2}=${num1 / num2}\n</p>`;
                firstInput.value = "";
                secondInput.value = "";
            }
            else {
                result.textContent = "Result: 😡";
                result.style.color = "darkred";
            }
        }
    }
}
