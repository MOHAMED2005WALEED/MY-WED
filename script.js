// ============================================
// MODERN PORTFOLIO - COMPLETE JAVASCRIPT
// With Projects Section
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
        issuer: "ISC2",
        image: "uploads/CC Domain 1 Security Principles.png",
        pdf: "uploads/CC Domain 1 Security Principles.pdf"
    },
    {
        title: "CC Domain 2: Incident Response, BC & DR",
        issuer: "ISC2",
        image: "uploads/CC Domain 2 Incidents Response, Business Continuity and Disaster Recovery Concepts.png",
        pdf: "uploads/CC Domain 2 Incidents Response, Business Continuity and Disaster Recovery Concepts.pdf"
    },
    {
        title: "CC Domain 3: Access Control Concepts",
        issuer: "ISC2",
        image: "uploads/CC Domain 3 Access Controls Concepts.png",
        pdf: "uploads/CC Domain 3 Access Controls Concepts.pdf"
    },
    {
        title: "CC Domain 4: Network Security",
        issuer: "ISC2",
        image: "uploads/CC Domain 4 Network Security.png",
        pdf: "uploads/CC Domain 4 Network Security.pdf"
    },
    {
        title: "CC Domain 5: Security Operations",
        issuer: "ISC2",
        image: "uploads/CC Domain 5 Securitys Operations.png",
        pdf: "uploads/CC Domain 5 Securitys Operations.pdf"
    },
    {
        title: "CC Course Pre-assessment",
        issuer: "ISC2",
        image: "uploads/CC Course Pre-assessment.png",
        pdf: "uploads/CC Course Pre-assessment.pdf"
    },
    {
        title: "CC Course Conclusion & Final Assessment",
        issuer: "ISC2",
        image: "uploads/CCCourse Conclusion & Finalt Assessment.png",
        pdf: "uploads/CCCourse Conclusion & Finalt Assessment.pdf"
    },
    {
        title: "CC Certified in Cybersecurity (CC)",
        issuer: "ISC2",
        image: "uploads/CCCertified in Cybersecurity (CC).png",
        pdf: "uploads/CCCertified in Cybersecurity (CC).pdf"
    },
    {
        title: "What Is Generative AI?",
        issuer: "LinkedIn Learning",
        image: "uploads/CertificateOfCompletion_What Is Generative AI.png",
        pdf: "uploads/CertificateOfCompletion_What Is Generative AI.pdf"
    },
    {
        title: "Generative AI: The Evolution of Thoughtful Online Search",
        issuer: "LinkedIn Learning",
        image: "uploads/CertificateOfCompletion_Generative AI The Evolution of Thoughtful Online Search.png",
        pdf: "uploads/CertificateOfCompletion_Generative AI The Evolution of Thoughtful Online Search.pdf"
    },
    {
        title: "Streamlining Your Work with Microsoft Copilot",
        issuer: "LinkedIn Learning",
        image: "uploads/CertificateOfCompletion_Streamlining Your Work with Microsoft Copilot.png",
        pdf: "uploads/Streamlining Your Work with Microsoft Copilot.pdf"
    },
    {
        title: "Introduction to Artificial Intelligence (2023)",
        issuer: "LinkedIn Learning",
        image: "uploads/CertificateOfCompletion_Introduction to Artificial Intelligence 2023.png",
        pdf: "uploads/CertificateOfCompletion_Introduction to Artificial Intelligence 2023.pdf"
    },
    {
        title: "Career Essentials in Generative AI",
        issuer: "Microsoft & LinkedIn",
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
        issuer: "SLIIT",
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
    },
    {
        title: "CCNA: Switching, Routing, and Wireless Essentials",
        issuer: "Cisco",
        image: "uploads/CCNA-_Switching-_Routing-_and_Wireless_Essentials_certificate_wajiwaleed-gmail-com_fd3798d0-18e8-495a-ab4e-f122f8368a46.png",
        pdf: "uploads/CCNA-_Switching-_Routing-_and_Wireless_Essentials_certificate_wajiwaleed-gmail-com_fd3798d0-18e8-495a-ab4e-f122f8368a46.pdf"
    }
];

