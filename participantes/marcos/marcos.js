const barProgressMarkerOne = document.querySelector('.markerOne')
barProgressMarkerOne.setAttribute('style', 'left: 70%')

const barProgressMarkerTwo = document.querySelector('.markerTwo')
barProgressMarkerTwo.setAttribute('style', 'left: 55%')

const barProgressMarkerThree = document.querySelector('.markerThree')
barProgressMarkerThree.setAttribute('style', 'left: 30%')

const barProgressMarkerFour = document.querySelector('.markerFour')
barProgressMarkerFour.setAttribute('style', 'left: 65%')

const barProgressMarkerFive = document.querySelector('.markerFive')
barProgressMarkerFive.setAttribute('style', 'left: 85%')

const barProgressMarkerSix = document.querySelector('.markerSix')
barProgressMarkerSix.setAttribute('style', 'left: 50%')

const barProgressMarkerSeven = document.querySelector('.markerSeven')
barProgressMarkerSeven.setAttribute('style', 'left: 55%')

const editar = document.querySelector("#edit");

editar.addEventListener("click", function() {   

    const newText = document.createTextNode(prompt("Atualize a descrição!"))
    alterarTexto(newText);
    console.log('função 1')
});

function alterarTexto (parametroText){
    console.log('entrou na 2')
    const texto = document.querySelector("#text")
    const descricion = document.querySelector("#bio")
    const h4 = document.querySelector("#bio h4")

    descricion.removeChild(h4)

    texto.appendChild(parametroText);

    
}

