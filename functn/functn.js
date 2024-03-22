// function test() {
//     document.getElementById('demo').innerHTML = "How are you";
// }

 function add() {
     const number1 = document.getElementById('num1').value;
     const number2 = document.getElementById('num2').value;

//     // console.log(+number1 + +number2);

     const result = document.getElementById('demo');

     result.innerHTML = +number1 + +number2
 }

 function minus() {
    
     const number1 = document.getElementById('num1').value;
     const number2 = document.getElementById('num2').value;

//     // console.log(+number1 + +number2);

     const result = document.getElementById('demo');

     result.innerHTML = +number1 - +number2
 }

 function multi() {
    
    const number1 = document.getElementById('num1').value;
     const number2 = document.getElementById('num2').value;

//     // console.log(+number1 + +number2);

     const result = document.getElementById('demo');

    result.innerHTML = +number1 * +number2
 }

function division() {
    
    const number1 = document.getElementById('num1').value;
    const number2 = document.getElementById('num2').value;

    // console.log(+number1 + +number2);

    const result = document.getElementById('demo');

    result.innerHTML = +number1 / +number2
}