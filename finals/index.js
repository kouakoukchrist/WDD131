let searchBanner = document.getElementById('bannersearch');

if (searchBanner) {
    searchBanner.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
           window.location.href = "inventory.html";
        }
    });
}

let searchHeader = document.getElementById('navsearch');

if (searchHeader) {
    searchHeader.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
           window.location.href = "inventory.html";
        }
    });
}