// Project photos data
const projectPhotos = {
    server: [
        { src: 'projects/server1.jpg', title: 'Windows Server Setup', desc: 'Initial server configuration with RAID setup' },
        { src: 'projects/server2.jpg', title: 'RAID Configuration', desc: 'Setting up RAID arrays for data redundancy' },
        { src: 'projects/server3.jpg', title: 'Active Directory Setup', desc: 'Configuring Active Directory and user accounts' },
        { src: 'projects/server4.jpg', title: 'DNS & DHCP Services', desc: 'Network services configuration' },
        { src: 'projects/server5.jpg', title: 'WDS Deployment', desc: 'Windows Deployment Services setup' },
        { src: 'projects/server6.jpg', title: 'PXE Boot Testing', desc: 'Testing simultaneous deployment' },
        { src: 'projects/server7.jpg', title: 'Client PC Configuration', desc: 'Joining clients to domain' },
        { src: 'projects/server8.jpg', title: 'Final Testing', desc: 'Complete system testing and verification' },
        { src: 'projects/server9.jpg', title: 'Final Testing', desc: 'Complete system testing and verification' }
    ],
    cisco: [
        { src: 'projects/cisco1.jpg', title: 'Cisco Router Setup', desc: 'Initial router configuration' },
        { src: 'projects/cisco2.jpg', title: 'ACL Configuration', desc: 'Extended Access Control Lists setup' },
        { src: 'projects/cisco3.jpg', title: 'Network Testing', desc: 'Testing device access control' },
        { src: 'projects/cisco4.jpg', title: 'Wi-Fi Security', desc: 'Wireless network security testing' },
        { src: 'projects/cisco5.jpg', title: 'Final Verification', desc: 'Complete security verification' }
    ],
    mac: [
        { src: 'projects/mac1.jpg', title: 'Initial Assessment', desc: 'Diagnosing hardware issues' },
        { src: 'projects/mac2.jpg', title: 'Component Replacement', desc: 'Power supply and display replacement' },
        { src: 'projects/mac3.jpg', title: 'Testing Phase', desc: 'System testing after repair' },
        { src: 'projects/mac4.jpg', title: 'Final Setup', desc: 'Complete system restoration' }
    ],
    isp: [
        { src: 'projects/isp1.jpg', title: 'ISP Simulation Setup', desc: '4G router configuration' },
        { src: 'projects/isp2.jpg', title: 'Cisco Router Config', desc: 'NAT overload (PAT) configuration' },
        { src: 'projects/isp3.jpg', title: 'Network Topology', desc: 'Packet Tracer simulation' },
        { src: 'projects/isp4.jpg', title: 'Testing Results', desc: 'Internet access verification' }
    ],
    asd: [
        { src: 'projects/asd1.jpg', title: 'Project Planning', desc: 'Initial network design and planning' },
        { src: 'projects/asd2.jpg', title: 'Cable Installation', desc: 'CAT6 cabling installation' },
        { src: 'projects/asd3.jpg', title: 'Access Point Setup', desc: 'Wireless access point installation' },
        { src: 'projects/asd4.jpg', title: 'Network Configuration', desc: 'Router and switch configuration' },
        { src: 'projects/asd5.jpg', title: 'Testing Phase', desc: 'Network connectivity testing' },
        { src: 'projects/asd6.jpg', title: 'Team Collaboration', desc: 'Working with NVTI team' },
        { src: 'projects/asd7.jpg', title: 'Cable Management', desc: 'Professional cable management' },
        { src: 'projects/asd8.jpg', title: 'Equipment Setup', desc: 'Network equipment installation' },
        { src: 'projects/asd9.jpg', title: 'Configuration Testing', desc: 'System configuration verification' },
        { src: 'projects/asd10.jpg', title: 'Final Setup', desc: 'Complete lab network ready' },
        { src: 'projects/asd11.jpg', title: 'Network Documentation', desc: 'Documenting network setup' },
        { src: 'projects/asd12.jpg', title: 'Team Work', desc: 'Collaborative project completion' },
        { src: 'projects/asd13.jpg', title: 'Testing & Verification', desc: 'Final system testing' },
        { src: 'projects/asd14.jpg', title: 'Wireless Testing', desc: 'Wi-Fi connectivity verification' },
        { src: 'projects/asd15.jpg', title: 'Infrastructure Complete', desc: 'Completed network infrastructure' },
        { src: 'projects/asd16.jpg', title: 'Project Success', desc: 'Successful project completion' },
        { src: 'projects/asd17.jpg', title: 'Lab Ready', desc: 'ASD Lab ready for use' },
        { src: 'projects/asd18.jpg', title: 'Network Operational', desc: 'Fully operational network' },
        { src: 'projects/asd19.jpg', title: 'Team Achievement', desc: 'Project team achievement' }
    ],
    nat: [
        { src: 'projects/nat1.jpg', title: 'OSPF Configuration', desc: 'Open Shortest Path First setup' },
        { src: 'projects/nat2.jpg', title: 'NAT Overload Setup', desc: 'Port Address Translation config' },
        { src: 'projects/nat3.jpg', title: 'Network Testing', desc: 'Routing protocol verification' },
        { src: 'projects/nat4.jpg', title: 'Final Verification', desc: 'Complete network testing' }
    ]
};

