var apiKey = "5d3d03f53ea7cbb83b109be36ae3c7d5";


var inputValue = document.querySelector('#in1');

var btn = document.querySelector('#add');

var city = document.querySelector('.citydisplay');

var desc = document.querySelector('#desc');

var temp = document.querySelector('#temp');

var wind = document.querySelector('#wind');

btn.addEventListener('click', function(){
    fetch( "https://api.openweathermap.org/data/2.5/weather?q="+inputValue.value+ "&appid="+apiKey).then(res => res.json()).then(
        data=>{
           var cityName = data['name']; 
           var description = data['weather'][0]['description'];
           var CloudName = data['weather'][0]['main'];
           var temperature = data['main']['temp'];
           var windSpeed = data['wind']['speed'];
           var CountryAb = data['sys']['country'];


           city.innerHTML = `Weather of<span>${cityName}</span>`;
           desc.innerHTML = `Description:<span>${description}</span>`;
           temp.innerHTML = `Temperature:<span>${temp}</span>`;
           wind.innerHTML = `Wind:<span>${windSpeed}</span>`;
           cloudName.innerHTML = `cloudName:<span>${cloudName}</span>`;
           countryAbbrevation.innerHTML = `countryAbbreviation:<span>${countryAbbrevation}</span>`
        }
    )
});




// var apiKey = "5d3d03f53ea7cbb83b109be36ae3c7d5";

// var inputValue = document.querySelector('#cityinput').value; // Moved inputValue declaration before its usage

// var UrlLink = "https://api.openweathermap.org/data/2.5/weather?q=" + inputValue + "&appid=" + apiKey;

// var btn = document.querySelector('#add');

// var city = document.querySelector('.citydisplay');

// var desc = document.querySelector('#desc');

// var temp = document.querySelector('#temp');

// var wind = document.querySelector('#wind');

// btn.addEventListener('click', function () {
//     fetch(UrlLink).then(res => res.json()).then(
//         data => {
//             var cityName = data['name'];
//             var description = data['weather'][0]['description'];
//             var CloudName = data['weather'][0]['main'];
//             var temperature = data['main']['temp'];
//             var windSpeed = data['wind']['speed'];
//             var CountryAb = data['sys']['country'];

//             // Corrected the interpolation syntax
//             city.innerHTML = `Weather of <span>${cityName}</span>`;
//             desc.innerHTML = `Description: ${description}`;
//             temp.innerHTML = `Temperature: ${temperature}`;
//             wind.innerHTML = `Wind Speed: ${windSpeed}`;
//         }
//     ).catch(error => {
//         console.log("Error:", error); // Handle errors if any
//     });
// });
