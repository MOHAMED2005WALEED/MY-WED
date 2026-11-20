// EmailJS settings for the public portfolio contact form.
function initContactForm() {
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');
    const submit = form.querySelector('.submit-btn');
    const initialLabel = submit.innerHTML;

    if (window.emailjs) {
        emailjs.init("vm4pR01WuWObBIS3W");
    }

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        if (submit.disabled) return;

        const params = {
            from_name: form.querySelector('#name').value.trim(),
            from_email: form.querySelector('#email').value.trim(),
            subject: form.querySelector('#subject').value.trim(),
            message: form.querySelector('#message').value.trim(),
            to_name: 'Mohamed Waleed'
        };

        submit.disabled = true;
        submit.textContent = 'Sending…';
        status.className = 'form-status pending';
        status.textContent = 'Sending your message…';

        try {
            await emailjs.send('service_yvkz2tu', 'template_qc0v5uk', params);
            form.reset();
            status.className = 'form-status success';
            status.textContent = 'Message sent. Thank you for getting in touch.';
        } catch {
            status.className = 'form-status error';
            status.textContent = 'Your message could not be sent. Please try again or use the direct email link.';
            return;
        } finally {
            submit.disabled = false;
            submit.innerHTML = initialLabel;
        }

        try {
            await emailjs.send('service_yvkz2tu', 'template_autoreply', params);
        } catch (error) {
            console.warn('Contact confirmation email could not be sent.', error.status);
        }
    });
}

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
        title: "Introduction to Software Quality Assurance",
        issuer: "Department of Computer Science & Engineering, Faculty of Engineering, University of Moratuwa",
        image: "uploads/Introduction_to_Software_Quality_Assurance_E-Certificate.png",
        pdf: "uploads/Introduction_to_Software_Quality_Assurance_E-Certificate.pdf"
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
        title: "LFS101: Introduction to Linux",
        issuer: "The Linux Foundation",
        image: "uploads/mohamed-waleed-06239dae-f803-4140-aa8a-566dbff12bf6-certificate.png",
        pdf: "uploads/mohamed-waleed-06239dae-f803-4140-aa8a-566dbff12bf6-certificate.pdf"
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
        pdf: "uploads/CertificateOfCompletion_Streamlining Your Work with Microsoft Copilot.pdf"
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
        title: "AI/ML Engineer - Stage 1",
        issuer: "Centre for Open and Distance Education - SLIIT",
        image: "uploads/MOHAMED WAJIHADEEN MOHAMED WALEED - 2025-01-21.png",
        pdf: "uploads/MOHAMED WAJIHADEEN MOHAMED WALEED - 2025-01-21.pdf"
    },
    {
        title: "AI/ML Engineer - Stage 2",
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
    },
    {
        title: "CCNA: Switching, Routing, and Wireless Essentials",
        issuer: "Cisco",
        image: "uploads/CCNA-_Switching-_Routing-_and_Wireless_Essentials_certificate_wajiwaleed-gmail-com_fd3798d0-18e8-495a-ab4e-f122f8368a46.png",
        pdf: "uploads/CCNA-_Switching-_Routing-_and_Wireless_Essentials_certificate_wajiwaleed-gmail-com_fd3798d0-18e8-495a-ab4e-f122f8368a46.pdf"
    },
    {
        title: "IT Essentials",
        issuer: "Cisco",
        image: "uploads/IT_Essentials_certificate_wajiwaleed-gmail-com_e5b99593-e547-42f5-99e4-b0c5be1a3db8.png",
        pdf: "uploads/IT_Essentials_certificate_wajiwaleed-gmail-com_e5b99593-e547-42f5-99e4-b0c5be1a3db8.pdf"
    },
    {
        title: "Cybersecurity Essentials",
        issuer: "Cisco",
        image: "uploads/Junior_Cybersecurity_Analyst_Career_Path_certificate_wajiwaleed-gmail-com_0774fca6-50a4-4bf8-b2ab-5d6c7c8eb245.png",
        pdf: "uploads/Junior_Cybersecurity_Analyst_Career_Path_certificate_wajiwaleed-gmail-com_0774fca6-50a4-4bf8-b2ab-5d6c7c8eb245.pdf"
    },
    {
        title: "Linux Essentials",
        issuer: "Cisco",
        image: "uploads/Linux_Essentials_certificate_wajiwaleed-gmail-com_7bad24e4-4bc5-4d14-af95-c50bfa1d3449.png",
        pdf: "uploads/Linux_Essentials_certificate_wajiwaleed-gmail-com_7bad24e4-4bc5-4d14-af95-c50bfa1d3449.pdf"
    },
    {
        title: "Cyber Threat Management",
        issuer: "Cisco",
        image: "uploads/Cyber_Threat_Management_certificate_wajiwaleed-gmail-com_55510237-65a1-4f11-a4cf-2497fababaf4.png",
        pdf: "uploads/Cyber_Threat_Management_certificate_wajiwaleed-gmail-com_55510237-65a1-4f11-a4cf-2497fababaf4.pdf"
    },
    {
        title: "Getting Started in Cybersecurity 3.0",
        issuer: "Fortinet",
        image: "uploads/Course_Completion_Certificate.png",
        pdf: "uploads/Course_Completion_Certificate.pdf"
    },
    {
        title: "Introduction to the Threat Landscape 3.0",
        issuer: "Fortinet",
        image: "uploads/Course_Completion_Certificate (1).png",
        pdf: "uploads/Course_Completion_Certificate (1).pdf"
    },
    {
        title: "mastercard Cybersecurity Completion Certificate",
        issuer: "Forage",
        image: "uploads/vcKAB5yYAgvemepGQ_mfxGwGDp6WkQmtmTf_693fb119f5b6d946ccdb7dac_1765787402596_completion_certificate.png",
        pdf: "uploads/vcKAB5yYAgvemepGQ_mfxGwGDp6WkQmtmTf_693fb119f5b6d946ccdb7dac_1765787402596_completion_certificate.pdf"
    },
    {
        title: "Goodwin Life Sciences Litigation Completion Certificate",
        issuer: "Forage",
        image: "uploads/uZqJsKaMTf2dCPEZo_6bkYm7kdJSEgiSubN_693fb119f5b6d946ccdb7dac_1765791447944_completion_certificate.png",
        pdf: "uploads/uZqJsKaMTf2dCPEZo_6bkYm7kdJSEgiSubN_693fb119f5b6d946ccdb7dac_1765791447944_completion_certificate.pdf"
    },
    {
        title: "Goodwin Private Equity M&A Completion Certificate",
        issuer: "Forage",
        image: "uploads/yMFuamWJpSWnwq9HZ_6bkYm7kdJSEgiSubN_693fb119f5b6d946ccdb7dac_1765790198927_completion_certificate.png",
        pdf: "uploads/yMFuamWJpSWnwq9HZ_6bkYm7kdJSEgiSubN_693fb119f5b6d946ccdb7dac_1765790198927_completion_certificate.pdf"
    },
    {
        title: "Diploma in English",
        issuer: "Sri Lanka English Language Graduates' Association (SLEGA)",
        image: "uploads/Diploma in English.png",
        pdf: "uploads/Diploma in English.pdf"
    },
    {
        title: "Diploma in English",
        issuer: "Sri Lanka English Language Graduates' Association (SLEGA)",
        image: "uploads/Diploma in English 2.png",
        pdf: "uploads/Diploma in English 2.pdf"
    },
    {
        title: "Diploma in English Language",
        issuer: "Southern Province English & IT Training Academy",
        image: "uploads/Diploma in English Language.png",
        pdf: "uploads/Diploma in English Language.pdf"
    },
    {
        title: "Diploma in Information Technology",
        issuer: "Southern Province English & IT Training Academy",
        image: "uploads/Diploma in Information Technology.png",
        pdf: "uploads/Diploma in Information Technology.pdf"
    },
    {
        title: "Program in Computer Literacy - 2018",
        issuer: "Explorer - School of Information Technology",
        image: "uploads/Program in Computer Literacy - 2018.png",
        pdf: "uploads/Program in Computer Literacy - 2018.pdf"
    },
    {
        title: "Media Club Appreciation Certificate",
        issuer: "Sudharma College - Galle, Media Club",
        image: "uploads/Media Club Appreciation Certificate.png",
        pdf: "uploads/Media Club Appreciation Certificate.pdf"
    },
    {
        title: "Media Workshop Participation Certificate",
        issuer: "Old Pupils' Association of Olcott College - Galle",
        image: "uploads/Media Workshop Participation Certificate.png",
        pdf: "uploads/Media Workshop Participation Certificate.pdf"
    },
    {
        title: "Certificate of Honour - Senior Prefect",
        issuer: "Olcott College, Galle",
        image: "uploads/Certificate of Honour - Senior Prefect.png",
        pdf: "uploads/Certificate of Honour - Senior Prefect.pdf"
    },
    {
        title: "U.S. Embassy Certificate of Award",
        issuer: "U.S. Embassy Colombo",
        image: "uploads/U.S. Embassy Certificate of Award.png",
        pdf: "uploads/U.S. Embassy Certificate of Award.pdf"
    }
];

