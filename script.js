// ============================================
// MODERN PORTFOLIO - COMPLETE JAVASCRIPT
// ============================================

// Certificate Data
const certificates = [
    {
        title: "Professional Practice in Software Development",
        issuer: "Department of Computer Science & Engineering, University of Moratuwa",
        image: "uploads/Professional_Practice_in_Software_Development_E-Certificate.png",
        pdf: "uploads/Professional_Practice_in_Software_Development_E-Certificate.pdf"
    },
    {
        title: "Server-side Web Programming",
        issuer: "Department of Information Technology, University of Moratuwa",
        image: "uploads/Server-side_Web_Programming_E-Certificate.png",
        pdf: "uploads/Server-side_Web_Programming_E-Certificate.pdf"
    },
    {
        title: "Front-End Web Development",
        issuer: "Department of Information Technology, University of Moratuwa",
        image: "uploads/Front-End_Web_Development_E-Certificate.png",
        pdf: "uploads/Front-End_Web_Development_E-Certificate.pdf"
    },
    {
        title: "Web Design for Beginners",
        issuer: "Department of Information Technology, University of Moratuwa",
        image: "uploads/Web_Design_for_Beginners_E-Certificate.png",
        pdf: "uploads/Web_Design_for_Beginners_E-Certificate.pdf"
    },
    {
        title: "Python Programming",
        issuer: "Department of Computer Science & Engineering, University of Moratuwa",
        image: "uploads/Python_Programming_E-Certificate.png",
        pdf: "uploads/Python_Programming_E-Certificate.pdf"
    },
    {
        title: "Python for Beginners",
        issuer: "Department of Computer Science & Engineering, University of Moratuwa",
        image: "uploads/Python_for_Beginners_E-Certificate.png",
        pdf: "uploads/Python_for_Beginners_E-Certificate.pdf"
    },
    {
        title: "Agile Project Management in ICT Projects",
        issuer: "Department of Computer Science & Engineering, University of Moratuwa",
        image: "uploads/Agile_Project_Management_E-Certificate.png",
        pdf: "uploads/Agile_Project_Management_E-Certificate.pdf"
    },
    {
        title: "Foundations of Project Management",
        issuer: "Department of Civil Engineering, University of Moratuwa",
        image: "uploads/Foundations_of_Project_Management_E-Certificate.png",
        pdf: "uploads/Foundations_of_Project_Management_E-Certificate.pdf"
    },
    {
        title: "Project Scope and Schedule Management",
        issuer: "Department of Civil Engineering, University of Moratuwa",
        image: "uploads/Project_Scope_and_Schedule_Management_E-Certificate.png",
        pdf: "uploads/Project_Scope_and_Schedule_Management_E-Certificate.pdf"
    },
    {
        title: "Project Contract Law and Management",
        issuer: "Department of Civil Engineering, University of Moratuwa",
        image: "uploads/Project_Contract_Law_and_Management_E-Certificate.png",
        pdf: "uploads/Project_Contract_Law_and_Management_E-Certificate.pdf"
    },
    {
        title: "Project Communication and Stakeholder Management",
        issuer: "Department of Civil Engineering, University of Moratuwa",
        image: "uploads/Project_Communication_and_Stakeholder_Management_E-Certificate.png",
        pdf: "uploads/Project_Communication_and_Stakeholder_Management_E-Certificate.pdf"
    },
    {
        title: "ISC2 Candidate",
        issuer: "International Information System Security Certification Consortium",
        image: "uploads/isc2-candidate.png",
        pdf: "uploads/isc2-candidate.png"
    },
    {
        title: "CC Domain 1: Security Principles",
        issuer: "ISC2 - Learner ID: b621ed8a-a322-4fa1-b1f6-4768cb2f6c5b",
        image: "uploads/CC Domain 1 Security Principles.png",
        pdf: "uploads/CC Domain 1 Security Principles.pdf"
    },
    {
        title: "CC Domain 2: Incident Response, BC & DR",
        issuer: "ISC2 - Learner ID: b621ed8a-a322-4fa1-b1f6-4768cb2f6c5b",
        image: "uploads/CC Domain 2 Incidents Response, Business Continuity and Disaster Recovery Concepts.png",
        pdf: "uploads/CC Domain 2 Incidents Response, Business Continuity and Disaster Recovery Concepts.pdf"
    },
    {
        title: "CC Domain 3: Access Control Concepts",
        issuer: "ISC2 - Learner ID: b621ed8a-a322-4fa1-b1f6-4768cb2f6c5b",
        image: "uploads/CC Domain 3 Access Controls Concepts.png",
        pdf: "uploads/CC Domain 3 Access Controls Concepts.pdf"
    },
    {
        title: "CC Domain 4: Network Security",
        issuer: "ISC2 - Learner ID: b621ed8a-a322-4fa1-b1f6-4768cb2f6c5b",
        image: "uploads/CC Domain 4 Network Security.png",
        pdf: "uploads/CC Domain 4 Network Security.pdf"
    },
    {
        title: "CC Domain 5: Security Operations",
        issuer: "ISC2 - Learner ID: b621ed8a-a322-4fa1-b1f6-4768cb2f6c5b",
        image: "uploads/CC Domain 5 Securitys Operations.png",
        pdf: "uploads/CC Domain 5 Securitys Operations.pdf"
    },
    {
        title: "CC Course Pre-assessment",
        issuer: "ISC2 - Learner ID: b621ed8a-a322-4fa1-b1f6-4768cb2f6c5b",
        image: "uploads/CC Course Pre-assessment.png",
        pdf: "uploads/CC Course Pre-assessment.pdf"
    },
    {
        title: "CC Course Conclusion & Final Assessment",
        issuer: "ISC2 - Learner ID: b621ed8a-a322-4fa1-b1f6-4768cb2f6c5b",
        image: "uploads/CCCourse Conclusion & Finalt Assessment.png",
        pdf: "uploads/CCCourse Conclusion & Finalt Assessment.pdf"
    },
    {
        title: "CC Certified in Cybersecurity (CC)",
        issuer: "ISC2 - Learner ID: b621ed8a-a322-4fa1-b1f6-4768cb2f6c5b",
        image: "uploads/CCCertified in Cybersecurity (CC).png",
        pdf: "uploads/CCCertified in Cybersecurity (CC).pdf"
    },
    {
        title: "What Is Generative AI?",
        issuer: "LinkedIn Learning by Pinar Seyhan Demirdag",
        image: "uploads/CertificateOfCompletion_What Is Generative AI.png",
        pdf: "uploads/CertificateOfCompletion_What Is Generative AI.pdf"
    },
    {
        title: "Generative AI: The Evolution of Thoughtful Online Search",
        issuer: "LinkedIn Learning by Ashley Kennedy",
        image: "uploads/CertificateOfCompletion_Generative AI The Evolution of Thoughtful Online Search.png",
        pdf: "uploads/CertificateOfCompletion_Generative AI The Evolution of Thoughtful Online Search.pdf"
    },
    {
        title: "Streamlining Your Work with Microsoft Copilot",
        issuer: "LinkedIn Learning by Nick Brazzi",
        image: "uploads/CertificateOfCompletion_Streamlining Your Work with Microsoft Copilot.png",
        pdf: "uploads/Streamlining Your Work with Microsoft Copilot.pdf"
    },
    {
        title: "Introduction to Artificial Intelligence (2023)",
        issuer: "LinkedIn Learning by Doug Rose",
        image: "uploads/CertificateOfCompletion_Introduction to Artificial Intelligence 2023.png",
        pdf: "uploads/CertificateOfCompletion_Introduction to Artificial Intelligence 2023.pdf"
    },
    {
        title: "Career Essentials in Generative AI by Microsoft and LinkedIn",
        issuer: "LinkedIn Learning",
        image: "uploads/CertificateOfCompletion_Career Essentials in Generative AI by Microsoft and LinkedIn.png",
        pdf: "uploads/CertificateOfCompletion_Career Essentials in Generative AI by Microsoft and LinkedIn.pdf"
    },
    {
        title: "Linux Unhatched",
        issuer: "Cisco",
        image: "uploads/LinuxUnhatched20241203-26-aeebkl.png",
        pdf: "uploads/LinuxUnhatched20241203-26-aeebkl.pdf"
    },
    {
        title: "SLIIT University Certificate",
        issuer: "Centre for Open and Distance Education - SLIIT",
        image: "uploads/MOHAMED WAJIHADEEN MOHAMED WALEED - 2024-11-27.png",
        pdf: "uploads/MOHAMED WAJIHADEEN MOHAMED WALEED - 2024-11-27.pdf"
    },
    {
        title: "Computer Hardware Basics",
        issuer: "Cisco",
        image: "uploads/certificate_wajiwaleed-gmail-com_c57c725d-02bf-4dfd-b996-45fcb40663d5.png",
        pdf: "uploads/certificate_wajiwaleed-gmail-com_c57c725d-02bf-4dfd-b996-45fcb40663d5.pdf"
    },
    {
        title: "CCNA: Introduction to Networks",
        issuer: "Cisco",
        image: "uploads/certificate_wajiwaleed-gmail-com_b039ef56-0375-4342-8889-f907ba316858 (1).png",
        pdf: "uploads/CCNAITNUpdated20250723-31-ovgeq6.pdf"
    }
];

