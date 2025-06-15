
        $(document).ready(function() {
            // Navigation bar: hide on scroll down, show on scroll up
            let lastScrollTop = 0;
            $(window).scroll(function() {
                let currentScrollTop = $(this).scrollTop();
                if (currentScrollTop > lastScrollTop) {
                    // Scroll down
                    $('header').addClass('hidden');
                } else {
                    // Scroll up
                    $('header').removeClass('hidden');
                }
                lastScrollTop = currentScrollTop;

                // Back to Top button visibility
                if (currentScrollTop > 300) {
                    $('.back-to-top').addClass('show');
                } else {
                    $('.back-to-top').removeClass('show');
                }
            });

            $('.back-to-top').click(function(e) {
                e.preventDefault();
                $('html, body').animate({ scrollTop: 0 }, 600);
            });

            // Intersection Observer for animations
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            // Hero animation
            const heroObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        $('.hero').addClass('visible');
                    } else {
                        $('.hero').removeClass('visible');
                    }
                });
            }, observerOptions);

            const heroSection = document.querySelector('.hero');
            if (heroSection) heroObserver.observe(heroSection);

            // Visit info animation
            const visitObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        $('.visit-info').addClass('visible');
                    } else {
                        $('.visit-info').removeClass('visible');
                    }
                });
            }, observerOptions);

            const visitSection = document.querySelector('.visit-info');
            if (visitSection) visitObserver.observe(visitSection);

            // Map and contact animation
            const mapContactObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        $('.map-contact').addClass('visible');
                    } else {
                        $('.map-contact').removeClass('visible');
                    }
                });
            }, observerOptions);

            const mapContactSection = document.querySelector('.map-contact');
            if (mapContactSection) mapContactObserver.observe(mapContactSection);

            // Accessibility animation
            const accessibilityObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        $('.accessibility-info').addClass('visible');
                    } else {
                        $('.accessibility-info').removeClass('visible');
                    }
                });
            }, observerOptions);

            const accessibilitySection = document.querySelector('.accessibility-info');
            if (accessibilitySection) accessibilityObserver.observe(accessibilitySection);

            // Facilities animation
            const facilitiesObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        $('.facilities-info').addClass('visible');
                    } else {
                        $('.facilities-info').removeClass('visible');
                    }
                });
            }, observerOptions);

            const facilitiesSection = document.querySelector('.facilities-info');
            if (facilitiesSection) facilitiesObserver.observe(facilitiesSection);
        });
   
