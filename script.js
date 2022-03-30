const calculatorScreen = document.querySelector('.calculator-screen')
const updateScreen = (numbers) => {
    calculatorScreen.value = numbers
}

let prevNum = '';
let calculationOperator ='';
let currentNum = '0';
const numbers = document.querySelectorAll(".number");
const inputNumber = (numbers) => {
    if(currentNum === '0'){
        currentNum = numbers
    }else{
        currentNum += numbers
    }
}
numbers.forEach((numbers) => {
    numbers.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNum)
    })
})


 const inputOperator = (operator) => {
        if(calculationOperator === ''){
            prevNum = currentNum
        }
        calculationOperator = operator
        currentNum = '0'
}
const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

const calculate = () => {
    let result = ''
    switch(calculationOperator){
        case '+':
            result = parseFloat(prevNum) + parseFloat(currentNum)
            break
        case '-':
            result = parseFloat(prevNum) - parseFloat(currentNum)
            break
        case '*':
            result = parseFloat(prevNum) * parseFloat(currentNum)
            break
        case '/':
            result = parseFloat(prevNum) / parseFloat(currentNum)
            break
        case '%':
            result = parseFloat(prevNum) / 100
            break
        default:
            return           
    }
    currentNum = result
    calculationOperator = ''
}

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNum)
})

const clearAll = () => {
    prevNum = ''
    calculationOperator = ''
    currentNum = '0'
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNum)
})

const decimal = document.querySelector('.decimal')

inputDecimal = (dot) => {
    if(currentNum.includes('.')){
        return
    }
    currentNum += dot
}

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNum)
})