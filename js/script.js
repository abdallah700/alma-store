<<<<<<< HEAD
// =========================================
// HAMBURGER MENU
// =========================================

const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

if (menuToggle && navbar) {

  menuToggle.addEventListener('click', () => {

    navbar.classList.toggle('active');

    // CHANGE ICON
    if (navbar.classList.contains('active')) {

      menuToggle.innerHTML = '✕';

    } else {

      menuToggle.innerHTML = '☰';
    }

  });

}

// =========================================
// WHATSAPP FUNCTION
// =========================================

function sendWhatsApp(product) {

  const message =
    `Bonjour ALMA Store, je suis intéressé par ${product}. Est-il disponible ?`;

  const url =
    `https://api.whatsapp.com/send?phone=243892370459&text=${encodeURIComponent(message)}`;

  window.open(url, '_blank');
}
=======

>>>>>>> 0f196267cf28f51f5fffb0f15317e6f5307f97bd
