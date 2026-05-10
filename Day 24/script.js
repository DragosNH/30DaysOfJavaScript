const input = document.querySelector(".input");
const planetsList = document.querySelector("#calculator");
const btn = document.querySelector(".btn");
const container = document.querySelector(".container");
let weight;

const planets = {
    mercury:{
        gravity : 0.38
    },
    venus:{
        gravity : 0.91
    },
    earth:{
        gravity : 1.0
    },
    mars:{
        gravity : 0.38
    },
    jupiter:{
        gravity : 2.34
    },
    saturn:{
        gravity : 0.93
    },
    uranus:{
        gravity : 0.92
    },
    neptune:{
        gravity : 1.12
    }
}


function getPlanet() {

    Object.keys(planets).forEach((planet) => {

        const option = document.createElement("option");

        option.value = planet;
        option.textContent = planet.charAt(0).toUpperCase() + planet.slice(1);

        planetsList.appendChild(option);

    });

}

getPlanet();

const containerAssets = txt => {
    let newTxt = document.createElement("p");
    newTxt.textContent = `${input.value} kg on Earth are ${txt} kg on ${planetsList.value.charAt(0).toUpperCase() + planetsList.value.slice(1)}`;
    container.appendChild(newTxt);
}

btn.addEventListener("click", () => {
    container.innerHTML = "";
    weight = Number(input.value) * planets[planetsList.value].gravity;
    containerAssets(weight);
})