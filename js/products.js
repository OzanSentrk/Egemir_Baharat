document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { src: 'images/ürün_resimleri/köfte_harcı.jpg', alt: 'Köfte Harcı', title: 'Köfte Harcı' },
        { src: 'images/ürün_resimleri/kasap_köfte_harcı.jpg', alt: 'Kasap Köfte Harcı', title: 'Kasap Köfte Harcı' },
        { src: 'images/ürün_resimleri/ızgara_köfte_harcı.jpg', alt: 'Izgara Köfte Harcı', title: 'Izgara Köfte Harcı' },
        { src: 'images/ürün_resimleri/inegöl_köfte_harcı.jpg', alt: 'İnegöl Köfte Harcı', title: 'İnegöl Köfte Harcı' },
        { src: 'images/ürün_resimleri/egemir_kofte.jpeg', alt: 'Egemir Köfte Harcı', title: 'Egemir Köfte Harcı' },
        { src: 'images/ürün_resimleri/hamburger_harcı.jpg', alt: 'Hamburger Harcı', title: 'Hamburger Harcı' },
        { src: 'images/ürün_resimleri/tavuk_sosu.jpg', alt: 'Tavuk Sosu Harcı', title: 'Tavuk Sosu Harcı' },
        { src: 'images/ürün_resimleri/kajun-baharatı.jpg', alt: 'Kajun Baharatı', title: 'Kajun Baharatı' },
        { src: 'images/ürün_resimleri/fajita_baharatı.jpg', alt: 'Fajita Baharatı', title: 'Fajita Baharatı' },
        { src: 'images/ürün_resimleri/adana_harcı.jpg', alt: 'Adana Harcı', title: 'Adana Harcı' },
        { src: 'images/ürün_resimleri/kimyon.jpg', alt: 'Kimyon', title: 'Kimyon' },
        { src: 'images/ürün_resimleri/karabiber.jpeg', alt: 'Karabiber', title: 'Karabiber' }
    ];

    const itemsPerSlide = 4;
    const itemsPerSlideMobile = 2;
    let carouselInner = document.getElementById('carouselInner');
    let carouselIndicators = document.getElementById('carouselIndicators');
    let slides = [];
    let indicators = [];

    function createSlide(items) {
        let slide = document.createElement('div');
        slide.classList.add('carousel-item');
        let row = document.createElement('div');
        row.classList.add('row');
        items.forEach(item => {
            let col = document.createElement('div');
            col.classList.add('col-md-3', 'col-6');
            col.innerHTML = `
                <div class="thumb-wrapper">
                    <div class="img-box">
                        <img src="${item.src}" class="d-block w-100" alt="${item.alt}">
                    </div>
                    <div class="thumb-content">
                        <h4>${item.title}</h4>
                    </div>
                </div>
            `;
            row.appendChild(col);
        });
        slide.appendChild(row);
        return slide;
    }

    function setupCarousel() {
        let slideItems = [];

        // Create slides for desktop view
        for (let i = 0; i < products.length; i += itemsPerSlide) {
            slideItems.push(products.slice(i, i + itemsPerSlide));
        }

        // Create slides for mobile view
        if (window.innerWidth < 768) {
            carouselInner.innerHTML = '';
            carouselIndicators.innerHTML = '';
            slideItems.forEach((items, index) => {
                let slide = createSlide(items);
                if (index === 0) {
                    slide.classList.add('active');
                }
                carouselInner.appendChild(slide);
                let indicator = document.createElement('button');
                indicator.type = 'button';
                indicator.dataset.bsTarget = '#productCarousel';
                indicator.dataset.bsSlideTo = index;
                if (index === 0) {
                    indicator.classList.add('active');
                    indicator.setAttribute('aria-current', 'true');
                }
                indicator.setAttribute('aria-label', `Slide ${index + 1}`);
                carouselIndicators.appendChild(indicator);
            });
        } else {
            carouselInner.innerHTML = '';
            carouselIndicators.innerHTML = '';
            let items = [];
            for (let i = 0; i < products.length; i++) {
                items.push(products[i]);
                if (items.length === itemsPerSlide) {
                    let slide = createSlide(items);
                    if (carouselInner.children.length === 0) {
                        slide.classList.add('active');
                    }
                    carouselInner.appendChild(slide);
                    let indicator = document.createElement('button');
                    indicator.type = 'button';
                    indicator.dataset.bsTarget = '#productCarousel';
                    indicator.dataset.bsSlideTo = carouselInner.children.length - 1;
                    if (carouselInner.children.length === 1) {
                        indicator.classList.add('active');
                        indicator.setAttribute('aria-current', 'true');
                    }
                    indicator.setAttribute('aria-label', `Slide ${carouselInner.children.length}`);
                    carouselIndicators.appendChild(indicator);
                    items = [];
                }
            }
            if (items.length > 0) {
                let slide = createSlide(items);
                carouselInner.appendChild(slide);
                let indicator = document.createElement('button');
                indicator.type = 'button';
                indicator.dataset.bsTarget = '#productCarousel';
                indicator.dataset.bsSlideTo = carouselInner.children.length - 1;
                indicator.setAttribute('aria-label', `Slide ${carouselInner.children.length}`);
                carouselIndicators.appendChild(indicator);
            }
        }
    }

    setupCarousel();
    window.addEventListener('resize', setupCarousel);
});
