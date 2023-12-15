//ricerca degli artisti

document.addEventListener("DOMContentLoaded", function () {
    const disposizioneBrani = document.querySelector("#searchContent");
    const searchBar = document.querySelector("#searchI");
    //const searchButton = document.querySelector(".searchButton");

    searchBar.addEventListener("input", function (event) {
        event.preventDefault()
        const searchQuery = searchBar.value;
        console.log(searchQuery)

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
            console.log(risultato)
            mostraArtista(risultato.data);
        } catch (error) {
            console.error(error);
        }
    }

    

    function mostraArtista(componitori) {
        disposizioneBrani.innerHTML = "";

        componitori.forEach((componitore) => {
            const cardHTML = `
            <div class="d-flex bg-black justify-content-between align-items-center text-white border-bottom border-secondary px-0" onclick="redirectToAlbumPage(${componitore.album.id})">
            <div class="d-flex align-items-center ">
                <img src="${componitore.album.cover_medium}" alt="${componitore.artist.name}" width="50" height="50" class="me-4">
                <div class="py-1">
                    <p class="mb-0 fw-medium ">${componitore.artist.name}</p>
                    <p class="mb-0 fw-lighter ">${componitore.title}</p>
                </div>
            </div>
            <div class="z-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right text-white" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </div>
        </div>`;



            disposizioneBrani.innerHTML += cardHTML;
        });
    }
});

// Dichiarazione della funzione al di fuori della funzione mostraArtista
function redirectToAlbumPage(trackId) {
    window.location.assign("pag_2_artist.html?id=" + trackId)
    console.log(trackId)
    
}

const mySvg2 = document.getElementById('homeClick');
 mySvg2.addEventListener('click', function() {
     window.location.href = 'pag_1_home.html'; 
 });