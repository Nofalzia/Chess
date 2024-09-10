function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        this.classList.toggle('flip');
    });
});

// Add slide-in effect when cards come into view
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const card = entry.target;
            if (card.id.includes('pawn') || card.id.includes('queen') || card.id.includes('bishop')) {
                card.classList.add('slide-in-left');
            } else {
                card.classList.add('slide-in-right');
            }
            observer.unobserve(card); // Remove observer after animation is triggered
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.card').forEach(card => {
    observer.observe(card);
});