// Current certificate index
let currentCertIndex = 0;

// ============================================
// TYPING ANIMATION
// ============================================
const typingTexts = [
    "Full-Stack Web Developer",
    "Network Technician",
    "Tech Enthusiast",
    "Problem Solver",
    "Open Source Contributor"
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;

    const currentText = typingTexts[textIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = 100;

    if (isDeleting) {
        typeSpeed /= 2;
    }

    if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typingTexts.length;
        typeSpeed = 500;
    }

    setTimeout(typeText, typeSpeed);
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function initScrollAnimations() {
    const sections = document.querySelectorAll('.modern-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });

    sections.forEach(section => {
        observer.observe(section);
    });
}

// ============================================
// SMOOTH SCROLL FOR NAV LINKS
// ============================================
function initSmoothScroll() {
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

// ============================================
// SCROLL TO TOP BUTTON
// ============================================
function initScrollToTop() {
    const scrollBtn = document.querySelector('.scroll-top');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ============================================
// CERTIFICATE CAROUSEL
// ============================================
function displayCertificate(index) {
    const display = document.querySelector('.certificate-display');
    const cert = certificates[index];
    
    display.innerHTML = `
        <h2>${cert.title}</h2>
        <p style="color: var(--text-secondary); margin-bottom: 20px;">${cert.issuer}</p>
        <img src="${cert.image}" alt="${cert.title}">
        <a href="${cert.pdf}" target="_blank">
            <i class="fas fa-download"></i> Download Certificate
        </a>
    `;

    // Update counter
    document.querySelector('.current-cert').textContent = index + 1;
    document.querySelector('.total-certs').textContent = certificates.length;

    // Update thumbnails
    updateThumbnails(index);
}

function updateThumbnails(activeIndex) {
    const thumbnails = document.querySelectorAll('.carousel-thumbnails img');
    thumbnails.forEach((thumb, index) => {
        if (index === activeIndex) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });
}

function navigateCert(direction) {
    currentCertIndex += direction;
    
    if (currentCertIndex < 0) {
        currentCertIndex = certificates.length - 1;
    } else if (currentCertIndex >= certificates.length) {
        currentCertIndex = 0;
    }
    
    displayCertificate(currentCertIndex);
}

function selectCertificate(index) {
    currentCertIndex = index;
    displayCertificate(index);
}

function initCertificateCarousel() {
    const thumbnailsContainer = document.querySelector('.carousel-thumbnails');
    
    // Create thumbnails
    certificates.forEach((cert, index) => {
        const thumb = document.createElement('img');
        thumb.src = cert.image;
        thumb.alt = cert.title;
        thumb.onclick = () => selectCertificate(index);
        thumbnailsContainer.appendChild(thumb);
    });
    
    // Display first certificate
    displayCertificate(0);
}

// Keyboard navigation for carousel
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        navigateCert(-1);
    } else if (e.key === 'ArrowRight') {
        navigateCert(1);
    }
});

// ============================================
// ACTIVE NAV LINK HIGHLIGHTING
// ============================================
function highlightActiveNav() {
    const sections = document.querySelectorAll('.modern-section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

// ============================================
// CURSOR EFFECT (Optional)
// ============================================
function initCursorEffect() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        requestAnimationFrame(animateCursor);
    }
    
    animateCursor();
}

// ============================================
// INITIALIZE EVERYTHING
// ============================================
function init() {
    console.log('🚀 Initializing Modern Portfolio...');
    
    // Start typing animation
    setTimeout(typeText, 1000);
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize smooth scrolling
    initSmoothScroll();
    
    // Initialize scroll to top button
    initScrollToTop();
    
    // Initialize certificate carousel
    initCertificateCarousel();
    
    // Highlight active nav link
    highlightActiveNav();
    
    // Optional: Custom cursor
    // initCursorEffect();
    
    console.log('✅ Portfolio Initialized Successfully!');
}

// Run initialization when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Performance monitoring
window.addEventListener('load', () => {
    if (window.performance) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`⚡ Page Load Time: ${pageLoadTime}ms`);
    }
});
