// React component for event card
const EventCard = ({ title, description, imageSrc, alt }) => {
    return (
        <div className="event-card">
            <div className="image-wrapper">
                <img src={imageSrc} alt={alt} />
            </div>
            <div className="event-info">
                <h3>{title}</h3>
                <p>{description}</p>
                <a href="https://www.traveloka.com" className="book-online">Pesan Online</a>
            </div>
        </div>
    );
};

// React component for events section
const Events = () => {
    const events = [
        {
            title: "Menyongsong Hari Esok",
            description: "Refleksi krisis iklim melalui karya seni kontemporer yang menggugah.",
            imageSrc: "assets/cal-1.jpeg",
            alt: "Pameran Menyongsong Hari Esok"
        },
        {
            title: "Bayang-Bayang Basoeki Abdullah",
            description: "Pameran karya talenta muda yang terinspirasi oleh warisan Basoeki Abdullah.",
            imageSrc: "assets/cal-2.jpeg",
            alt: "Pameran Bayang-Bayang Basoeki Abdullah"
        },
        {
            title: "Membangun Harmoni",
            description: "Perjalanan visual melalui kekayaan budaya Indonesia dalam seni rupa.",
            imageSrc: "assets/cal-3.png",
            alt: "Pameran Membangun Harmoni"
        },
        {
            title: "Bersama",
            description: "Kegiatan kreatif untuk anak-anak belajar melukis dengan gaya Basoeki Abdullah.",
            imageSrc: "assets/cal-4.png",
            alt: "Pameran Bersama"
        },
        {
            title: "Semesta Perempuan",
            description: "Eksplorasi karya seni realisme dari seniman Indonesia terkemuka.",
            imageSrc: "assets/cal-5.jpg",
            alt: "Pameran Semesta Perempuan"
        },
        {
            title: "Ideolog Kini, Tokoh, dan Bangsa",
            description: "Eksplorasi karya seni realisme dari seniman Indonesia terkemuka.",
            imageSrc: "assets/cal-6.png",
            alt: "Pameran Ideolog"
        }
    ];

    return (
        <div className="events-container">
            {events.map((event, index) => (
                <EventCard
                    key={index}
                    title={event.title}
                    description={event.description}
                    imageSrc={event.imageSrc}
                    alt={event.alt}
                />
            ))}
        </div>
    );
};

// Render the Events component
const rootElement = document.getElementById('events-container');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<Events />);
}

// jQuery for animations and Back to Top button
$(document).ready(function() {
    let lastScrollTop = 0;

    $(window).scroll(function() {
        const currentScrollTop = $(this).scrollTop();

        // Header hide/show on scroll
        if (currentScrollTop > lastScrollTop) {
            $('header').addClass('hidden');
        } else {
            $('header').removeClass('hidden');
        }
        lastScrollTop = currentScrollTop;

        // Back to top button
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

    // Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const eventsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                $('.event-card').each(function(index) {
                    $(this).delay(index * 100).queue(function() {
                        $(this).addClass('visible').dequeue();
                    });
                });
            } else {
                $('.event-card').removeClass('visible');
            }
        });
    }, observerOptions);

    const eventsSection = document.querySelector('.content-section');
    if (eventsSection) eventsObserver.observe(eventsSection);
});
