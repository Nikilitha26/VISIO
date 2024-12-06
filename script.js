// NAVBAR
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

document.querySelector('.menu-open').addEventListener('click', openNav);
document.querySelector('.closebtn').addEventListener('click', closeNav);


// CAROUSEL
document.addEventListener('DOMContentLoaded', () => {
    let slideIndex = 1;
    showSlides(slideIndex);

    document.querySelector('.next').addEventListener('click', () => plusSlides(1));
    
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.addEventListener('click', () => currentSlide(index + 1));
    });

    function plusSlides(n) {
        hideLookBeyond();
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        hideLookBeyond();
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            slides[i].classList.remove('slide');
            slides[i].querySelector('.look-beyond').classList.remove('animate');
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(() => {
            slides[slideIndex - 1].classList.add('slide');
            setTimeout(() => {
                let lookBeyond = slides[slideIndex - 1].querySelector('.look-beyond');
                lookBeyond.style.display = "block";
                lookBeyond.classList.add('animate');
            }, 1000);
        }, 10);
        dots[slideIndex - 1].className += " active";
    }

    function hideLookBeyond() {
        let lookBeyonds = document.getElementsByClassName("look-beyond");
        for (let i = 0; i < lookBeyonds.length; i++) {
            lookBeyonds[i].style.display = "none";
        }
    }
});
