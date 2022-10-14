const btnMobile = document.getElementById('checkbox-menu');

function toggleMenu(){
    const links = document.getElementById('links');
    links.classList.toggle('active-links');
}

btnMobile.addEventListener('click', toggleMenu);