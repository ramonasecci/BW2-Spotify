const eleBuonaseraCont = document.querySelector('#buonaseraCont')
const eleCioChePiaceCont = document.querySelector('#cioChePiaceCont')
const eleContViola = document.querySelector('#contViola')
const eleButtonNextL = document.querySelector('#buttonNextL')
const eleButtonNextR = document.querySelector('#buttonNextR')
const eleMobCardCont = document.querySelector('#mobCardCont')
const eleSearchDesk = document.querySelector('#searchI')


eleSearchDesk.addEventListener('focus', function () {
    eleContViola.classList.remove('d-md-block');
    eleContViola.classList.add('d-none');

});

eleSearchDesk.addEventListener('blur', function () {
    eleContViola.classList.remove('d-none');
    eleContViola.classList.add('d-md-block');
});



function iR (){
    let i = Math.floor((Math.random())*24)
    return i
}



fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=data',{
method: 'GET',
	headers: {
		'X-RapidAPI-Key': '59e67a6eabmsh8793e7d3d78d8b6p1f6996jsncac2980c7706',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
	}
})
    .then((response) => response.json())
    .then((data) => {
        console.log(data)

        showTitle()

        eleButtonNextR.addEventListener('click', (e) => {
            showTitle()
        })

        eleButtonNextL.addEventListener('click', (e) => {
            showTitle()
        })

        function showTitle(){
            let bannerI = data.data[iR()]
        eleContViola.innerHTML = `<div class="row no-gutters">
        <div class="col-md-6 col-lg-5 col-xl-5 col-xxl-3">
            <img
                src="${bannerI.album.cover_medium}"
                class="card-img ms-2 my-3 p-3"
                alt="${bannerI.artist.name}"
            />
        </div>
        <div class="col-md-6 col-lg-7">
            <div class="card-body ps-0 mt-2">
                <h6 class="h6card mb-3">ALBUM</h6>
                <button type="button" class="nascondi">
                    NASCONDI ANNUNCI
                </button>
                <h2 class="card-title mb-1 h2home">
                    ${bannerI.title}
                </h2>
                <p class="card-text mb-3">${bannerI.artist.name}</p>
                <p class="card-text">
                    Ascolta il nuovo singolo di ${bannerI.artist.name}
                </p>
                <div class="d-inline">
                    <button class="bplay my-0">Play</button>
                    <button class="bsalva">Salva</button>
                    <button class="binfo">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            class="bi bi-three-dots"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>`

        }
        
        






        let htmlContent = ``
        let htmlLoveContent = ``
        let htmlContentM = ``
        let contentPage 
        let contentPage1

        for (let i=0; i<6;i++){
            let iRd = iR()
            contentPage= data.data[iRd]
            console.log(iRd)

            htmlContent += `<div
            class="col-6 col-xl-4 ps-0 mt-sm-1 mt-md-3"
        >
            <div
                class="card"
                style="
                    background-color: #2c2c2c;
                    color: white;
                "
            >
                <div class="row m-0">
                    <div class="col-4 ps-0">
                        <img
                            src="${contentPage.artist.picture_small}"
                            class="card-img"
                            alt="${contentPage.artist.name}"
                        />
                    </div>
                    <div
                        class="col-8 d-flex align-items-center px-0"
                    >
                        <div
                            class="card-body emily ps-0"
                        >
                            <p class="card-title">
                                ${contentPage.title}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
        }

        for(let i=0;i<5;i++){
            let iRdL = iR()
            contentPage1 = data.data[iRdL]

        htmlLoveContent += 
        `<div
        class="card col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2 p-3 g-3"
        style="background-color: #171717"
        >
        <img
            src="${contentPage1.album.cover_medium}"
            class="card-img-top"
            alt="asd"
            style="
                box-shadow: 0px 5px 30px
                    rgba(0, 0, 0, 2);
                position: relative;
                width: 100%;
                height: 70%;
            "
        />
        <div
            class="card-body text-light px-0"
            style="background-color: #171717"
        >
            <h6 class="card-title fw-bold">
                ${contentPage1.artist.name}
            </h6>
            <p class="card-text text-secondary">
                ${contentPage1.title}
            </p>
        </div>
        </div>`


        htmlContentM += `<div
        class="card text-light mb-3 rounded rounded-4"
        style="background-color: #242424"
    >
        <div class="row" >
            <div class="col-6 p-0">
                <div>
                    <img
                        src="${contentPage1.album.cover_medium}"
                        class="card-img my-4 w-75"
                        alt="viola"
                        style="
                            box-shadow: 0px 0px 10px
                                rgba(214, 214, 214, 0.349);
                            position: relative;
                            margin-left: 13% !important;
                        "
                    />
                </div>
            </div>
            <div
                class="col-6 mb-5 p-0"
                style="margin-left: -10px"
            >
                <div class="card-body ps-0 mt-2">
                    <h6 class="mb-2 text-secondary">
                        Playlist
                    </h6>
                    <h4 class="card- mb-1">
                      ${contentPage1.title}
                    </h4>
                </div>
            </div>
        </div>
        <div
            class="d-flex justify-content-between pb-3 ms-4 mx-lg-5 mt-2"
        >
            <div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="#1fd662"
                    class="bi bi-heart-fill"
                    viewBox="0 0 16 16"
                >
                    <path
                        fill-rule="evenodd"
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                    />
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-three-dots-vertical ms-5"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
                    />
                </svg>
            </div>
            <div class="d-flex">
                <p class="text-secondary mb-0 mt-1 me-4">
                    16 brani
                </p>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    class="bi bi-play-circle-fill me-3"
                    viewBox="0 0 16 16"
                >
                    <path
                        fill="#1b1b1b"
                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5"
                    />
                    <path
                        fill="white"
                        d="M5.5 4.5L11.5 8l-6 3.5z"
                    />
                </svg>
            </div>
        </div>
    </div>`
        }
        

        
        eleMobCardCont.innerHTML = htmlContentM
        eleBuonaseraCont.innerHTML = htmlContent
        eleCioChePiaceCont.innerHTML = htmlLoveContent

    })

    const mySvg = document.getElementById('searchM');
     mySvg.addEventListener('click', function() {
     window.location.href = 'pag_search_mobile.html'; 
 });

