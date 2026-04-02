 let searchBanner = document.getElementById('bannersearch')

searchBanner.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
       window.location.href = "inventory.html";
    }
});