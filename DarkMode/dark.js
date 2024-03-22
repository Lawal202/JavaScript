// const modeToggleBtn = document.getElementById('toggle');
// // const modeToggleBtn = document.getElementById('toggle2');
// const body = document.body;

// modeToggleBtn.addEventListener('click', function() {
//   body.classList.toggle('dark-mode');
//   body.classList.toggle('light-mode');


//   const isDarkMode = body.classList.contains('dark-mode');
//   localStorage.setItem('darkMode', isDarkMode);
// });

function DarkMode(){

    var myAqua = document.querySelector(".aqua");
    var lightButton = document.querySelector(".btn1");
    var Darkbutton = dpcument.querySelector(".btn2");
    var p = document.querySelector("p");


    myAqua.style.backgroundColor = "Black";
    Darkbutton.style.backgroundColor = "White";
    Darkbutton.style.color = "black";
    lightButton.style.backgroundColor = "black";
    lightButton.style.color = "white";

    p.style.color = "black";
}