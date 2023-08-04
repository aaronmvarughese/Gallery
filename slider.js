const slider = document.getElementById('slider');
const images = [
    "Final Selected/Selected/1O0A9904.JPG",
    "Final Selected/Selected/1O0A9932.JPG",
    "Final Selected/Selected/254A3031.JPG",
    "Final Selected/Selected/254A3354 - Copy.JPG",
    "Final Selected/Selected/254A3222.JPG"
];
let currentSlide = 0;
images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = image;
    imgElement.alt = 'Image';
    slider.appendChild(imgElement);
});

function prevSlide() {
    currentSlide = (currentSlide - 1 + images.length) % images.length;
    updateSlider();
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % images.length;
    updateSlider();
}
function updateSlider() {
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}
function generateKeyframesAnimation(imageCount) {
    let keyframes = `@keyframes slide {\n`;
    const keyframeInterval = 100 / imageCount;

    for (let i = 0; i < imageCount; i++) {
        keyframes += `  ${keyframeInterval * i}% { transform: translateX(-${keyframeInterval * i}%); }\n`;
    }

    keyframes += `  100% { transform: translateX(-${keyframeInterval * imageCount}%); }\n`;
    keyframes += `}`;

    return keyframes;
}
const imageCount = images.length;
const keyframesAnimation = generateKeyframesAnimation(imageCount);

const style = document.createElement('style');
style.innerHTML = keyframesAnimation;
document.head.appendChild(style);
