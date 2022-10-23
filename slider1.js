let slider1 = {
    imagesURLs: [],
    prevBtn: document.getElementById('prevBtn'),
    nextBtn: document.getElementById('nextBtn'),
    sliderImage: document.getElementById('sliderImage'),
    currentImageIndex: 0,

    start: function () {
        this.imagesURLs.push('https://avatars.mds.yandex.net/i?id=9cdf07fae373c888b11e48e943a1e771-5161032-images-thumbs&n=13&exp=1')
        this.imagesURLs.push('https://avatars.mds.yandex.net/i?id=03eb9f3bfc40ecb2b07035a769ed9ff7-4825588-images-thumbs&n=13&exp=1')
        this.imagesURLs.push('https://avatars.mds.yandex.net/i?id=ad59446c5ced921127c88f140d873e4e-4432920-images-thumbs&n=13&exp=1')
        this.imagesURLs.push('https://avatars.mds.yandex.net/i?id=e056c77877591e07d352d0e86e0118bf-4628413-images-thumbs&n=13&exp=1')

        this.prevBtn.disabled = true
        this.sliderImage.src = this.imagesURLs[this.currentImageIndex]

        this.prevBtn.addEventListener('click', this.onPrevBtnClick.bind(this));
        this.nextBtn.addEventListener('click', this.onNextBtnClick.bind(this));
    },
    onPrevBtnClick: function (event) {
        this.currentImageIndex--
        this.nextBtn.disabled = false
        if (this.currentImageIndex === 0) {
            this.prevBtn.disabled = true
        }
        this.sliderImage.src = this.imagesURLs[this.currentImageIndex]
    },
    onNextBtnClick: function (event) {
        this.currentImageIndex++
        this.prevBtn.disabled = false
        if (this.currentImageIndex === this.imagesURLs.length - 1) {
            this.nextBtn.disabled = true
        }
        this.sliderImage.src = this.imagesURLs[this.currentImageIndex]
    },
};

slider1.start();