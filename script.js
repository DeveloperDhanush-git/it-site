const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
};

scrollToTopBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.navbar a', 'div a');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });


    const sr = ScrollReveal({
        duration: 100,
        distance: '30px',
        reset: true
    });

    sr.reveal('.logo', { delay: 150, origin: 'left' });
    sr.reveal('.navbar', { delay: 150, origin: 'top' });
    sr.reveal('.imagebanner', { delay: 150, origin: 'top' });
    sr.reveal('.score', { delay: 150, origin: 'right' });
    sr.reveal('.text-container', { delay: 150, origin: 'left' });
    sr.reveal('.image-container', { delay: 150, origin: 'right' });
    sr.reveal('.container', { delay: 150, origin: 'right' });
    sr.reveal('.faq', { delay: 150, origin: 'right' });
    sr.reveal('.learnings', { delay: 150, origin: 'right' });
    sr.reveal('.images', { delay: 150, origin: 'right' });
    sr.reveal('.carousel-container', { delay: 150, origin: 'right' });
    sr.reveal('.contact', { delay: 150, origin: 'right' });
    sr.reveal('footer', { delay: 150, origin: 'right' });

    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-button.right');
    const prevButton = document.querySelector('.carousel-button.left');
    const slideWidth = slides[0].getBoundingClientRect().width;

    const setSlidePosition = (slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    };
    slides.forEach(setSlidePosition);

    const moveToSlide = (track, currentSlide, targetSlide) => {
        track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
        currentSlide.classList.remove('current-slide');
        targetSlide.classList.add('current-slide');
    };

    slides[0].classList.add('current-slide');

    prevButton.addEventListener('click', () => {
        const currentSlide = track.querySelector('.current-slide');
        const prevSlide = currentSlide.previousElementSibling || slides[slides.length - 1];

        moveToSlide(track, currentSlide, prevSlide);
    });

    nextButton.addEventListener('click', () => {
        const currentSlide = track.querySelector('.current-slide');
        const nextSlide = currentSlide.nextElementSibling || slides[0];

        moveToSlide(track, currentSlide, nextSlide);
    });


    let intervalId = setInterval(() => {
        const currentSlide = track.querySelector('.current-slide');
        const nextSlide = currentSlide.nextElementSibling || slides[0];

        moveToSlide(track, currentSlide, nextSlide);
    }, 3000);


    track.addEventListener('mouseenter', () => clearInterval(intervalId));
    track.addEventListener('mouseleave', () => {
        intervalId = setInterval(() => {
            const currentSlide = track.querySelector('.current-slide');
            const nextSlide = currentSlide.nextElementSibling || slides[0];

            moveToSlide(track, currentSlide, nextSlide);
        }, 3000);
    });
});
