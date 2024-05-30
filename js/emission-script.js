document.addEventListener("DOMContentLoaded", () => {
    const box1 = document.getElementById('box1');
    const box2 = document.getElementById('box2');
    const imageDisplay = document.getElementById('imageDisplay');

    box1.addEventListener('click', () => {
        toggleImage('images/power-emissions.jpg', box1);
    });

    box2.addEventListener('click', () => {
        toggleImage('images/CO2-emissions.jpg', box2);
    });

    function toggleImage(imageSrc, box) {
        const image = imageDisplay.querySelector(`img[src='${imageSrc}']`);

        if (image) {
            image.remove();
            box.classList.remove('active');
        } else {
            const newImage = document.createElement('img');
            newImage.src = imageSrc;
            imageDisplay.appendChild(newImage);
            box.classList.add('active');
        }

        adjustImages();
    }

    function adjustImages() {
        const images = imageDisplay.querySelectorAll('img');
        images.forEach((img, index) => {
            img.style.order = index;
        });
    }
});
