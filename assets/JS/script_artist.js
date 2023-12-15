document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const trackId = urlParams.get("id");
    const libreriaAlbum = document.getElementById('libreriaAlbum');
    const eleTracksHit = document.querySelector('#tracksHit')
    const eleTracksLove = document.querySelector('#tracksLove')
    const eleTracksLoveMob = document.querySelector('#tracksLoveMob')
    let i = 1
    console.log(trackId)
    
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${trackId}/`, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'df6ea74f78msh1312afd4ca059d2p13c34ejsn03bcf4451057',
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
        }
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        
     //data.tracks.data.forEach((data) => console.log(data))

        console.log(data.cover_big)
     libreriaAlbum.innerHTML = `<div class="r-bg-img r-bg-size d-flex flex-column justify-content-md-between justify-content-end" style="background-image: url('${data.artist.picture_xl}'); " >
     


     
     <div class="justify-content-between d-none d-md-flex py-2 px-1">
         <div>
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left text-light-emphasis" viewBox="0 0 16 16">
                 <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
             </svg>
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right " viewBox="0 0 16 16">
                 <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
             </svg>
         </div>
         <div id="banner-artist" class="rounded-pill d-flex bg-black justify-content-center align-items-center">
             <img src="assets/imgs/main/image-12.jpg" alt="..." class="rounded-circle me-1 " width="20" height="20">
             <p class="text-white  mb-0 fw-medium me-2">Artista...</p>
             <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="currentColor" class="bi bi-caret-left-fill text-white me-2" viewBox="0 0 16 16">
                 <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
             </svg>
         </div>    
     </div>  
     <!-- artista -->
     <div id="rIdArtist" class="pb-4 ps-3">
         <div>
             <div class="d-flex">
                 <div class="bg-info rounded-circle me-1 d-none d-md-inline-block">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check text-white ms-1" viewBox="0 0 16 16">
                         <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                     </svg>
                 </div>
                 <p class="text-white fw-medium mb-0 d-none d-md-inline-block">Artista verificato</p>
             </div>
             
             <h1 class="text-white fw-medium  my-md-1">${data.artist.name}</h1>
             <div class="d-flex align-items-center">
                 <p class="text-white  mb-0 fw-medium d-none d-md-inline-block ">4938209438 ascoltatori mensili</p>
             </div>
         </div>
     </div>
 </div>`;
    
    eleTracksLoveMob.innerHTML=`<div class="row fw-lighter align-items-center text-grid mb-4 d-md-none">
    <div class="col-12 col-md-7 d-flex align-items-center">
        <img src="${data.cover_small}" alt="" width="60" height="60" class="rounded-circle me-3">
        <div>
            <p class="text-white fw-lighter mb-0 fs-6">Brani che ti piacciono</p>
            <p class="mb-0">8 brani di ${data.artist.name}</p>
        </div>  
    </div>
    <div class="col-2 text-end ">
    </div>
    <div class="col-2 text-end">
    </div>
</div>`

    eleTracksLove.innerHTML= `<div class="row fw-lighter align-items-center text-grid mb-3">
    <div class="col-6 col-md-7 d-flex align-items-center">
        <img src="${data.cover_small}" alt="" width="60" height="60" class="rounded-circle me-3">
        <div>
            <p class="text-white fw-medium mb-2 fs-6">Brano</p>
            <p class="mb-0">${data.artist.name}</p>
        </div>  
    </div>
    <div class="col-2 text-end ">
    </div>
    <div class="col-2 text-end">
    </div>
    <div class="col-1 d-md-none me-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-three-dots r-icon-color custom-svg-left d-md-none" viewBox="0 0 16 16">
            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
        </svg>
    </div>
</div>`

    data.tracks.data.forEach((data) => {
        console.log(data.title)
        const cardHTML = `
        <div class="row fw-lighter align-items-center text-grid mb-3 " onclick="redirectToAlbumPage(${trackId})">
                                <div class="col-6 col-md-7 d-flex align-items-center">
                                    <p class=" mb-0">${i}</p>
                                    <div class="d-flex align-items-center " style="white-space: nowrap; text-overflow: ellipsis; overflow: hidden;" >
                                        <img src="${data.album.cover_small}" alt="${data.title}" width="40" height="40" class="mx-3">
                                        <p class="text-white fw-medium mb-0 fs-6">${data.title}</p>
                                    </div>  
                                </div>
                                <div class="col-2 text-end ">
                                    <p class="mb-0 d-none d-md-inline-block">694.578</p>
                                </div>
                                <div class="col-2 text-end">
                                    <p class="mb-0 d-none d-md-inline-block">${data.duration}</p>
                                </div>
                                <div class="col-1 d-md-none me-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-three-dots r-icon-color custom-svg-left d-md-none" viewBox="0 0 16 16">
                                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                                    </svg>
                                </div>
                            </div>
        
        `
        eleTracksHit.innerHTML += cardHTML
        i++
    }
)   

});
})

function redirectToAlbumPage(trackIdAlbum) {
    window.location.assign("pag_3_album.html?id=" + trackIdAlbum)
    console.log(trackIdAlbum)
}


/*document.addEventListener("DOMContentLoaded", function () {
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
});*/
