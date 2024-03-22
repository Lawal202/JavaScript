var apiKey = 'dLEGvD3TyHHySeTTS6BNkSoeoYZ4SRwCibfzJ2VF';

document.addEventListener('DOMContentLoaded', function () {
    const apodImage = document.getElementById('apod-image');
    const apodTitle = document.getElementById('apod-title');
    const apodExplanation = document.getElementById('apod-explanation');

    fetch('https://api.nasa.gov/planetary/apod?api_key=dLEGvD3TyHHySeTTS6BNkSoeoYZ4SRwCibfzJ2VF')
        .then(response => response.json())
        .then(data => {
            displayApod(data);
        })
        .catch(error => {
            console.error('Error fetching NASA APOD:', error);
            apodTitle.innerText = 'Failed to fetch NASA APOD. Please try again later.';
        });

    function displayApod(apodData) {
        if (apodData.media_type === 'image') {
            apodImage.src = apodData.url;
            apodTitle.innerText = apodData.title;
            apodExplanation.innerText = apodData.explanation;
        } else {
            apodTitle.innerText = 'Today\'s APOD is not an image. Please check again later.';
        }
    }
});
 