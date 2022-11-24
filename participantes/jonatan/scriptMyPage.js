const btnEdit = document.getElementById("btnEdit");
const myBio = document.getElementById("myBio");

function editBio() {
    window.localStorage.setItem(myBio.id, window.prompt('Digite sua bio.'));
}

function loadMyBioLS(){
    myBio.textContent = window.localStorage.getItem('myBio');
    //console.log(myBio.textContent);
}

btnEdit.addEventListener('click', editBio);
window.addEventListener('load', loadMyBioLS);
