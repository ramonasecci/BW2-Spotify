//ricerca degli artisti

document.addEventListener("DOMContentLoaded", function () {
    const disposizioneBrani = document.querySelector(".libreriaBrani");
    const searchBar = document.querySelector(".searchBar");
    const searchButton = document.querySelector(".searchButton");

    searchButton.addEventListener("click", function () {
        const searchQuery = searchBar.value;

        if (searchQuery !== "") {
            cercaArtista(searchQuery);
        }
    });

    async function cercaArtista(artista) {
        const url = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${artista}`;
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
            mostraArtista(risultato.data);
        } catch (error) {
            console.error(error);
        }
    }

    function mostraArtista(componitori) {
        disposizioneBrani.innerHTML = "";

        componitori.forEach((componitore) => {
            const cardHTML = `
                <div class="card mb-3" style="max-width: 400px;" onclick="redirectToAlbumPage(${componitore.album.id})">
                    <img src="${componitore.album.cover_medium}" alt="${componitore.artist.name}" class="img-fluid">
                    <div class="card-body">
                        <h5 class="card-title">${componitore.artist.name}</h5>
                        <p class="card-text">${componitore.title}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <small class="text-muted">${componitore.id}</small>
                        </div>
                    </div>
                </div>`;

//artist.album.title album
console.log(componitore.album.id)

            disposizioneBrani.innerHTML += cardHTML;
        });
    }
});

// Dichiarazione della funzione al di fuori della funzione mostraArtista
function redirectToAlbumPage(trackId) {
    window.location.assign("pag_4_brani.html?id=" + trackId)
    console.log(trackId)
}