const listaDigimon = document.querySelector("#listaDigimon");
const botonesHeader = document.querySelectorAll(".btn-header");
let URL = "https://www.digi-api.com/api/v1/digimon/";

for (let i = 1; i <= 151; i++) {
    fetch(URL + i)
        .then((response) => response.json())
        .then(data => mostrarDigimon(data))
}

function mostrarDigimon(digi) {

    let digiId = digi.id.toString();
    if (digiId.length === 1) {
        digiId = "00" + digiId;
    } else if (digiId.length === 2) {
        digiId = "0" + digiId;
    }

    const div = document.createElement("div");
    div.classList.add("digimon");
    div.innerHTML=`
        <p class="digimon-id-back">${digiId}</p>
        <div class="digimon-imagen">
            <img src="${digi.images["0"].href}" alt="${digi.name}">
        </div>
        <div class="digimon-info">
            <div class="nombre-contenedor">
                <p class="digimon-id">${digiId}</p>
                <h3 class="digimon-nombre>${digi.name}</h3>
            </div>
            <div class="digimon-tipos">
                <p class="nivel">${digi.levels["0"].level}</p>
                <p class="atributo">${digi.attributes["0"].attribute}</p>
                <p class="tipo">${digi.types["0"].type}</p>
            </div>
        </div>
                        
    
    `;
    listaDigimon.append(div);
    
}    

botonesHeader.forEach(boton => boton.addEventListener("click", (event) => {
    const botonId = event.currentTarget.id;

    listaPokemon.innerHTML = "";

    for (let i = 1; i <= 151; i++) {
        fetch(URL + i)
            .then((response) => response.json())
            .then(data => {

                if(botonId === "ver-todos") {
                    mostrarDigimonList(data);
                } else {
                    const tipos = data.types.map(type => digi.types["0"].type);
                    if (tipos.some(tipo => tipo.includes(botonId))) {
                        mostrarD(data);
                    }
                }

            })
    }
}))