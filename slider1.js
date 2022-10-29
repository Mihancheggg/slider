function Slider() {
    this.imagesURLs = [];
    this.prevBtn = null;
    this.nextBtn = null;
    this.sliderImage = null;
    this.currentImageIndex = 0;
};

Slider.prototype.start = function (elId) {
    let that = this

    let selector = `#${elId}`;
    let el = document.querySelector(selector);

    this.prevBtn = el.querySelector('.prevBtn')
    this.nextBtn = el.querySelector('.nextBtn')
    this.sliderImage = el.querySelector('.sliderImage')

    this.imagesURLs.push('https://avatars.mds.yandex.net/i?id=9cdf07fae373c888b11e48e943a1e771-5161032-images-thumbs&n=13&exp=1')
    this.imagesURLs.push('https://avatars.mds.yandex.net/i?id=03eb9f3bfc40ecb2b07035a769ed9ff7-4825588-images-thumbs&n=13&exp=1')
    this.imagesURLs.push('https://avatars.mds.yandex.net/i?id=ad59446c5ced921127c88f140d873e4e-4432920-images-thumbs&n=13&exp=1')
    this.imagesURLs.push('https://avatars.mds.yandex.net/i?id=e056c77877591e07d352d0e86e0118bf-4628413-images-thumbs&n=13&exp=1')

    this.prevBtn.disabled = true
    this.sliderImage.src = this.imagesURLs[this.currentImageIndex]

    //way 1
    this.prevBtn.addEventListener('click', this.onPrevBtnClick.bind(this));
    //way2
    this.nextBtn.addEventListener('click', function (e) {
        that.onNextBtnClick(e)
    });
};

Slider.prototype.onPrevBtnClick = function (e) {
    this.currentImageIndex--
    this.nextBtn.disabled = false
    if (this.currentImageIndex === 0) {
        this.prevBtn.disabled = true
    }
    this.sliderImage.src = this.imagesURLs[this.currentImageIndex]
};

Slider.prototype.onNextBtnClick = function (e) {
    this.currentImageIndex++
    this.prevBtn.disabled = false
    if (this.currentImageIndex === this.imagesURLs.length - 1) {
        this.nextBtn.disabled = true
    }
    this.sliderImage.src = this.imagesURLs[this.currentImageIndex]
}

let slider1 = new Slider();
slider1.start("slider1");
let slider2 = new Slider();
slider2.start('slider2')