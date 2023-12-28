// Tableau d'objets représentant chaque image et text du carousel
const slides = [
    {
        image: "./assets/images/slideshow/slide1.jpg",
        tagLine: "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        image: "./assets/images/slideshow/slide2.jpg",
        tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        image: "./assets/images/slideshow/slide3.jpg",
        tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        image: "./assets/images/slideshow/slide4.png",
        tagLine: "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];
// Index de l'affichage du slider actuelle
let currentSlide = 0;

// Sélection des éléments HTML const (ne bouge jamais)
const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dotsContainer = document.querySelector(".dots");

function showSlide(slideIndex) { // déclare la fonction showSlide / (slideIndex) cible sur quel slide on ce trouve
	// Met à jour l'image et le texte
    bannerImg.src = slides[slideIndex].image; // ici on met a jour l'image par le billet du DOM.image
    bannerText.innerHTML = slides[slideIndex].tagLine;// ici on met a jour le txt par le billet du DOM.tagline
	// Met à jour les dots par rapport a l'image selectionner dans le [tableau] par le billet de (l'index)
    updateDots(slideIndex); //Maj dots par rapport a (l'index) dans le [tableau]
}
// Fonction pour mettre à jour les dots
function updateDots(selectedIndex) {
    dotsContainer.innerHTML = ''; // ici on éfface le contenue des dots pour le MAJ en fonction de i après.
	// Crée les dots en fonction du nombre d'images
    slides.forEach((slide, index) => { // ici on parcours l'ensemble du tableau avec une boucle for
        const dot = document.createElement('span');// crée une span HTML pour un nouveau dot
        dot.classList.add('dot'); //ajoute la class CSS dot au span
		// Ajoute la classe 'dot_selected' pour le dot correspondant à l'image actuelle
        if (index === selectedIndex) { //si l'index et strictement égale a l'index selectionner alors:
            dot.classList.add('dot_selected'); //alors on ajoute la class CSS "dot_selected" a cette span
        }
		 // Ajoute un événement 'click' pour chaque dot afin de permettre le changement d'image
        dot.addEventListener('click', function() { //ici on ajoute un click au dot 
            currentSlide = index; // si on click sur un dot alors il cherche a quel i il correspond
            showSlide(currentSlide);// ici on affiche l'index du dot cliqué par une MAJ de showSlide 
        });
		 // Ajoute le dot au conteneur des dots
        dotsContainer.appendChild(dot); // rajoute des dot par rapport a l'index dans le tableau
    });
}

// Gestion du clic sur la flèche gauche
arrowLeft.addEventListener("click", function() { //ajoute un événement sur le click sur la fleche gauche
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; // le slide prend -1 et 
    // % (modulo) permet de passer de la premiere a la dernière il gère la limite de boucle infini.
    showSlide(currentSlide); // affiche le slide actuel (0) ligne 21
});

// Gestion du clic sur la flèche droite
arrowRight.addEventListener("click", function() { //ajoute un événement sur le click sur la fleche droite
    currentSlide = (currentSlide + 1) % slides.length; // ajoute +1 au slide sur la taille du slide
    // % (modulo) permet de passer de la premiere a la dernière il gère la limite de boucle infini.
    showSlide(currentSlide); // affiche le slide actuel (0) ligne 21
});

// Affiche la première diapositive au chargement de la page ou affiche l'index selectionner. 
showSlide(currentSlide);  // appel la fonction de mise a jour pour afficher l'index selectionner.


//bannerText.innerHTML: innerHTML écrit du texte via le .tagline qui suit. 
//bannerImg.src: ici on met a jour la source "src" vie .image qui suit. 

//slides = tableau.
//showSlide = Met a jours l'index dans le tableau et appelle updateDots.
//currentSlide = position actuel dans le tableau par le billet des itérations dot ou fleche. 
//showSlide(currentSlide) = affichage par défaut de l'index 0 ou de celui séléctionner. 
