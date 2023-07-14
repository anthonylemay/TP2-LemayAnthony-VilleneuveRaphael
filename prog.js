
console.log('proot');

const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('boutonPrecedent');
const nextBtn = document.getElementById('boputtonSuivant');
const images = ['img/img_car_1.png', 'img/img_car_2.png', 'img/img_car_3.png', 'img/img_car_4.png', 'img/img_car_5.png'];
let indexActif = 0;

function imageEnCours(index) {
    const image = images[index];
    carousel.innerHTML = `<img src="${image}" alt="Image ${index + 1}" class="h-400 w-300">`;
}

function imagePrecedente() {
    indexActif = (indexActif - 1 + images.length) % images.length;
    imageEnCours(indexActif);
}

function nextImage() {
    indexActif = (indexActif + 1) % images.length;
    imageEnCours(indexActif);
}

prevBtn.addEventListener('click', imagePrecedente);
nextBtn.addEventListener('click', nextImage);

// Afficher la première image par défaut
imageEnCours(indexActif);