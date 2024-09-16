// app.js
emailjs.init('-P35bTh2TiPcpgzLi');

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  emailjs.sendForm('service_ea8d6ju', 'template_ky90oh7', this)
    .then(function(response) {
      console.log('Succès:', response);
      alert('Message envoyé avec succès!');
    }, function(error) {
      console.log('Erreur:', error);
      alert('Erreur lors de l\'envoi du message.');
    });
});
