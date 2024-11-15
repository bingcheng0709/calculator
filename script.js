const display = document.getElementById('calculator-display');

// 清除顯示
function clearDisplay() {
    display.value = '';
}

// 刪除最後一個字元
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// 添加數字
function appendNumber(number) {
    display.value += number;
}

// 添加運算符號
function appendOperator(operator) {
    const lastChar = display.value.slice(-1);
    // 防止連續輸入多個運算符號
    if ('+-*/.'.includes(lastChar) && '+-*/.'.includes(operator)) return;
    display.value += operator;
}

// 計算結果
function calculate() {
    try {
        display.value = eval(display.value) || '';
    } catch (error) {
        alert('無效的輸入');
    }
}
