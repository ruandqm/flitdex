function setM1() {
    document.getElementById('m1').style.left = 'calc(60% - 1.9em)'
}
function setM2() {
    document.getElementById('m2').style.left = 'calc(60% - 1.9em)'
}
function setM3() {
    document.getElementById('m3').style.left = 'calc(35% + 1.9em)'
}
function setM4() {
    document.getElementById('m4').style.left = 'calc(60% - 1.9em)'
}
function setM5() {
    document.getElementById('m5').style.left = 'calc(70% - 1.9em)'
}
function setM6() {
    document.getElementById('m6').style.left = 'calc(50% - 1.9em)'
}
function setM7() {
    document.getElementById('m7').style.left = 'calc(60% - 1.9em)'
}

setM1()
setM2()
setM3()
setM4()
setM5()
setM6()
setM7()

const descriptionText = document.getElementById('descriptionText')
const editButton = document.getElementById('edit')

function descriptionSave() {
    let edit = prompt("Informe uma descrição")
    localStorage.setItem("description", edit)
    descriptionSet()
}

function descriptionSet() {
    let text = localStorage.getItem("description")
    if (text === null) {
        descriptionText.innerHTML = "Um garoto do interior do Ceará aficionado por tecnologia e inovação e que busca evoluir cada dia mais nessa área. Técnico em Informática formado pela Escola Estadual de Educação Profissional Dr. Salomão Alves de Moura, em Aracoiaba - CE. Desenvolvedor Web Front-End junior na Lucrei Cashback. Estudante de Desenvolvimento Web com React JS pela Flit Educação. Apaixonado por Cristo, por sua igreja, pelo seu evangelho e por sua Redenção. Quero ajudar pessoas através da programação."
    }
    else {
        descriptionText.innerHTML = text
    }
}
descriptionSet()

editButton.addEventListener('click', descriptionSave)
