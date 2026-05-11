function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        this.classList.toggle('flip');
    });
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const card = entry.target;
            if (card.id.includes('pawn') || card.id.includes('queen') || card.id.includes('bishop')) {
                card.classList.add('slide-in-left');
            } else {
                card.classList.add('slide-in-right');
            }
            observer.unobserve(card); 
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.card').forEach(card => {
    observer.observe(card);
});
window.addEventListener('DOMContentLoaded', function() {
    var mobileVideo = document.getElementById('mobile-video');
    var desktopVideo = document.getElementById('desktop-video');
    var loadingOverlay = document.getElementById('loading-overlay');

    function hideLoadingOverlay() {
        console.log('Video loaded, hiding overlay');
        loadingOverlay.style.display = 'none';
    }

    function isMobile() {
        return window.innerWidth <= 768; 
    }

    mobileVideo.addEventListener('canplaythrough', function() {
        if (isMobile()) {
            hideLoadingOverlay();
        }
    });

    desktopVideo.addEventListener('canplaythrough', function() {
        if (!isMobile()) {
            hideLoadingOverlay();
        }
    });

    setTimeout(function() {
        if (loadingOverlay.style.display !== 'none') {
            console.log('Timeout reached, hiding overlay');
            hideLoadingOverlay();
        }
    }, 10000); 
});
