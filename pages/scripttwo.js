// import-menu.js

// Sélectionne l'élément où insérer le menu
const headertwo = document.getElementById('headertwo');

// Charge le fichier menu.html
fetch('../composants/headertwo.html')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erreur lors du chargement du menu');
    }
    return response.text();
  })
  .then(data => {
    headertwo.innerHTML = data;
  })
  .catch(error => {
    console.error('Erreur :', error);
  });



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
  })
  .catch(error => {
    console.error('Erreur :', error);
  });