// Current indexes
let currentCertIndex = 0;
let currentProject = '';
let currentPhotoIndex = 0;

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

    document.querySelector('.current-cert').textContent = index + 1;
    document.querySelector('.total-certs').textContent = certificates.length;

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
    
    certificates.forEach((cert, index) => {
        const thumb = document.createElement('img');
        thumb.src = cert.image;
        thumb.alt = cert.title;
        thumb.onclick = () => selectCertificate(index);
        thumbnailsContainer.appendChild(thumb);
    });
    
    displayCertificate(0);
}

// ============================================
// PROJECTS SECTION FUNCTIONALITY
// ============================================

// Project filtering
function initProjectFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            projectItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    item.classList.remove('hidden');
                    item.style.animation = 'fadeIn 0.6s ease-out';
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
}

// Open project modal
function openProjectModal(projectName, photoIndex) {
    const modal = document.getElementById('projectModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const currentPhotoSpan = document.getElementById('currentPhoto');
    const totalPhotosSpan = document.getElementById('totalPhotos');
    const thumbnailsContainer = document.getElementById('modalThumbnails');

    currentProject = projectName;
    currentPhotoIndex = photoIndex;

    const photos = projectPhotos[projectName];
    const photo = photos[photoIndex];

    modalImage.src = photo.src;
    modalTitle.textContent = photo.title;
    modalDescription.textContent = photo.desc;
    currentPhotoSpan.textContent = photoIndex + 1;
    totalPhotosSpan.textContent = photos.length;

    thumbnailsContainer.innerHTML = '';
    photos.forEach((p, index) => {
        const thumb = document.createElement('img');
        thumb.src = p.src;
        thumb.alt = p.title;
        if (index === photoIndex) thumb.classList.add('active');
        thumb.onclick = () => selectProjectPhoto(index);
        thumbnailsContainer.appendChild(thumb);
    });

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close project modal
function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Change project photo
function changeProjectPhoto(direction) {
    const photos = projectPhotos[currentProject];
    currentPhotoIndex += direction;

    if (currentPhotoIndex < 0) {
        currentPhotoIndex = photos.length - 1;
    } else if (currentPhotoIndex >= photos.length) {
        currentPhotoIndex = 0;
    }

    const photo = photos[currentPhotoIndex];
    document.getElementById('modalImage').src = photo.src;
    document.getElementById('modalTitle').textContent = photo.title;
    document.getElementById('modalDescription').textContent = photo.desc;
    document.getElementById('currentPhoto').textContent = currentPhotoIndex + 1;

    const thumbnails = document.querySelectorAll('.modal-thumbnails img');
    thumbnails.forEach((thumb, index) => {
        thumb.classList.toggle('active', index === currentPhotoIndex);
    });
}

// Select specific photo
function selectProjectPhoto(index) {
    currentPhotoIndex = index;
    const photo = projectPhotos[currentProject][index];
    document.getElementById('modalImage').src = photo.src;
    document.getElementById('modalTitle').textContent = photo.title;
    document.getElementById('modalDescription').textContent = photo.desc;
    document.getElementById('currentPhoto').textContent = index + 1;

    const thumbnails = document.querySelectorAll('.modal-thumbnails img');
    thumbnails.forEach((thumb, idx) => {
        thumb.classList.toggle('active', idx === index);
    });
}

// ============================================
// KEYBOARD NAVIGATION
// ============================================
document.addEventListener('keydown', (e) => {
    // Certificate carousel navigation
    if (e.key === 'ArrowLeft' && !document.getElementById('projectModal').classList.contains('active')) {
        navigateCert(-1);
    } else if (e.key === 'ArrowRight' && !document.getElementById('projectModal').classList.contains('active')) {
        navigateCert(1);
    }
    
    // Project modal navigation
    const modal = document.getElementById('projectModal');
    if (modal.classList.contains('active')) {
        if (e.key === 'Escape') {
            closeProjectModal();
        } else if (e.key === 'ArrowLeft') {
            changeProjectPhoto(-1);
        } else if (e.key === 'ArrowRight') {
            changeProjectPhoto(1);
        }
    }
});

// Close modal on outside click
document.getElementById('projectModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'projectModal') {
        closeProjectModal();
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
// INITIALIZE EVERYTHING
// ============================================
function init() {
    console.log('🚀 Initializing Modern Portfolio...');
    
    setTimeout(typeText, 1000);
    initScrollAnimations();
    initSmoothScroll();
    initScrollToTop();
    initCertificateCarousel();
    initProjectFilter();
    highlightActiveNav();
    
    console.log('✅ Portfolio Initialized Successfully!');
}

// Run initialization
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
