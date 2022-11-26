const btnEdit = document.getElementById("btnEdit");
const myBio = document.getElementById("myBio");
const marker1 = document.getElementById("marker1");
const marker2 = document.getElementById("marker2");
const marker3 = document.getElementById("marker3");
const marker4 = document.getElementById("marker4");
const marker5 = document.getElementById("marker5");
const marker6 = document.getElementById("marker6");
const marker7 = document.getElementById("marker7");

function editBio() {
    window.localStorage.setItem(myBio.id, window.prompt('Digite sua bio.'));
    loadMyBioLS();
}

function loadMyBioLS(){
    myBio.textContent = window.localStorage.getItem('myBio');
}

function editStatus(){
    marker1.style.left = '70%';
    marker2.style.left = '60%';
    marker3.style.left = '50%';
    marker4.style.left = '70%';
    marker5.style.left = '50%';
    marker6.style.left = '60%';
    marker7.style.left = '40%';
}

btnEdit.addEventListener('click', editBio);
window.addEventListener('load', loadMyBioLS);
window.addEventListener('load', editStatus);