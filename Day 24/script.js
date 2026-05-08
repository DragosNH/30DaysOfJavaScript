const input = document.querySelector(".input");
const planetsList = document.querySelector("#calculator");
const btn = document.querySelector(".btn");

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