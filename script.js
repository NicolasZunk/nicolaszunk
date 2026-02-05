// Link in Bio - JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Adiciona efeito de ripple nos botões de link
  const linkButtons = document.querySelectorAll('.link-button');
  
  linkButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      // Você pode adicionar analytics ou outros eventos aqui
      console.log('Link clicado:', this.querySelector('.link-label').textContent);
    });
  });

  // Subscribe button click handler
  const subscribeBtn = document.querySelector('.subscribe-btn');
  if (subscribeBtn) {
    subscribeBtn.addEventListener('click', function() {
      alert('Obrigado por se inscrever! 🎉');
    });
  }

  // Share button click handler
  const shareBtn = document.querySelector('.share-btn');
  if (shareBtn) {
    shareBtn.addEventListener('click', async function() {
      if (navigator.share) {
        try {
          await navigator.share({
            title: 'DAK CALVO',
            text: 'Confira os links do DAK CALVO!',
            url: window.location.href
          });
        } catch (err) {
          console.log('Compartilhamento cancelado');
        }
      } else {
        // Fallback: copia o link
        navigator.clipboard.writeText(window.location.href);
        alert('Link copiado! 📋');
      }
    });
  }
});