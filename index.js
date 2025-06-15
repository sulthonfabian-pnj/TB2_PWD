
        // Define React components
        const ExhibitionCard = ({ title, description, date, imageSrc, alt }) => {
            return (
                <div className="event-card">
                    <div className="event-info">
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <p className="date">{date}</p>
                    </div>
                    <img src={imageSrc} alt={alt} className="event-image" />
                </div>
            );
        };

        const Exhibitions = () => {
            const events = [
                {
                    title: "Menyongsong Hari Esok",
                    description: "Refleksi Krisis Iklim Melalui Karya Seni",
                    date: "📅 13 October - 30 November 2023",
                    imageSrc: "assets/cal-1.jpeg",
                    alt: "Pameran Menyongsong Hari Esok"
                },
                {
                    title: "Bayang-Bayang Basoeki Abdullah",
                    description: "Pameran karya talenta muda",
                    date: "📅 18 May - 08 June 2021",
                    imageSrc: "assets/cal-2.jpeg",
                    alt: "Pameran Bayang-Bayang Basoeki Abdullah"
                }
            ];

            return (
                <div className="events-container">
                    {events.map((event, index) => (
                        <ExhibitionCard
                            key={index}
                            title={event.title}
                            description={event.description}
                            date={event.date}
                            imageSrc={event.imageSrc}
                            alt={event.alt}
                        />
                    ))}
                </div>
            );
        };

        // Render the Exhibitions component
        const rootElement = document.getElementById('events-container');
        if (rootElement) {
            const root = ReactDOM.createRoot(rootElement);
            root.render(<Exhibitions />);
        }

        // jQuery untuk animasi fade-in, navigasi, dan Intersection Observer
        $(document).ready(function() {
            // Navigasi bar: hide saat scroll ke bawah, show saat scroll ke atas
            let lastScrollTop = 0;
            $(window).scroll(function() {
                let currentScrollTop = $(this).scrollTop();
                if (currentScrollTop > lastScrollTop) {
                    // Scroll ke bawah
                    $('header').addClass('hidden');
                } else {
                    // Scroll ke atas
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

            // Animasi fade-in untuk interstitial
            function checkFadeIn() {
                const fadeElements = document.querySelectorAll('.interstitial-section .inner');
                fadeElements.forEach(element => {
                    const rect = element.getBoundingClientRect();
                    const windowHeight = window.innerHeight;
                    if (rect.top < windowHeight * 0.75) {
                        element.classList.add('visible');
                    } else {
                        element.classList.remove('visible');
                    }
                });
            }

            window.addEventListener('scroll', checkFadeIn);
            window.addEventListener('load', checkFadeIn);

            // Intersection Observer untuk animasi Exhibitions, Collections, dan Timeline
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            // Exhibitions Animation
            const exhibitionsObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        $('.event-card').each(function(index) {
                            $(this).delay(index * 300).queue(function() {
                                $(this).addClass('visible').dequeue();
                            });
                        });
                    } else {
                        $('.event-card').removeClass('visible');
                    }
                });
            }, observerOptions);

            const exhibitionsSection = document.querySelector('.exhibitions');
            if (exhibitionsSection) exhibitionsObserver.observe(exhibitionsSection);

            // Collections Animation
            const collectionsObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        $('.collections .masonry-item').each(function(index) {
                            $(this).delay(index * 100).queue(function() {
                                $(this).addClass('visible').dequeue();
                            });
                        });
                    } else {
                        $('.collections .masonry-item').removeClass('visible');
                    }
                });
            }, observerOptions);

            const collectionsSection = document.querySelector('.collections');
            if (collectionsSection) collectionsObserver.observe(collectionsSection);

            // Timeline Animation
            const timelineObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        $('.timeline-item').each(function(index) {
                            $(this).delay(index * 200).queue(function() {
                                $(this).addClass('visible').dequeue();
                            });
                        });
                    } else {
                        $('.timeline-item').removeClass('visible');
                    }
                });
            }, observerOptions);

            const timelineSection = document.querySelector('.timeline');
            if (timelineSection) timelineObserver.observe(timelineSection);
        });
 