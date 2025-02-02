
  <script>
    // Obtenez le formulaire et le message de succès
    const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

    // Écoutez l'événement de soumission du formulaire
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Empêche le rechargement de la page

      // Effectuez la soumission du formulaire via Formspree
      fetch(form.action, {
        method: 'POST',
        body: new FormData(form)
      })
      .then(response => {
        if (response.ok) {
          successMessage.style.display = 'block'; // Affiche le message de succès
          form.reset(); // Réinitialise le formulaire
        } else {
          alert('Erreur lors de l\'envoi du message.');
        }
      })
      .catch(error => {
        alert('Erreur réseau. Veuillez réessayer.');
      });
    });
  </script>

