// Abrir pop-up do YouTube
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('popup-youtube')) {
    e.preventDefault();
    var videoId = e.target.getAttribute('data-youtube-id');
    var iframe = document.getElementById('youtube-iframe');
    iframe.src = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1';
    document.querySelector('.popup').style.display = 'block';
  }
});

// Fechar pop-up do YouTube
document.addEventListener('click', function(e) {
  var popup = document.querySelector('.popup');
  if (e.target.classList.contains('popup-close') || e.target === popup) {
    var iframe = document.getElementById('youtube-iframe');
    iframe.src = '';
    popup.style.display = 'none';
  }
});
