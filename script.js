







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

    // Sélectionner les liens de navigation après que le header a été chargé
    const navLinks = document.querySelectorAll('#menu_desktop a');
    const active = document.getElementById('active');

    let currentPage = window.location.pathname;

    // Variables globales pour retenir les valeurs
    let currentOffsetLeft ;
    let currentOffsetWidth ;

    function indicator() {
      let element = Array.from(navLinks).find(link => link.getAttribute('href') === currentPage);
      if (element) {
        currentOffsetLeft = element.offsetLeft;
        currentOffsetWidth = element.offsetWidth;
        active.style.left = currentOffsetLeft + 'px';
        active.style.width = currentOffsetWidth + 'px';

       currentOffsetLeft = element.offsetLeft + 'px';
       currentOffsetWidth = element.offsetWidth + 'px';

      }
    }
    indicator();
    
    // Attendre un peu que le DOM soit complètement rendu avant de calculer les positions






  } catch (erreur) {
    console.error('Erreur :', erreur);
  }


  // Consolidated mobile menu toggle logic
  let menuBtn = document.getElementById('menu_toggle');
  let menuMobile = document.getElementById('menu_mobile');

  menuBtn.addEventListener('click', function () {
    // Toggle both "activation" and "hidden" classes for menuMobile
    menuMobile.classList.toggle('activation');
    menuMobile.classList.toggle('hidden');
    // Toggle "expanded" class for menuBtn
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


    function togglemodal() {


      modalContainer.classList.toggle("actif")


    }

  })


















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
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("activer", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += "activer";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

