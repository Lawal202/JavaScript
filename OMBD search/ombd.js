document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const movieInfo = document.getElementById('movie-info');

    searchBtn.addEventListener('click', function () {
        const searchTerm = searchInput.value.trim();
        if (searchTerm === '') {
            alert('Please enter a movie title');
            return;
        }

        const apiKey = 'c237027d'; // Replace 'YOUR_API_KEY' with your actual OMDb API key
        const url = `https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if (data.Response === 'False') {
                    movieInfo.innerHTML = `<p>${data.Error}</p>`;
                } else {
                    const title = data.Title;
                    const year = data.Year;
                    const plot = data.Plot;
                    const poster = data.Poster;
                    
                    movieInfo.innerHTML = `
                        <h2>${title} (${year})</h2>
                        <img src="${poster}" alt="${title} Poster" style="max-width: 200px;">
                        <p>${plot}</p>
                    `;
                }
            })
            .catch(error => {
                console.error('Error fetching movie data:', error);
                movieInfo.innerHTML = '<p>Failed to fetch movie data. Please try again later.</p>';
            });
    });
});
