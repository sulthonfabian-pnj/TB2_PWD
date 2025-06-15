 
 //Collections
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

            // Hero section animation
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

            // Content section animation
            const contentObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        $('.content-section').addClass('visible');
                        // Stagger event card animations
                        $('.event-card').each(function(index) {
                            $(this).delay(index * 200).queue(function() {
                                $(this).addClass('visible').dequeue();
                            });
                        });
                    } else {
                        $('.content-section').removeClass('visible');
                        $('.event-card').removeClass('visible');
                    }
                });
            }, observerOptions);

            const contentSection = document.querySelector('.content-section');
            if (contentSection) contentObserver.observe(contentSection);
        });

