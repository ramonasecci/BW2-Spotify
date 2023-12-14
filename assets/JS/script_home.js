document.addEventListener("DOMContentLoaded", function () {
    const disposizioneAlbums = document.querySelector(".libreriaAlbums");
    const searchBar = document.querySelector(".searchBar");

    searchBar.addEventListener("input", function () {
        const searchQuery = searchBar.value;

        if (searchQuery !== "") {
            cercaAlbums(searchQuery);
        }
    });

    async function cercaAlbums(query) {
        const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${query}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'df6ea74f78msh1312afd4ca059d2p13c34ejsn03bcf4451057',
                'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const risultato = await response.json();
            const shuffledAlbums = estrazioneRandom(risultato.data);
            mostraAlbums(shuffledAlbums);
        } catch (error) {
            console.error(error);
        }
    }

    function mostraAlbums(albums) {
        const album = albums[0];

        disposizioneAlbums.innerHTML = `
            <div class="card mb-3" style="max-width: 400px;">
                <img src="${album.album.cover_medium}" alt="${album.title}" class="img-fluid">
                <div class="card-body">
                    <h5 class="card-title">${album.title}</h5>
                    <p class="card-text">${album.artist.name}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-primary" onclick="window.location.href='modifica.html?id=${album.id}'">
                                Play
                            </button>
                        </div>
                        <small class="text-muted">${album.id}</small>
                    </div>
                </div>
            </div>`;
    }

    function estrazioneRandom(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    cercaAlbums();
});