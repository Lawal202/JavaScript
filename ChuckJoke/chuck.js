// var apiKey = "https://api.chucknorris.io/jokes/random";


document.addEventListener('DOMContentLoaded', function () {
    const jokeContainer = document.getElementById('joke-container');
    const getJokeBtn = document.getElementById('joke1');

    getJokeBtn.addEventListener('click', function () {
        fetch('https://api.chucknorris.io/jokes/random')
            .then(response => response.json())
            .then(data => {
                displayJoke(data.value);
            })
            .catch(error => {
                console.error('Error fetching Chuck Norris joke:', error);
                jokeContainer.innerText = 'Failed to fetch Chuck Norris joke. Please try again later.';
            });
    });

    function displayJoke(joke) {
        jokeContainer.innerText = joke;
    }
});
