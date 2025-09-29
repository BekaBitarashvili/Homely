// ===== JAVASCRIPT FILE (js/main.js) =====

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuToggle.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
    this.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const mobileMenuLinks = mobileMenu.querySelectorAll('a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    });
});

// Featured Properties Carousel
const carouselTrack = document.getElementById('carouselTrack');
const carouselDots = document.getElementById('carouselDots');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const featuredTitle = document.getElementById('featuredTitle');
const detailLocation = document.getElementById('detailLocation');
const detailDescription = document.getElementById('detailDescription');
const detailBedrooms = document.getElementById('detailBedrooms');
const detailBathrooms = document.getElementById('detailBathrooms');
const detailBars = document.getElementById('detailBars');
const detailPrice = document.getElementById('detailPrice');

const properties = [
    {
        title: "Modern Luxe Villa",
        location: "20 S Aurora Ave, Miami",
        description: "Experience luxury living at Modern Luxe Villa, located at 20 S Aurora Ave, Miami. This stunning smart home offers spacious living areas and modern amenities.",
        bedrooms: 4,
        bathrooms: 3,
        bars: 2,
        price: "$1,650,500"
    },
    {
        title: "Coastal Paradise",
        location: "15 Ocean Drive, Malibu",
        description: "Stunning beachfront property with breathtaking ocean views. Features include infinity pool, private beach access, and state-of-the-art smart home technology.",
        bedrooms: 5,
        bathrooms: 4,
        bars: 3,
        price: "$2,850,000"
    },
    {
        title: "Urban Penthouse",
        location: "Manhattan, New York",
        description: "Luxurious penthouse in the heart of Manhattan. Floor-to-ceiling windows, rooftop terrace, and premium finishes throughout. Perfect for sophisticated city living.",
        bedrooms: 3,
        bathrooms: 3,
        bars: 1,
        price: "$3,200,000"
    }
];

let currentPropertyIndex = 0;

// Create carousel dots
properties.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    carouselDots.appendChild(dot);
});

function updatePropertyDetails(index) {
    const property = properties[index];
    featuredTitle.textContent = property.title;
    detailLocation.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
        </svg>
        ${property.location}
    `;
    detailDescription.textContent = property.description;
    detailBedrooms.textContent = `${property.bedrooms} Bedrooms`;
    detailBathrooms.textContent = `${property.bathrooms} Bathrooms`;
    detailBars.textContent = `${property.bars} Bar areas`;
    detailPrice.textContent = property.price;
}

function goToSlide(index) {
    currentPropertyIndex = index;
    carouselTrack.style.transform = `translateX(-${index * 100}%)`;

    // Update dots
    document.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });

    // Update property details
    updatePropertyDetails(index);
}

prevBtn.addEventListener('click', () => {
    currentPropertyIndex = (currentPropertyIndex - 1 + properties.length) % properties.length;
    goToSlide(currentPropertyIndex);
});

nextBtn.addEventListener('click', () => {
    currentPropertyIndex = (currentPropertyIndex + 1) % properties.length;
    goToSlide(currentPropertyIndex);
});

// Auto-rotate carousel
setInterval(() => {
    currentPropertyIndex = (currentPropertyIndex + 1) % properties.length;
    goToSlide(currentPropertyIndex);
}, 4000);

// Testimonials Carousel
const testimonialText = document.getElementById('testimonialText');
const testimonialName = document.getElementById('testimonialName');
const testimonialRole = document.getElementById('testimonialRole');
const testimonialDots = document.getElementById('testimonialDots');
const clientPhoto = document.getElementById('clientPhoto');

const testimonials = [
    {
        text: "I found my ideal home in no time! The listings were detailed, the photos were accurate, and the whole process felt seamless. Customer service was top-notch, answering all my questions. I will definitely use this platform again in the future!",
        name: "Emily & John Smith",
        role: "Buyer",
        photo: "Client Photo 1"
    },
    {
        text: "Outstanding experience from start to finish! The team was professional, responsive, and made selling our home effortless. Highly recommend their services to anyone looking to buy or sell.",
        name: "Sarah Johnson",
        role: "Seller",
        photo: "Client Photo 2"
    },
    {
        text: "The best real estate platform I've ever used. Modern interface, accurate information, and exceptional support throughout the entire process. Found our dream home within weeks!",
        name: "Michael Chen",
        role: "Buyer",
        photo: "Client Photo 3"
    }
];

let currentTestimonialIndex = 0;

// Create testimonial dots
testimonials.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToTestimonial(index));
    testimonialDots.appendChild(dot);
});

function goToTestimonial(index) {
    currentTestimonialIndex = index;
    const testimonial = testimonials[index];

    testimonialText.style.opacity = '0';
    testimonialName.style.opacity = '0';
    testimonialRole.style.opacity = '0';
    clientPhoto.style.opacity = '0';

    setTimeout(() => {
        testimonialText.textContent = testimonial.text;
        testimonialName.textContent = testimonial.name;
        testimonialRole.textContent = testimonial.role;
        clientPhoto.textContent = testimonial.photo;

        testimonialText.style.opacity = '1';
        testimonialName.style.opacity = '1';
        testimonialRole.style.opacity = '1';
        clientPhoto.style.opacity = '1';
    }, 300);

    // Update dots
    testimonialDots.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

// Add transition styles
testimonialText.style.transition = 'opacity 0.3s ease';
testimonialName.style.transition = 'opacity 0.3s ease';
testimonialRole.style.transition = 'opacity 0.3s ease';
clientPhoto.style.transition = 'opacity 0.3s ease';

// Auto-rotate testimonials
setInterval(() => {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    goToTestimonial(currentTestimonialIndex);
}, 5000);

// Interactive Rotate Section
const rotateSection = document.getElementById('rotateSection');

rotateSection.addEventListener('click', function() {
    this.classList.add('rotating');

    setTimeout(() => {
        this.classList.remove('rotating');
    }, 1000);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Hero section should be visible immediately
document.querySelector('.hero').style.opacity = '1';
document.querySelector('.hero').style.transform = 'translateY(0)';

console.log('Homely Website Loaded Successfully!');