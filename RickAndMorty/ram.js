var apiKey = '';


document.addEventListener('DOMContentLoaded', function() {
    const ramImage = document.getElementById('ram-image');
    const ramTitle = document.getElementById('ram-title');
    const ramExplanation = document.getElementById('ram-explanation');

    fetch("https://rickandmortyapi.com/api/character/")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const randomIndex = Math.floor(Math.random() * data.results.length);
            const randomCharacter = data.results[randomIndex];
            const charName = randomCharacter.name;
            const charImage = randomCharacter.image;
            const charSpecies = randomCharacter.species;
            const charStatus = randomCharacter.status;

            ramImage.src = charImage;
            ramTitle.innerHTML = `Name: <span>${charName}</span>`;
            ramExplanation.innerHTML = `Species: <span>${charSpecies}</span><br>Status: <span>${charStatus}</span>`;
        })
        .catch(error => {
            console.error('Error fetching Rick And Morty Info:', error);
            ramTitle.innerText = 'Failed to fetch Rick and Morty info. Please try again later.';
        });
});


// document.addEventListener('DOMContentLoaded', function () {
//     const ramImage = document.getElementById('ram-image');
//     const ramTitle = document.getElementById('ram-title');
//     const ramExplanation = document.getElementById('ram-explanation');

//     fetch('https://rickandmortyapi.com/api/character/')
//         .then(response => response.json())
//         .then(data => {
//             displayRam(data);
//         })
//         .catch(error => {
//             console.error('Error fetching Rick And Morty Info:', error);
//             ramTitle.innerText = 'Failed to fetch Rick and Morty info. Please try again later.';
//         });

//     function displayRam(ramData) {
//         if (ramData.media_type === 'image') {
//             ramImage.src = ramData[results][0][url];
//             console.log(ramImage);
//             ramTitle.innerText = apodData.title;
//             ramExplanation.innerText = apodData.explanation;
//         } else {
//             ramTitle.innerText = 'Rick and Morty character is not an image. Please check again later.';
//         }
//     }
// });
 

// var apiKey = "5d3d03f53ea7cbb83b109be36ae3c7d5";
// const ramImage = document.getElementById('ram-image');
// const ramTitle = document.getElementById('ram-title');
// const ramExplanation = document.getElementById('ram-explanation');



// document.addEventListener('DOMContentLoaded', function(){
//     fetch( "https://rickandmortyapi.com/api/character/").then(res => res.json()).then(
//         data=>{
//            var CharName = data['results'][0]['name']; 
//            var CharImage = data['results'][0]['image']; 
//            var charExplanation = data[''][0]['']
        
//            console.log(CharName);
//            ramTitle.innerHTML = `Name: <span>${CharName}</span>`;
//            ramImage.innerHTML = `Image: <span>${CharImage}</span>`;
//            ramExplanation = `Species: <span>${randomCharacter.species}</span><br>Status: <span>${randomCharacter.status}</span>`

//          }
//     )
// });

// const apiKey = "5d3d03f53ea7cbb83b109be36ae3c7d5";
// const ramImage = document.getElementById('ram-image');
// const ramTitle = document.getElementById('ram-title');
// const ramExplanation = document.getElementById('ram-explanation');

// document.addEventListener('DOMContentLoaded', function() {
//     fetch("https://rickandmortyapi.com/api/character/")
//         .then(res => {
//             if (!res.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return res.json();
//         })
//         .then(data => {
        
//             if (data && data.results && data.results.length > 0) {
//                 const randomIndex = Math.floor(Math.random() * data.results.length);
//                 const randomCharacter = data.results[randomIndex];
//                 ramImage.src = randomCharacter.image;
//                 ramTitle.innerHTML = `Name: <span>${randomCharacter.name}</span>`;
//                 ramExplanation.innerHTML = `Species: <span>${randomCharacter.species}</span><br>Status: <span>${randomCharacter.status}</span>`;
//             } else {
//                 ramTitle.innerText = 'No character data available. Please try again later.';
//             }
//         })
//         .catch(error => {
//             console.error('Error fetching Rick And Morty Info:', error);
//             ramTitle.innerText = 'Failed to fetch Rick and Morty info. Please try again later.';
//         });
// });

