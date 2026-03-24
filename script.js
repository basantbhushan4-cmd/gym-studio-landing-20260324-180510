document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    mobileMenuToggle.addEventListener('click', () => {
        // Toggle 'active' class on navMenu to show/hide
        navMenu.classList.toggle('active');

        // Adjust max-height for smooth animation
        if (navMenu.classList.contains('active')) {
            navMenu.style.maxHeight = navMenu.scrollHeight + "px";
        } else {
            navMenu.style.maxHeight = "0";
        }

        // Toggle icon
        const icon = mobileMenuToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times'); // Change to 'x' icon
    });

    // Close mobile menu when a nav link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navMenu.style.maxHeight = "0";
                const icon = mobileMenuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Check if it's an internal anchor link and not just '#'
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();

                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    const headerOffset = document.querySelector('.header').offsetHeight; // Get header height
                    const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    // Form Handling (Simulated)
    const contactForm = document.querySelector('.contact-form');
    const formMessage = document.getElementById('form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent actual form submission

            // Simulate form data collection
            const formData = new FormData(contactForm);
            const data = {};
            for (let [key, value] of formData.entries()) {
                data[key] = value;
            }

            console.log('Form Submitted:', data);

            // Simulate an API call
            setTimeout(() => {
                const success = Math.random() > 0.1; // 90% chance of success

                formMessage.classList.remove('success', 'error');
                formMessage.style.display = 'block';

                if (success) {
                    formMessage.classList.add('success');
                    formMessage.textContent = 'Thank you for your message! We will get back to you soon.';
                    contactForm.reset(); // Clear the form
                } else {
                    formMessage.classList.add('error');
                    formMessage.textContent = 'Oops! Something went wrong. Please try again later.';
                }

                // Hide message after a few seconds
                setTimeout(() => {
                    formMessage.style.display = 'none';
                    formMessage.textContent = '';
                }, 5000);

            }, 1000); // Simulate network delay
        });
    }

    // Optional: Add an animation for hero section on load
    const heroHeadline = document.querySelector('.hero-headline');
    const heroSubheadline = document.querySelector('.hero-subheadline');
    const ctaButtons = document.querySelector('.cta-buttons');

    if (heroHeadline && heroSubheadline && ctaButtons) {
        heroHeadline.style.opacity = '0';
        heroHeadline.style.transform = 'translateY(20px)';
        heroSubheadline.style.opacity = '0';
        heroSubheadline.style.transform = 'translateY(20px)';
        ctaButtons.style.opacity = '0';
        ctaButtons.style.transform = 'translateY(20px)';

        setTimeout(() => {
            heroHeadline.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
            heroHeadline.style.opacity = '1';
            heroHeadline.style.transform = 'translateY(0)';
        }, 300);

        setTimeout(() => {
            heroSubheadline.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
            heroSubheadline.style.opacity = '1';
            heroSubheadline.style.transform = 'translateY(0)';
        }, 600);

        setTimeout(() => {
            ctaButtons.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
            ctaButtons.style.opacity = '1';
            ctaButtons.style.transform = 'translateY(0)';
        }, 900);
    }
});