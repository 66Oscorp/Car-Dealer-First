const productContainers = document.querySelectorAll('.product .product-container');
const nxtBtn = document.querySelectorAll('.product .nxt-btn');
const preBtn = document.querySelectorAll('.product .pre-btn');

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += 275;
        console.log();
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})