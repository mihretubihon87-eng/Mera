
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
function handleSubmit(event) {
    event.preventDefault();
    alert('Thank you! Your message has been sent.');
    event.target.reset();
}
