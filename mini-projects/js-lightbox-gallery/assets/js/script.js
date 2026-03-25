
// function includePopupHtml(){
//     const html ='<div id="click-popup"style="display:none;position:fixed;top:0;left:0;width:100%;height:100%;align-items:center;justify-content:center;background:rgba(0,0,0,0.5);"><img id="crossbtn" onclick="popupcloss()" src="plugin/images/cross.png"alt="Close Button" style="position:absolute;top:10px;right:10px;cursor:pointer;"><img id="left-arrow" src="plugin/images/arrow_circle_left .png" alt="Left Arrow" style="position:absolute;left:10px;top:50%;transform:translateY(-50%);cursor:pointer;"><img id="right-arrow" src="plugin/images/arrow_circle_right.png" alt="Right Arrow" style="position:absolute;right:10px;top:50%;transform:translateY(-50%);cursor:pointer;"><img id="popup-images" src="upload/bg-1.jpg" alt="Popup Image" style="max-width:90%;max-height:90%;"></div>';
    
//     let popdiv = document.createElement("div");
//     popdiv.innerHTML = html;
//     document.body.insertBefore(popdiv, document.body.firstChild)

// }

// var img ;
// let currentimg ;

// function popupInit(value) {
//     img = document.getElementsByClassName(value);
//     for (var i = 0; i < img.length; i++) {
//         img[i].style.cursor = 'pointer';

//         img[i].addEventListener("click", function() {
//             document.getElementById("popup-images").src = this.src;
//             document.getElementById("click-popup").style.display = 'block';
//             checkArrow();
//         });
//     }
//     includePopupHtml();

//     document.getElementById('right-arrow').addEventListener('click', function(){
//         nextimg()
//     })

//     document.getElementById('left-arrow').addEventListener('click', function(){
//         previmg()
//     })
// }

// function popupcloss() {
//     document.getElementById("popup-images").src = "";
//     document.getElementById("click-popup").style.display = 'none';
// }

// function nextimg(){
//     getCurrentImage();
//     currentimg++;
//     document.getElementById("popup-images").src = img[currentimg].src;
//     checkArrow();
// }

// function previmg(){
//     getCurrentImage();
//     currentimg--;
//     document.getElementById("popup-images").src = img[currentimg].src;
//     checkArrow();
// }



// function getCurrentImage() {
//     for (var i = 0; i < img.length; i++) {
//         if (img[i].src === document.getElementById("popup-images").src) {
//             currentimg = i;
//         }
//     }
// }
// console.log(currentimg);

// function checkArrow(){
//     getCurrentImage();
//     if(currentimg === "0"){
//         document.getElementById('left-arrow').style.display = 'none';
//         document.getElementById('right-arrow').style.display = 'block';
//     } else if(currentimg === img.length -1){
//         document.getElementById('right-arrow').style.display = 'none';
//         document.getElementById('left-arrow').style.display = 'block';
//     } else{
//         document.getElementById('left-arrow').style.display = 'block';
//         document.getElementById('right-arrow').style.display = 'block';
//     }
// }

