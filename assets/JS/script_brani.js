document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const trackId = urlParams.get("id");
    const libreriaAlbum = document.getElementById('libreriaAlbum');
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
        console.log(data.tracks)
     data.tracks.data.forEach((data) => console.log(data))
        
     
     libreriaAlbum.innerHTML = ""
     libreriaAlbum.innerHTML = `<h2>${data.title}</h2>`;
     data.tracks.data.forEach((data) => {
        const cardHTML = `
        <h2>${data.album.title}</h2>
        <h2>${data.title}</h2>
        <h2>${data.artist.name}</h2>
        <h2>${data.duration}</h2>
        `
        libreriaAlbum.innerHTML += cardHTML
    }
)
});
      /*  for (let i = 0; i < data.data.length; i++) {
            let content = data.data[i];
            const card = document.createElement("div");
            card.classList.add("searchResultBox");
            card.innerHTML = `
                <div class="imgContainer">
                    <img src="${content.album.cover}">
                </div>
                <div class="searchText">
                    <h3><a href="album.html?id=${content.album.id}">${content.title}</a></h3>
                </div>`;
            
            libreriaAlbum.appendChild(card);
       }*/
    });