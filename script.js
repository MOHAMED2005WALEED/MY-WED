// Placeholder for future interactivity
console.log("Website Loaded!");

// Data for Certifications (You can add more certificates here)
const certifications = [
    {
        title: "Certified Web Developer",
        description: "Completed an advanced course in Web Development with HTML, CSS, and JavaScript.",
        date: "March 2023"
    },
    {
        title: "Python Programming Mastery",
        description: "Achieved proficiency in Python with special focus on data structures and algorithms.",
        date: "July 2022"
    },
    {
        title: "Data Science with R",
        description: "Acquired knowledge in data analysis and statistical modeling using R.",
        date: "December 2021"
    }
];

// Function to generate certification cards dynamically
function displayCertifications(certifications) {
    const certificationsContainer = document.querySelector('.certifications');
    
    if (certificationsContainer) {
        certifications.forEach(cert => {
            const card = document.createElement('div');
            card.classList.add('certification-card');

            card.innerHTML = `
                <div class="certification-title">${cert.title}</div>
                <div class="certification-description">${cert.description}</div>
                <div class="certification-date">${cert.date}</div>
            `;
            
            certificationsContainer.appendChild(card);
        });
    }
}

// ========================================
// CERTIFICATE CAROUSEL FUNCTIONALITY
// ========================================

let currentIndex = 0;
const certificates = document.querySelectorAll('.ccertificate');
const thumbnails = document.querySelectorAll('.thumbnail');

function showCertificate(direction) {
    if (certificates.length === 0) return;
    
    certificates[currentIndex].classList.remove('show');
    thumbnails[currentIndex].classList.remove('active');

    if (direction === 'right') {
        currentIndex = (currentIndex + 1) % certificates.length;
    } else if (direction === 'left') {
        currentIndex = (currentIndex - 1 + certificates.length) % certificates.length;
    }

    certificates[currentIndex].classList.add('show');
    thumbnails[currentIndex].classList.add('active');
}

function selectCertificate(index) {
    if (certificates.length === 0) return;
    
    certificates[currentIndex].classList.remove('show');
    thumbnails[currentIndex].classList.remove('active');

    currentIndex = index;

    certificates[currentIndex].classList.add('show');
    thumbnails[currentIndex].classList.add('active');
}

// Initialize the first certificate and thumbnail
function initializeCertificateCarousel() {
    if (certificates.length > 0 && thumbnails.length > 0) {
        certificates[currentIndex].classList.add('show');
        thumbnails[currentIndex].classList.add('active');
        
        // Add click event listeners to thumbnails
        const thumbnailElements = document.querySelectorAll('.thumbnail');
        thumbnailElements.forEach((thumbnail, index) => {
            thumbnail.addEventListener('click', () => {
                thumbnails.forEach((thumb) => thumb.classList.remove('active'));
                thumbnail.classList.add('active');
            });
        });
    }
}

// ========================================
// ENHANCED SKILLS SECTION - SCROLL ANIMATIONS
// ========================================

function observeSkills() {
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe all skills categories
    const skillCategories = document.querySelectorAll('.skills-category');
    skillCategories.forEach(category => {
        skillsObserver.observe(category);
    });
}

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================

function initializeSmoothScroll() {
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
}

// ========================================
// SCROLL TO TOP BUTTON (Optional Enhancement)
// ========================================

function createScrollToTopButton() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: linear-gradient(90deg, #76A5AF, #BBD2D7);
        color: #061528;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(118, 165, 175, 0.4);
    `;
    
    document.body.appendChild(scrollBtn);
    
    // Show/hide button on scroll
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.style.opacity = '1';
        } else {
            scrollBtn.style.opacity = '0';
        }
    });
    
    // Scroll to top on click
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effect
    scrollBtn.addEventListener('mouseenter', () => {
        scrollBtn.style.transform = 'translateY(-5px)';
        scrollBtn.style.boxShadow = '0 6px 25px rgba(118, 165, 175, 0.6)';
    });
    
    scrollBtn.addEventListener('mouseleave', () => {
        scrollBtn.style.transform = 'translateY(0)';
        scrollBtn.style.boxShadow = '0 4px 15px rgba(118, 165, 175, 0.4)';
    });
}

// ========================================
// LAZY LOADING FOR IMAGES (Performance Enhancement)
// ========================================

function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ========================================
// TYPING EFFECT FOR HEADER (Optional Enhancement)
// ========================================

function initializeTypingEffect() {
    const typingElement = document.querySelector('.typing-effect');
    if (!typingElement) return;
    
    const text = typingElement.textContent;
    typingElement.textContent = '';
    let index = 0;
    
    function type() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }
    
    type();
}

// ========================================
// LOADING ANIMATION
// ========================================

function hideLoader() {
    const loader = document.querySelector('.loader');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }, 1000);
    }
}

// ========================================
// INITIALIZE ALL FUNCTIONS WHEN DOM IS READY
// ========================================

function initializeWebsite() {
    console.log('🚀 Initializing Enhanced Portfolio...');
    
    // Initialize certificate carousel
    initializeCertificateCarousel();
    
    // Initialize skills section animations
    observeSkills();
    
    // Initialize smooth scrolling
    initializeSmoothScroll();
    
    // Create scroll to top button
    createScrollToTopButton();
    
    // Initialize lazy loading
    initializeLazyLoading();
    
    // Display certifications (if needed)
    displayCertifications(certifications);
    
    // Hide loader
    hideLoader();
    
    console.log('✅ Portfolio initialization complete!');
}

// Run initialization when DOM is fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeWebsite);
} else {
    // DOM is already loaded
    initializeWebsite();
}

// ========================================
// KEYBOARD NAVIGATION FOR CERTIFICATE CAROUSEL
// ========================================

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        showCertificate('left');
    } else if (e.key === 'ArrowRight') {
        showCertificate('right');
    }
});

// ========================================
// PERFORMANCE MONITORING (Development Only)
// ========================================

if (window.performance) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`⚡ Page Load Time: ${pageLoadTime}ms`);
    });
}

// ========================================
// EXPORT FUNCTIONS (If using modules)
// ========================================

// Uncomment if using ES6 modules
// export { showCertificate, selectCertificate, observeSkills };
