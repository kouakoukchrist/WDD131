let searchBanner = document.getElementById('bannersearch');

if (searchBanner) {
  searchBanner.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
         window.location.href = "inventory.html";
      }
  });
}