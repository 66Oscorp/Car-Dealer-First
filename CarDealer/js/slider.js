// const sliderContainer = document.querySelector('.slider-container');
// const images = sliderContainer.querySelectorAll('img');
// const slideInterval = 6000;

// let counter = 0;

// function slide() {
//     images[counter].style.display = 'none';
//     counter = (counter + 1) % images.length;
//     images[counter].style.display = 'block';
// }

// // Call the slide function immediately to display the first image
// slide();

// // Set interval to call the slide function every 3 seconds
// setInterval(slide, slideInterval);
const slider = document.querySelector('.slider');
const slideWidth = slider.clientWidth;
const slideInterval = 6000; // 3 seconds
let counter = 0;

function slide() {
    counter++;
    slider.style.transition = 'transform 1s ease-in-out';
    slider.style.transform = 'translateX(' + (-slideWidth * counter) + 'px)';

    if (counter >= slider.children.length) {
        setTimeout(() => {
            counter = 0;
            slider.style.transition = 'none';
            slider.style.transform = 'translateX(' + (-slideWidth * counter) + 'px)';
        }, 1000);
    }
}

setInterval(slide, slideInterval);
