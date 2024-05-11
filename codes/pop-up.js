// Abrir pop-up do YouTube
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('popup-youtube')) {
    e.preventDefault();
    var videoId = e.target.getAttribute('data-youtube-id');
    var iframe = document.getElementById('youtube-iframe');
    iframe.src = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1';

    // Exibe o modal como uma camada que cobre toda a tela
    var modal = document.querySelector('.yt-popup');
    modal.style.display = 'block';
    modal.style.position = 'fixed';
    modal.style.left = '0';
    modal.style.top = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
  }
});

// Fechar pop-up do YouTube
document.addEventListener('click', function(e) {
  var popup = document.querySelector('.yt-popup');
  if (e.target.classList.contains('yt-popup-close') || e.target === popup) {
    var iframe = document.getElementById('youtube-iframe');
    iframe.src = '';
    popup.style.display = 'none';
  }
});
