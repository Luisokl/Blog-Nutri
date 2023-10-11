// https://sujeitoprogramador.com/rn-api/?api=posts

let listElement = document.querySelector("#app");

let posts = [];

function appNutri() {

    fetch("https://sujeitoprogramador.com/rn-api/?api=posts")
    .then((response) => response.json())
    .then((responseJson) => {
        console.log(responseJson)
    })
    .catch(() => {
        alert("Deu algo errado!")
    });

    console.log(response);
}