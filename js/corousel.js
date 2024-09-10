document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector('.masthead');
    const dots = document.querySelectorAll('.dot');
    
    const images = [
        'url("./img/mangoes.jpg")',
        'url("./img/mangoes2.jpg")',
        'url("./img/mangoes3.jpg")',
        'url("./img/mangoes4.jpg")'
    ];

    let currentIndex = 0;

    // Function to change the background image
    function changeBackgroundImage(index) {
        // container.style.transform = `translateX(-vw)`;
        container.style.backgroundImage = images[index];
        currentIndex = index;
        updateDots(index);
    }

    // Function to update the active state of dots
    function updateDots(index) {
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    // Automatic slide every 2 seconds
    function autoSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        changeBackgroundImage(currentIndex);
    }

    let slideInterval = setInterval(autoSlide, 4000);

    // Add click event to dots
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            clearInterval(slideInterval); // Stop auto sliding when dot is clicked
            changeBackgroundImage(parseInt(dot.getAttribute('data-index')));
            slideInterval = setInterval(autoSlide, 2000); // Restart auto sliding
        });
    });

    // Initial setup
    changeBackgroundImage(currentIndex);
});