// Project photos data - INCLUDING NEW PROJECTS
const projectPhotos = {
    // NEW PROJECT 1: OSPF Multi-Area Network
    ospf: [
        { src: 'projects/ospf1.jpg', title: 'OSPF Network Topology', desc: 'Multi-area OSPF network design with Area 0 backbone and multiple LAN segments' },
        { src: 'projects/ospf2.jpg', title: 'Physical Lab Setup', desc: 'Complete lab with Cisco routers, switches, and multiple workstations' },
        { src: 'projects/ospf3.jpg', title: 'Router Configuration', desc: 'Cisco router stack setup with OSPF routing and PAT configuration' },
        { src: 'projects/ospf4.jpg', title: 'Network Verification - ipconfig', desc: 'Testing network connectivity with Windows ipconfig command' },
        { src: 'projects/ospf5.jpg', title: 'Ping Test Results', desc: 'Successful ping tests verifying OSPF routing between networks' },
        { src: 'projects/ospf6.jpg', title: 'Router Configuration Terminal', desc: 'Command-line interface showing OSPF and network configuration' },
        { src: 'projects/ospf7.jpg', title: 'Network Verification - YouTube', desc: 'Testing internet connectivity through configured OSPF network' },
        { src: 'projects/ospf8.jpg', title: 'Social Media Connectivity Test', desc: 'Verifying external network access through OSPF routing' },
        { src: 'projects/ospf9.jpg', title: 'Facebook Connectivity Test', desc: 'Testing web application access through the network' },
        { src: 'projects/ospf10.jpg', title: 'Web Access Verification', desc: 'Accessing external websites to verify NAT and routing configuration' },
        { src: 'projects/ospf11.jpg', title: 'OSPF Routing Table', desc: 'Detailed routing table showing OSPF learned routes and network topology' },
        { src: 'projects/ospf12.jpg', title: 'Final Network Verification', desc: 'Complete connectivity test with successful ping to all network segments' }
    ],

    // NEW PROJECT 2: Linux Server
    linuxserver: [
        { src: 'projects/linux1.jpg', title: 'Physical Server Setup', desc: 'HP ProLiant server hardware installation and initialization' },
        { src: 'projects/linux2.jpg', title: 'Ubuntu Server Boot', desc: 'Ubuntu Server 18.04 LTS installation and initial configuration' },
        { src: 'projects/linux3.jpg', title: 'Network Configuration', desc: 'Network setup and SSH connectivity testing with system information display' },
        { src: 'projects/linux4.jpg', title: 'System Administration', desc: 'Ubuntu Desktop settings interface showing network adapter configuration' }
    ],

    // NEW PROJECT 3: IP Surveillance
    ptzcam: [
        { src: 'projects/ptz1.jpg', title: 'Wi-Fi NVR Router Setup', desc: 'White wireless router configured for NVR system connectivity with active status LEDs' },
        { src: 'projects/ptz2.jpg', title: 'PTZ Camera - Front View', desc: 'Pan-Tilt-Zoom Wi-Fi camera with infrared LEDs for night vision' },
        { src: 'projects/ptz3.jpg', title: 'PTZ Camera - Side Profile', desc: 'Dual-head PTZ camera showing pan and tilt mechanisms' },
        { src: 'projects/ptz4.jpg', title: 'Camera Installation Setup', desc: 'Multiple IP cameras being configured with network equipment' },
        { src: 'projects/ptz5.jpg', title: 'Multi-Camera Configuration', desc: 'Team configuring multiple PTZ cameras with monitoring displays' },
        { src: 'projects/ptz6.jpg', title: 'Camera Testing and Pairing', desc: 'Hands-on camera pairing and testing with network equipment' },
        { src: 'projects/ptz7.jpg', title: 'NVR System Interface', desc: 'Camera management interface showing multiple camera feeds and controls' }
    ],

    // Wi-Fi NVR System
    nvr: [
        { src: 'projects/nvr1.jpg', title: 'Wi-Fi NVR Router Setup', desc: 'White wireless router with dual antennas for NVR system connectivity' },
        { src: 'projects/nvr2.jpg', title: 'Multi-Camera Monitoring', desc: 'Live surveillance feed showing multiple camera views on monitoring screen' },
        { src: 'projects/nvr3.jpg', title: 'Network Topology Design', desc: 'Detailed network diagram showing NVR system architecture and connections' },
        { src: 'projects/nvr4.jpg', title: 'Router Configuration', desc: 'Physical setup with network equipment and testing tools' },
        { src: 'projects/nvr5.jpg', title: 'Remote Access Setup', desc: 'Mobile and PC monitoring interface configuration' }
    ],

    // Access Point Configuration
    accesspoint: [
        { src: 'projects/ap1.jpg', title: 'Dual Workstation Lab', desc: 'Two workstations configured with Linksys access point for wireless testing' },
        { src: 'projects/ap2.jpg', title: 'Access Point Web Interface', desc: 'Linksys router configuration showing wireless settings and SSID setup' },
        { src: 'projects/ap3.jpg', title: 'Multi-Station Configuration', desc: 'Complete lab setup with access point and multiple testing devices' },
        { src: 'projects/ap4.jpg', title: 'Connectivity Verification', desc: 'Testing wireless connectivity with IP configuration and ping tests' }
    ],

    // CCNA Practical Assessment
    ccnatest: [
        { src: 'projects/ccna1.jpg', title: 'Network Lab Overview', desc: 'Complete CCNA practical assessment lab with router, switches, and PCs' },
        { src: 'projects/ccna2.jpg', title: 'Packet Tracer Topology', desc: 'CCNAv7 SRWE Skills Assessment network diagram showing VLANs and routing' },
        { src: 'projects/ccna3.jpg', title: 'Physical Lab Setup', desc: 'Real Cisco equipment configuration with multiple workstations' },
        { src: 'projects/ccna4.jpg', title: 'Router CLI Configuration', desc: 'Command-line interface showing VLAN and routing configuration verification' }
    ],

    // CCTV DVR Setup
    cctv: [
        { src: 'projects/dvr1.jpg', title: 'DVR System Configuration', desc: 'Two technicians setting up CCTV DVR system with monitor display' },
        { src: 'projects/dvr2.jpg', title: 'Camera Configuration', desc: 'Configuring camera connections and DVR settings in lab environment' },
        { src: 'projects/dvr3.jpg', title: 'Multi-Screen Monitoring', desc: 'Multiple monitor setup displaying live CCTV camera feeds' },
        { src: 'projects/dvr4.jpg', title: 'Complete CCTV Lab', desc: 'Fully operational CCTV system with DVR and monitoring equipment' }
    ],

    // DHCP Relay Agent
    dhcprelay: [
        { src: 'projects/dhcp1.jpg', title: 'Multi-Router Network', desc: 'Complex network topology with multiple Cisco routers and switches' },
        { src: 'projects/dhcp2.jpg', title: 'Server Configuration Display', desc: 'Windows Server showing DHCP Active Leases and IPv4 configuration' },
        { src: 'projects/dhcp3.jpg', title: 'Physical Lab Infrastructure', desc: 'Complete lab setup with routers, switches, and server equipment' },
        { src: 'projects/dhcp4.jpg', title: 'Network Verification', desc: 'Testing DHCP relay functionality across multiple network segments' }
    ],

    // EXISTING PROJECTS
    server: [
        { src: 'projects/server1.jpg', title: 'Server Lab Setup', desc: 'Physical server infrastructure with multiple workstations' },
        { src: 'projects/server2.jpg', title: 'Network Topology Design', desc: 'WDS and DHCP server architecture planning' },
        { src: 'projects/server3.jpg', title: 'RAID Storage System', desc: 'HP Smart Array RAID controller with dual drive configuration' },
        { src: 'projects/server4.jpg', title: 'Assessment Documentation', desc: 'NVTI Level 4 practical assessment requirements' },
        { src: 'projects/server5.jpg', title: 'WDS Configuration Tasks', desc: 'Windows Deployment Services implementation steps' },
        { src: 'projects/server6.jpg', title: 'Network Planning', desc: 'Server topology design with IP addressing scheme' },
        { src: 'projects/server7.jpg', title: 'RAID Array Status', desc: 'HP Array configuration showing RAID 1 with 146GB drives' },
        { src: 'projects/server8.jpg', title: 'System Verification', desc: 'Testing server connectivity with Cisco equipment' },
        { src: 'projects/server9.jpg', title: 'Complete Lab Setup', desc: 'Fully deployed server lab with client workstations' }
    ],
    cisco: [
        { src: 'projects/cisco1.jpg', title: 'Multi-Station Router Lab', desc: 'Cisco router lab setup with multiple workstations' },
        { src: 'projects/cisco2.jpg', title: 'Mobile SSH Access', desc: 'Remote router configuration via mobile SSH terminal' },
        { src: 'projects/cisco3.jpg', title: 'Router Configuration Lab', desc: 'Multi-router topology with switches and workstations' },
        { src: 'projects/cisco4.jpg', title: 'Network Documentation', desc: 'Router configuration commands and security testing' },
        { src: 'projects/cisco5.jpg', title: 'Windows Server Integration', desc: 'Cisco equipment integrated with Windows Server environment' }
    ],
    mac: [
        { src: 'projects/mac1.jpg', title: 'iMac Disassembly', desc: 'Opening iMac case for internal hardware access' },
        { src: 'projects/mac2.jpg', title: 'Hardware Diagnosis', desc: 'Inspecting internal components and circuit boards' },
        { src: 'projects/mac3.jpg', title: 'Workspace Overview', desc: 'Complete repair station with tools and parts' },
        { src: 'projects/mac4.jpg', title: 'Power Filter Module', desc: 'EMI filter component for power supply replacement' }
    ],
    isp: [
        { src: 'projects/isp1.jpg', title: 'Network Topology Design', desc: 'Packet Tracer ISP simulation with multiple routers' },
        { src: 'projects/isp2.jpg', title: '4G Router Integration', desc: 'Physical lab setup with 4G router and Cisco equipment' },
        { src: 'projects/isp3.jpg', title: 'Multi-Workstation Lab', desc: 'Complete ISP simulation lab with multiple endpoints' },
        { src: 'projects/isp4.jpg', title: 'Configuration Testing', desc: 'Router CLI configuration and connectivity verification' }
    ],
    asd: [
        { src: 'projects/asd1.jpg', title: 'Equipment Delivery', desc: 'Receiving Alta wireless access point equipment' },
        { src: 'projects/asd2.jpg', title: 'Network Infrastructure', desc: 'Installing network switch and cable management' },
        { src: 'projects/asd3.jpg', title: 'Access Point Installation', desc: 'Mounting wireless access point and router' },
        { src: 'projects/asd4.jpg', title: 'Equipment Installation', desc: 'Installing network equipment on wall' },
        { src: 'projects/asd5.jpg', title: 'Team Installation Work', desc: 'Technicians installing ceiling-mounted equipment' },
        { src: 'projects/asd6.jpg', title: 'Infrastructure Setup', desc: 'Setting up network infrastructure in progress' },
        { src: 'projects/asd7.jpg', title: 'Cable Management', desc: 'Installing structured cabling and trunking' },
        { src: 'projects/asd8.jpg', title: 'Lab Completion', desc: 'Completed network lab with modern facilities' },
        { src: 'projects/asd9.jpg', title: 'Project Planning', desc: 'Team planning and coordinating network design' },
        { src: 'projects/asd10.jpg', title: 'Cable Installation', desc: 'Installing CAT6 network cabling along walls' },
        { src: 'projects/asd11.jpg', title: 'Access Point Configuration', desc: 'Configuring wireless access point settings' },
        { src: 'projects/asd12.jpg', title: 'Router Configuration', desc: 'Team configuring network router and switches' },
        { src: 'projects/asd13.jpg', title: 'System Testing', desc: 'Testing network equipment and connectivity' },
        { src: 'projects/asd14.jpg', title: 'Outdoor Cable Work', desc: 'Installing external network cabling' },
        { src: 'projects/asd15.jpg', title: 'Cable Management', desc: 'Organizing and managing network cables' },
        { src: 'projects/asd16.jpg', title: 'Equipment Mounting', desc: 'Installing network equipment at height' },
        { src: 'projects/asd17.jpg', title: 'Cable Routing', desc: 'Routing and organizing network cables' },
        { src: 'projects/asd18.jpg', title: 'Switch Installation', desc: 'Installing TP-Link Gigabit managed switch' },
        { src: 'projects/asd19.jpg', title: 'Network Documentation', desc: 'Documenting CAT6 UTP cable specifications' },
        { src: 'projects/asd20.jpg', title: 'Alta Access Point', desc: 'Alta wireless access point ready for deployment' }
    ],
    nat: [
        { src: 'projects/nat1.jpg', title: 'Network Lab Setup', desc: 'Cisco router and switch topology with dual workstations' },
        { src: 'projects/nat2.jpg', title: 'OSPF Network Design', desc: 'Multi-area OSPF topology in Packet Tracer simulation' },
        { src: 'projects/nat3.jpg', title: 'Lab Configuration', desc: 'Physical network lab with routers and testing equipment' },
        { src: 'projects/nat4.jpg', title: 'Router Verification', desc: 'Checking OSPF and NAT configuration via CLI' },
        { src: 'projects/nat5.jpg', title: 'Completed Lab Topology', desc: 'Fully configured routing lab with Dialog router integration' }
    ]
};

