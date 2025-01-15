function toggleMenu() {
    const nav = document.getElementById('nav-links');
    nav.classList.toggle('active');
    const burger = document.querySelector('.burger-menu');
    burger.classList.toggle('active');
}