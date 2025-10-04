

//HEADER

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
    const navMenu = document.getElementById('menu_desktop');

    let currentPage = window.location.pathname;

    // Debounce helper
    function debounce(fn, wait) {
      let t;
      return function(...args) {
        clearTimeout(t);
        t = setTimeout(() => fn.apply(this, args), wait);
      };
    }

    // Move the indicator to the given element (coordinates relative to navMenu)
    function moveIndicatorTo(element) {
      if (!element || !navMenu) return;
      const navRect = navMenu.getBoundingClientRect();
      const elRect = element.getBoundingClientRect();
      const left = Math.round(elRect.left - navRect.left + navMenu.scrollLeft);
      const width = Math.round(elRect.width);
      active.style.width = width + 'px';
      active.style.left = left + 'px';
    }

    // Find the link matching the current page (fallback to first link)
    function getCurrentLink() {
      let found = Array.from(navLinks).find(link => link.getAttribute('href') === currentPage || link.getAttribute('href') === window.location.pathname);
      return found || navLinks[0] || null;
    }

    // Reset indicator to the current page link
    function resetIndicator() {
      const el = getCurrentLink();
      if (el) moveIndicatorTo(el);
      else {
        active.style.width = '0px';
      }
    }

    // Initialize indicator after render
    setTimeout(resetIndicator, 30);

    // Add hover and focus interactions for instant feedback
    navLinks.forEach(link => {
      link.addEventListener('mouseenter', () => moveIndicatorTo(link));
      link.addEventListener('focus', () => moveIndicatorTo(link));
      // Keep blur handler for keyboard accessibility
      link.addEventListener('blur', () => resetIndicator());
      // If user clicks a link that doesn't navigate away (SPA), update currentPage
      link.addEventListener('click', () => {
        currentPage = link.getAttribute('href');
        // small timeout to allow navigation rendering if any
        setTimeout(resetIndicator, 50);
      });
    });

    // Reset indicator when the mouse leaves the whole navigation area
    if (navMenu) {
      navMenu.addEventListener('mouseleave', () => {
        // Use a tiny timeout to avoid flicker when moving between links quickly
        setTimeout(resetIndicator, 10);
      });
    }

    // Recalculate positions on resize with debounce
    window.addEventListener('resize', debounce(() => {
      resetIndicator();
    }, 120));


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



  


//MENU FOOTER

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
















// SLIDE (initialise uniquement si le markup existe)
{
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("demo");
  const captionText = document.getElementById("caption");

  if (slides.length && dots.length && captionText) {
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

    // Expose controls globally (used by inline onclick in HTML)
    window.plusSlides = plusSlides;
    window.currentSlide = currentSlide;

    function showSlides(n) {
      let i;
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
  }
}






