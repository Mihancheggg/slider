//find elements
let prevBtn = document.getElementById('prevBtn');
let nextBtn = document.getElementById('nextBtn');
let sliderImage = document.getElementById('sliderImage')

//create images array
let imagesURLs = [];

imagesURLs.push('https://avatars.mds.yandex.net/i?id=9cdf07fae373c888b11e48e943a1e771-5161032-images-thumbs&n=13&exp=1')
imagesURLs.push('https://avatars.mds.yandex.net/i?id=03eb9f3bfc40ecb2b07035a769ed9ff7-4825588-images-thumbs&n=13&exp=1')
imagesURLs.push('https://avatars.mds.yandex.net/i?id=ad59446c5ced921127c88f140d873e4e-4432920-images-thumbs&n=13&exp=1')
imagesURLs.push('https://avatars.mds.yandex.net/i?id=e056c77877591e07d352d0e86e0118bf-4628413-images-thumbs&n=13&exp=1')

let currentImageIndex = 0;
prevBtn.disabled = true

sliderImage.src = imagesURLs[currentImageIndex]

//subscribe to events
prevBtn.addEventListener('click', onPrevBtnClick);
nextBtn.addEventListener('click', onNextBtnClick);

//functions definition
function onPrevBtnClick(event) {
    currentImageIndex--
    nextBtn.disabled = false
    if (currentImageIndex === 0) {
        prevBtn.disabled = true
    }
    sliderImage.src = imagesURLs[currentImageIndex]
};

function onNextBtnClick(event) {
    currentImageIndex++
    prevBtn.disabled = false
    if (currentImageIndex === imagesURLs.length - 1) {
        nextBtn.disabled = true
    }
    sliderImage.src = imagesURLs[currentImageIndex]
}