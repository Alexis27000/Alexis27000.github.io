
  






document.addEventListener('DOMContentLoaded', chargerMenu);

async function chargerMenu() {
  try {
  const header = document.getElementById('header');
  const reponse = await fetch('/composants/header.html');

  

    if (!reponse.ok) {
      throw new Error('Erreur lors du chargement du menu');
    }

    const html = await reponse.text();
    header.innerHTML = html;
              const currentPage = window.location.pathname;
            // Récupérer le nom du fichier actuel depuis l'URL
            // window.location.pathname donne le chemin complet (ex: "/dossier/index.html")
            // .split('/') découpe le chemin en tableau selon les "/" (ex: ["", "dossier", "index.html"])
            // .pop() récupère le dernier élément du tableau (ex: "index.html")

            console.log('Page actuelle:', currentPage);

            // Mettre à jour l'état actif du menu
            const navLinks = document.querySelectorAll('#menu_desktop a');
            console.log('Liens de navigation trouvés:', navLinks);
            // Sélectionner tous les liens de navigation
            navLinks.forEach(link => {
            // Pour chaque lien, vérifier s'il correspond à la page actuelle
                if (link.getAttribute('href') === currentPage) {

            // Si le lien correspond à la page actuelle, on lui ajoute la classe 'active'
                console.log('Lien actif trouvé:', link.getAttribute('href'));

            // Afficher le lien actif dans la console 
            // Si le lien correspond à la page actuelle, on lui ajoute la classe 'active'
                link.classList.add('active');
                }
            });


  } catch (erreur) {
    console.error('Erreur :', erreur);
  }




         var menu = document.getElementById("menu_mobile");

        var paul = document.getElementById("menu_toggle");

         paul.addEventListener("click", Pierre);

        function Pierre() {
             menu.classList.toggle("activation");
         }



  // je déclare la variable menuBtn = l'id "menu-btn" dans mon html
  let menuBtn = document.getElementById('menu_toggle');
  // je déclare la variable menuMobile = l'id "menu-mobile" dans mon html
  let menuMobile = document.getElementById('menu_mobile');
  // j'ajoute un écouteur d'événement "click" sur le bouton menuBtn et j'utilise une fonction anonyme pour gérer l'événement
  menuBtn.addEventListener('click', function () {
    // je bascule la classe "hidden" sur l'élément menuMobile, ce qui permet de l'afficher ou de le masquer
    menuMobile.classList.toggle('hidden');
    // je bascule la classe "expanded" sur le bouton menuBtn, ce qui permet de changer son apparence
    menuBtn.classList.toggle('expanded');
    
  });

}

  // import-menu.js

// Sélectionne l'élément où insérer le menu
const footer = document.getElementById('footer');

// Charge le fichier menu.html
fetch('/composants/footer.html')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erreur lors du chargement du menu');
    }
    return response.text();
  })
  .then(data => {
    footer.innerHTML = data;
        		

const modalContainer = document.
querySelector(".modal-container");
const modalTriggers = document.
querySelectorAll(".modal-trigger");

modalTriggers.forEach(trigger => trigger.
  addEventListener("click", togglemodal))


  function togglemodal(){

  
    modalContainer.classList.toggle("actif")


  }

 } )


















  let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("activer", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += "activer";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

