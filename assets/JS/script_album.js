document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const albumId = urlParams.get('id');
    const eleImgContentA = document.querySelector('#titleMain')
    let eleTracksContent = document.querySelector('#tracksContent')
    //const libreriaAlbum = document.getElementById('libreriaAlbum');
    console.log(albumId)
    
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${albumId}/`, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'df6ea74f78msh1312afd4ca059d2p13c34ejsn03bcf4451057',
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
        }
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        eleImgContentA.innerHTML = ` <div class="me-2 row">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-down custom-svg-left text-white d-md-none col-2" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
        </svg>
        <!-- immagine album -->
        <div class="col-8 col-md-12" id="imgContentA">
        <img src="${data.cover_medium}" alt="..." class="img-alb-size"> 
        </div>
        <div class="col-2 d-md-none"></div>
    </div>
    <div class="me-5 d-flex flex-column justify-content-md-end">
        <p class="text-white fw-medium mb-0 d-none d-md-inline-block">ALBUM</p>
        <h1 class="text-white fw-medium  my-md-1">${data.title}</h1>
        <div  id="dscAlbum" class="d-flex align-items-center">
            <img src="assets/imgs/main/image-12.jpg" alt="..." class="rounded-circle me-1 " width="15" height="15">
            <p class="text-white  mb-0 fw-medium">${data.artist.name} <span class="d-none d-md-inline">• ${data.release_date} • ${data.nb_tracks} brani</span> <span class="text-secondary d-none d-md-inline">53 min 20 sec</span></p>
                   
        </div>
    </div>
    <p class="text-secondary d-md-none mb-0">Album • ${data.release_date}</p>  `

    let tracks = data.tracks.data


        for (let i = 0; i < tracks.length; i++) {
            console.log(tracks[i])
            eleTracksContent.innerHTML += `    <div class="row fw-lighter align-items-center text-grid mb-3">
            <div class="col-6 col-md-7 d-flex align-items-center">
                <p class="me-3 mb-0 d-none d-md-flex">${i+1}</p>
                <div>
                    <p class="text-white fw-medium mb-0 fs-6">${tracks[i].title}</p>
                    <p class="mb-0">${tracks[i].artist.name}</p>
                </div>  
            </div>
            <div class="col-2 text-end ">
                <p class="mb-0 d-none d-md-inline-block">694.578</p>
            </div>
            <div class="col-2 text-end">
                <p class="mb-0 d-none d-md-inline-block">${tracks[i].duration}</p>
            </div>
            <div class="col-1 d-md-none me-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-three-dots r-icon-color custom-svg-left d-md-none" viewBox="0 0 16 16">
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                </svg>
            </div>
        </div>      `
        }
    });

    const mySvg = document.getElementById('homeClick');
    mySvg.addEventListener('click', function() {
     window.location.href = 'pag_1_home.html'; 
    });







});