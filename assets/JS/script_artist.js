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
        const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${artista}`;
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
            console.log(risultato);
            mostraTracce(risultato.data);
        } catch (error) {
            console.error(error);
        }
    }

    function mostraTracce(tracce) {
        disposizioneBrani.innerHTML = "";

        tracce.forEach((brano) => {
            const cardHTML = `
                <div class="card mb-3" style="max-width: 400px;" onclick="dettaglioBrano(${brano.id})">
                    <img src="${brano.album.cover_medium}" alt="${brano.title}" class="img-fluid">
                    <div class="card-body">
                        <h5 class="card-title">${brano.title}</h5>
                        <p class="card-text">${brano.artist.name}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <small class="text-muted">${brano.album.title}</small>
                        </div>
                    </div>
                </div>`;

            disposizioneBrani.innerHTML += cardHTML;
        });
    }

    async function dettaglioBrano(branoId) {
        // Implementa la logica per visualizzare i dettagli di un singolo brano
        console.log(`Dettagli del brano con ID ${branoId}`);
    }
});
