const nextArrow = document.getElementById('nextArrow')
const backArrow = document.getElementById('backArrow')
const img = document.getElementById('image')
const caption = document.getElementById('name')
const link = document.getElementById('link')
const img1 = './images/david.jpg'
const img2 = './images/jonatan.jpg'
const img3 = './images/leandro.jpg'
const img4 = './images/marcos.jpg'
const img5 = './images/ruan.jpg'
const href = './participantes/'

const images = [img1, img2, img3, img4, img5]
const names = ['David', 'Jonatan', 'Leandro', 'Marcos', 'Ruan']
const links = ['./participantes/david/david.html', './participantes/jonatan/jonatan.html', './participantes/leandro/leandro.html', './participantes/marcos/marcos.html', './participantes/ruan/ruan.html']
let currentImage = 0

function next() {
    currentImage++
    if (currentImage === images.length) {
        currentImage = 0
    }
    img.src = images[currentImage]
    caption.textContent = names[currentImage]
    link.href = links[currentImage]
}

function back() {
    currentImage--
    if (currentImage < 0) {
        currentImage = 4
    }
    img.src = images[currentImage]
    caption.textContent = names[currentImage]
    link.href = links[currentImage]
}

nextArrow.addEventListener('click', next)
backArrow.addEventListener('click', back)