// Current indexes
let currentCertIndex = 0;
let currentProject = '';
let currentPhotoIndex = 0;

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
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
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
        <img src="${cert.image}" alt="${cert.title}" loading="lazy" decoding="async">
        <a href="${cert.pdf}" target="_blank" rel="noopener noreferrer">
            <i class="fas fa-download"></i> Download Certificate
        </a>
    `;

    document.querySelector('.current-cert').textContent = index + 1;
    document.querySelector('.total-certs').textContent = certificates.length;

    updateThumbnails(index);
}

function updateThumbnails(activeIndex) {
    const thumbnails = document.querySelectorAll('.carousel-thumbnails button');
    thumbnails.forEach((thumb, index) => {
        thumb.setAttribute('aria-pressed', String(index === activeIndex));
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
        thumbnailsContainer.appendChild(createThumbnail(cert.image, cert.title, () => selectCertificate(index)));
    });

    document.querySelector('.certificates-carousel').addEventListener('keydown', (event) => {
        handleArrowKeys(event, navigateCert);
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

    document.querySelectorAll('[data-count]').forEach((count) => {
        const category = count.dataset.count;
        count.textContent = category === 'all'
            ? projectItems.length
            : [...projectItems].filter((item) => item.dataset.category === category).length;
    });

    filterBtns.forEach((button) => {
        button.addEventListener('click', () => {
            filterBtns.forEach((filter) => {
                filter.classList.toggle('active', filter === button);
                filter.setAttribute('aria-pressed', String(filter === button));
            });

            projectItems.forEach((item) => {
                item.classList.toggle('hidden', button.dataset.filter !== 'all' && item.dataset.category !== button.dataset.filter);
            });
        });
    });
}

function createThumbnail(source, label, onClick) {
    const button = document.createElement('button');
    button.type = 'button';
    button.setAttribute('aria-label', label);
    button.addEventListener('click', onClick);

    const image = document.createElement('img');
    image.src = source;
    image.alt = '';
    image.loading = 'lazy';
    image.decoding = 'async';
    button.appendChild(image);
    return button;
}

const projectModal = document.getElementById('projectModal');
let galleryTrigger;
let previousBodyOverflow;

function openProjectModal(projectName, photoIndex, trigger) {
    const photos = projectPhotos[projectName];
    currentProject = projectName;

    const thumbnails = document.getElementById('modalThumbnails');
    thumbnails.replaceChildren(...photos.map((photo, index) =>
        createThumbnail(photo.src, photo.title, () => selectProjectPhoto(index))
    ));
    document.getElementById('totalPhotos').textContent = photos.length;
    selectProjectPhoto(photoIndex);

    galleryTrigger = trigger;
    previousBodyOverflow = document.body.style.overflow;
    projectModal.showModal();
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    projectModal.close();
    document.body.style.overflow = previousBodyOverflow;
    galleryTrigger.focus({ preventScroll: true });
}

projectModal.addEventListener('cancel', (event) => {
    event.preventDefault();
    closeProjectModal();
});

function changeProjectPhoto(direction) {
    const total = projectPhotos[currentProject].length;
    selectProjectPhoto((currentPhotoIndex + direction + total) % total);
}

function selectProjectPhoto(index) {
    currentPhotoIndex = index;
    const photo = projectPhotos[currentProject][index];
    const image = document.getElementById('modalImage');
    image.src = photo.src;
    image.alt = photo.title;
    document.getElementById('modalTitle').textContent = photo.title;
    document.getElementById('modalDescription').textContent = photo.desc;
    document.getElementById('currentPhoto').textContent = index + 1;

    document.querySelectorAll('.modal-thumbnails button').forEach((thumb, position) => {
        thumb.setAttribute('aria-pressed', String(position === index));
    });
}

function handleArrowKeys(event, navigate) {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault();
        navigate(event.key === 'ArrowLeft' ? -1 : 1);
    }
}

projectModal.addEventListener('keydown', (event) => {
    handleArrowKeys(event, changeProjectPhoto);
});

projectModal.addEventListener('click', (event) => {
    if (event.target === projectModal) closeProjectModal();
});

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
initContactForm();
initScrollToTop();
initCertificateCarousel();
initProjectFilter();
highlightActiveNav();
