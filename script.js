// Login Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // In a real application, you would send this data to a server for authentication
            // For this demo, we'll just simulate a successful login
            alert(`Login attempted with username: ${username}`);
            
            // Redirect to the about page after "login"
            window.location.href = 'about.html';
        });
    }
    
    // Songs Page Functionality
    const songSearch = document.getElementById('songSearch');
    const categoryFilter = document.getElementById('categoryFilter');
    const songsContainer = document.getElementById('songsContainer');
    const pdfViewer = document.getElementById('pdfViewer');
    const pdfTitle = document.getElementById('pdfTitle');
    const closePdf = document.getElementById('closePdf');
    
    // Search functionality
    if (songSearch) {
        songSearch.addEventListener('input', filterSongs);
    }
    
    // Category filter functionality
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterSongs);
    }
    
    // Filter songs based on search and category
    function filterSongs() {
        const searchTerm = songSearch.value.toLowerCase();
        const category = categoryFilter.value;
        
        const songCards = document.querySelectorAll('.song-card');
        
        songCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const cardCategory = card.dataset.category;
            
            const matchesSearch = title.includes(searchTerm);
            const matchesCategory = category === 'all' || cardCategory === category;
            
            if (matchesSearch && matchesCategory) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    // PDF viewer functionality
    if (songsContainer) {
        const viewButtons = document.querySelectorAll('.btn-view');
        viewButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const pdfPath = this.dataset.pdf;
                const songTitle = this.closest('.song-card').querySelector('h3').textContent;
                
                pdfTitle.textContent = songTitle;
                pdfViewer.style.display = 'block';
                
                // In a real implementation, you would load the PDF here
                console.log(`Viewing PDF: ${pdfPath}`);
            });
        });
    }
    
    // Close PDF viewer
    if (closePdf) {
        closePdf.addEventListener('click', function() {
            pdfViewer.style.display = 'none';
        });
    }
    
    // Download functionality
    const downloadButtons = document.querySelectorAll('.btn-download');
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const pdfPath = this.dataset.pdf;
            const songTitle = this.closest('.song-card').querySelector('h3').textContent;
            
            // In a real implementation, you would trigger the download here
            alert(`Downloading: ${songTitle}`);
            console.log(`Downloading PDF: ${pdfPath}`);
        });
    });
});