document.addEventListener("DOMContentLoaded", function() {
    // Lightbox class for better organization
    class Lightbox {
        constructor(selector) {
            this.images = document.querySelectorAll(selector);
            this.currentIndex = -1;
            this.init();
        }

        init() {
            this.createPopup();
            this.attachEvents();
        }

        createPopup() {
            const popupHtml = `
                <div id="click-popup" class="lightbox-popup" role="dialog" aria-modal="true" aria-labelledby="lightbox-title" aria-describedby="lightbox-image">
                    <button id="crossbtn" class="lightbox-close" aria-label="Close lightbox">
                        <img src="assets/upload/cross.png" alt="Close">
                    </button>
                    <button id="zoom-btn" class="lightbox-zoom" aria-label="Zoom image">
                        🔍
                    </button>
                    <button id="left-arrow" class="lightbox-arrow lightbox-arrow-left" aria-label="Previous image">
                        <img src="assets/upload/arrow_circle_left.png" alt="Previous">
                    </button>
                    <button id="right-arrow" class="lightbox-arrow lightbox-arrow-right" aria-label="Next image">
                        <img src="assets/upload/arrow_circle_right.png" alt="Next">
                    </button>
                    <img id="popup-images" class="lightbox-image" src="" alt="Lightbox image">
                    <div id="lightbox-loading" class="lightbox-loading" style="display: none;">Loading...</div>
                </div>
            `;
            document.body.insertAdjacentHTML('beforeend', popupHtml);
            this.popup = document.getElementById('click-popup');
            this.popupImage = document.getElementById('popup-images');
            this.loading = document.getElementById('lightbox-loading');
            this.isZoomed = false;
        }

        attachEvents() {
            // Image clicks
            this.images.forEach((image, index) => {
                image.addEventListener('click', () => this.open(index));
            });

            // Close button
            document.getElementById('crossbtn').addEventListener('click', () => this.close());

            // Zoom button
            document.getElementById('zoom-btn').addEventListener('click', () => this.toggleZoom());

            // Arrows
            document.getElementById('left-arrow').addEventListener('click', () => this.prev());
            document.getElementById('right-arrow').addEventListener('click', () => this.next());

            // Keyboard support
            document.addEventListener('keydown', (e) => {
                if (this.popup.style.display === 'flex') {
                    switch (e.key) {
                        case 'Escape':
                            this.close();
                            break;
                        case 'ArrowLeft':
                            this.prev();
                            break;
                        case 'ArrowRight':
                            this.next();
                            break;
                    }
                }
            });

            // Click outside to close
            this.popup.addEventListener('click', (e) => {
                if (e.target === this.popup) {
                    this.close();
                }
            });

            // Touch support for swipe navigation
            this.touchStartX = 0;
            this.touchEndX = 0;
            this.popup.addEventListener('touchstart', (e) => {
                this.touchStartX = e.changedTouches[0].screenX;
            });
            this.popup.addEventListener('touchend', (e) => {
                this.touchEndX = e.changedTouches[0].screenX;
                this.handleSwipe();
            });
        }

        open(index) {
            if (index < 0 || index >= this.images.length) return;
            this.currentIndex = index;
            this.showImage();
            this.popup.style.display = 'flex';
            document.body.classList.add('lightbox-open'); // Prevent scroll
            this.updateArrows();
        }

        close() {
            this.popup.style.display = 'none';
            document.body.classList.remove('lightbox-open');
        }

        next() {
            if (this.currentIndex < this.images.length - 1) {
                this.open(this.currentIndex + 1);
            }
        }

        prev() {
            if (this.currentIndex > 0) {
                this.open(this.currentIndex - 1);
            }
        }

        showImage() {
            const src = this.images[this.currentIndex].src;
            this.loading.style.display = 'block';
            this.popupImage.style.display = 'none';

            // Preload image
            const img = new Image();
            img.onload = () => {
                this.popupImage.src = src;
                this.popupImage.alt = this.images[this.currentIndex].alt || 'Image';
                this.loading.style.display = 'none';
                this.popupImage.style.display = 'block';
            };
            img.onerror = () => {
                this.loading.textContent = 'Failed to load image';
            };
            img.src = src;
        }

        updateArrows() {
            const leftArrow = document.getElementById('left-arrow');
            const rightArrow = document.getElementById('right-arrow');
            leftArrow.style.display = this.currentIndex === 0 ? 'none' : 'block';
            rightArrow.style.display = this.currentIndex === this.images.length - 1 ? 'none' : 'block';
        }

        handleSwipe() {
            const swipeThreshold = 50; // Minimum distance for swipe
            const diff = this.touchStartX - this.touchEndX;
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    this.next(); // Swipe left
                } else {
                    this.prev(); // Swipe right
                }
            }
        }

        toggleZoom() {
            this.isZoomed = !this.isZoomed;
            if (this.isZoomed) {
                this.popupImage.style.transform = 'scale(1.5)';
                this.popupImage.style.cursor = 'zoom-out';
            } else {
                this.popupImage.style.transform = 'scale(1)';
                this.popupImage.style.cursor = 'zoom-in';
            }
        }
    }

    // Initialize lightbox
    new Lightbox('.bg-image');
});