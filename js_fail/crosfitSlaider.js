class Slider {
    bannerSlide = document.querySelector('[data-js-bannerSlide]')
    banners = document.querySelectorAll('[data-js-banner]')
    dotsButtons = document.querySelectorAll('[data-js-dotsButton]')
    buttonLeft = document.querySelector('[data-js-buttonSlideLeft]')
    buttonRight = document.querySelector('[data-js-buttonSlideRight]')
    
    currentIndex = 0;
    totalSlides = this.banners.length;

    constructor() {
        this.bindEvents()
    }

    updateSliderPosition(index) {
        this.bannerSlide.style.transform = `translateX(-${index * 100}%)`;
    }

    leftSlide() {
        this.buttonLeft.addEventListener('click', () => {
            if (this.currentIndex > 0) {
                this.currentIndex--;
            } else {
                this.currentIndex = this.totalSlides - 1;
            }
            this.updateSliderPosition(this.currentIndex);
            this.setActiveDot(this.currentIndex)
        });
    }

    rightSlide() {
        this.buttonRight.addEventListener('click', () => {
            if (this.currentIndex < this.totalSlides - 1) {
                this.currentIndex++;
            } else {
                this.currentIndex = 0; 
            }
            this.updateSliderPosition(this.currentIndex);
            this.setActiveDot(this.currentIndex)
        });
    }

    dotsTrack() {
        this.dotsButtons.forEach((dotsElement,index) => {
            dotsElement.addEventListener('click', () => {
                this.updateSliderPosition(index)
                this.setActiveDot(index)
            })
        })
    }

    setActiveDot(index) {
        this.dotsButtons.forEach(btn => btn.classList.remove('is-current'));
        this.dotsButtons[index].classList.add('is-current');
    }

    bindEvents() {
        this.dotsTrack()
        this.leftSlide();
        this.rightSlide();
    }
}

new Slider()