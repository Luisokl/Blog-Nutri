// https://sujeitoprogramador.com/rn-api/?api=posts

let listElement = document.querySelector("#app");

let posts = [];

function appNutri() {

    fetch('https://sujeitoprogramador.com/rn-api/?api=posts')
    .then((response) => response.json())
    .then((responseJson) => {
        posts = responseJson;

        posts.map((item) => {
            let liElement = document.createElement('li');
            let titleElement = document.createElement('h2');
            let imgElement = document.createElement('img');
            let descriptionElement = document.createElement('p');

            let textTitle = document.createTextNode(item.titulo);
            titleElement.appendChild(textTitle);
            liElement.appendChild(titleElement);

            imgElement.src = item.capa;
            liElement.appendChild(imgElement);

            let description = document.createTextNode(item.subtitulo);
            descriptionElement.appendChild(description);
            liElement.appendChild(descriptionElement);

            
            listElement.appendChild(liElement)

        })
    })


}



appNutri();