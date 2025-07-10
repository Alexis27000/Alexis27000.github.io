


document.addEventListener('DOMContentLoaded', chargerMenu);

async function chargerMenu() {
  try {
    const headertwo = document.getElementById('headertwo');
    const reponse = await fetch('../composants/headertwo.html');

    if (!reponse.ok) {
      throw new Error('Erreur lors du chargement du menu');
    }

    const html = await reponse.text();
    headertwo.innerHTML = html;

  } catch (erreur) {
    console.error('Erreur :', erreur);
  }






         var menu = document.getElementById("menu_mobile");

        var paul = document.getElementById("menu_toggle");

         paul.addEventListener("click", Pierre);

        function Pierre() {
             menu.classList.toggle("active");
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
const footertwo = document.getElementById('footertwo');

// Charge le fichier menu.html
fetch('../composants/footertwo.html')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erreur lors du chargement du menu');
    }
    return response.text();
  })
  .then(data => {
    footertwo.innerHTML = data;

$('.popin').hide(); /*fadeOut()*/
			$('footer nav ul li a').click(function(){
				url = $(this).attr('href');
				//alert(url);
				$(url).show();/*fadeIn()*/
				return false; /* Je n execute pas le lien */
	
			});
			$('a.fermer').click(function(){
				$('.popin').hide();/*fadeIn()*/
				return false; /* Je n execute pas le lien */
	
			});
  })
  .catch(error => {
    console.error('Erreur :', error);
  });



