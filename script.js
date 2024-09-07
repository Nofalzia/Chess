function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        this.classList.toggle('flip');
    });
});
