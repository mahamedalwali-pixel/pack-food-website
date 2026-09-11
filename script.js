/* ============================================
   PACK FOOD - JavaScript Functionality
   Language Switching, Interactivity, Animations
   ============================================ */

// State Management
let currentLanguage = 'ar';
let currentRating = 0;

// ============================================
// LANGUAGE SWITCHING SYSTEM
// ============================================

const languageSwitcher = {
    init() {
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(btn => {
            btn.addEventListener('click', () => this.switchLanguage(btn.dataset.lang));
        });
        
        // Load saved language preference or default to Arabic
        const savedLang = localStorage.getItem('packfood-lang') || 'ar';
        this.switchLanguage(savedLang);
    },

    switchLanguage(lang) {
        currentLanguage = lang;
        localStorage.setItem('packfood-lang', lang);

        // Update active button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            }
        });

        // Update HTML lang and direction
        const html = document.documentElement;
        html.lang = lang;
        html.dir = lang === 'ar' ? 'rtl' : 'ltr';

        // Update all text elements with data attributes
        document.querySelectorAll('[data-ar][data-en]').forEach(element => {
            const text = lang === 'ar' ? element.dataset.ar : element.dataset.en;
            
            // Handle different element types
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = text;
            } else {
                element.textContent = text;
            }
        });

        // Update buttons with data attributes
        document.querySelectorAll('button[data-ar][data-en]').forEach(btn => {
            btn.textContent = lang === 'ar' ? btn.dataset.ar : btn.dataset.en;
        });

        // Update links
        document.querySelectorAll('a[data-ar][data-en]').forEach(link => {
            link.textContent = lang === 'ar' ? link.dataset.ar : link.dataset.en;
        });
    }
};

// ============================================
// MOBILE NAVIGATION
// ============================================

const mobileNav = {
    init() {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.querySelector('.nav-menu');

        if (hamburger) {
            hamburger.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                this.animateHamburger(hamburger);
            });

            // Close menu when link is clicked
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    navMenu.classList.remove('active');
                    this.resetHamburger(hamburger);
                });
            });
        }
    },

    animateHamburger(hamburger) {
        const spans = hamburger.querySelectorAll('span');
        if (hamburger.querySelector('.nav-menu').classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(10px, 10px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
        } else {
            this.resetHamburger(hamburger);
        }
    },

    resetHamburger(hamburger) {
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
};

// ============================================
// MENU TABS FUNCTIONALITY
// ============================================

const menuTabs = {
    init() {
        const tabButtons = document.querySelectorAll('.tab-btn');
        const categories = document.querySelectorAll('.menu-category');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const category = button.dataset.category;

                // Update active button
                tabButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                // Show/hide categories
                categories.forEach(cat => {
                    if (cat.dataset.category === category) {
                        cat.style.display = 'contents';
                        this.animateItems(cat);
                    } else {
                        cat.style.display = 'none';
                    }
                });
            });
        });
    },

    animateItems(container) {
        const items = container.querySelectorAll('.menu-item');
        items.forEach((item, index) => {
            item.style.animation = `none`;
            setTimeout(() => {
                item.style.animation = `fadeUp 0.5s ease-out ${index * 0.1}s both`;
            }, 10);
        });
    }
};

// ============================================
// SMOOTH SCROLLING
// ============================================

const smoothScroll = {
    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (href !== '#' && document.querySelector(href)) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }
};

// ============================================
// REVIEW RATING SYSTEM
// ============================================

const reviewRating = {
    init() {
        const stars = document.querySelectorAll('.stars i');
        stars.forEach(star => {
            star.addEventListener('click', () => {
                currentRating = star.dataset.rating;
                this.updateStars(stars, currentRating);
            });

            star.addEventListener('mouseover', () => {
                this.updateStars(stars, star.dataset.rating);
            });
        });

        document.querySelector('.stars').addEventListener('mouseout', () => {
            this.updateStars(stars, currentRating);
        });
    },

    updateStars(stars, rating) {
        stars.forEach(star => {
            if (star.dataset.rating <= rating) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
    }
};

// ============================================
// FORM HANDLING
// ============================================

const formHandling = {
    init() {
        this.handleReviewForm();
        this.handleContactForm();
    },

    handleReviewForm() {
        const form = document.getElementById('reviewForm');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const name = form.querySelector('input[type="text"]').value;
                const review = form.querySelector('textarea').value;
                const rating = currentRating;

                if (name && review && rating) {
                    // Here you would send data to a server
                    this.showMessage('تم إرسال تقييمك بنجاح! | Review submitted successfully!');
                    form.reset();
                    currentRating = 0;
                    reviewRating.updateStars(document.querySelectorAll('.stars i'), 0);
                } else {
                    this.showMessage('يرجى ملء جميع الحقول | Please fill all fields');
                }
            });
        }
    },

    handleContactForm() {
        const form = document.getElementById('contactForm');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const name = form.querySelector('input[type="text"]').value;
                const email = form.querySelector('input[type="email"]').value;
                const message = form.querySelector('textarea').value;

                if (name && email && message) {
                    // Here you would send data to a server
                    this.showMessage('تم إرسال رسالتك بنجاح! | Message sent successfully!');
                    form.reset();
                } else {
                    this.showMessage('يرجى ملء جميع الحقول | Please fill all fields');
                }
            });
        }
    },

    showMessage(message) {
        // Create a toast message
        const toast = document.createElement('div');
        toast.style.cssText = `
            position: fixed;
            top: 100px;
            left: 50%;
            transform: translateX(-50%);
            background: linear-gradient(135deg, #D4713D, #F5A962);
            color: white;
            padding: 16px 24px;
            border-radius: 8px;
            font-weight: 600;
            z-index: 2000;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
            animation: slideDown 0.4s ease-out;
        `;
        toast.textContent = message;
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.style.animation = 'slideUp 0.4s ease-out';
            setTimeout(() => toast.remove(), 400);
        }, 3000);
    }
};

// ============================================
// SCROLL ANIMATIONS (Intersection Observer)
// ============================================

const scrollAnimations = {
    init() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('aos-animate');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('[data-aos]').forEach(element => {
            observer.observe(element);
        });
    }
};

// ============================================
// HEADER SCROLL BEHAVIOR
// ============================================

const headerScroll = {
    init() {
        const header = document.querySelector('.header');
        let lastScrollTop = 0;

        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > 100) {
                header.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.15)';
            } else {
                header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
            }

            lastScrollTop = scrollTop;
        });
    }
};

// ============================================
// GALLERY LIGHTBOX
// ============================================

const galleryLightbox = {
    init() {
        const galleryItems = document.querySelectorAll('.gallery-item');
        
        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const img = item.querySelector('img');
                this.openLightbox(img.src, img.alt);
            });
        });
    },

    openLightbox(src, alt) {
        const lightbox = document.createElement('div');
        lightbox.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 3000;
            animation: fadeIn 0.3s ease-out;
            cursor: pointer;
        `;

        const img = document.createElement('img');
        img.src = src;
        img.alt = alt;
        img.style.cssText = `
            max-width: 90%;
            max-height: 90vh;
            object-fit: contain;
            border-radius: 8px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        `;

        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '&times;';
        closeBtn.style.cssText = `
            position: absolute;
            top: 20px;
            right: 20px;
            background: rgba(255, 255, 255, 0.2);
            color: white;
            border: 2px solid white;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            font-size: 28px;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
        `;

        closeBtn.addEventListener('click', () => lightbox.remove());
        closeBtn.addEventListener('mouseover', () => {
            closeBtn.style.background = 'rgba(255, 255, 255, 0.3)';
            closeBtn.style.transform = 'scale(1.1)';
        });
        closeBtn.addEventListener('mouseout', () => {
            closeBtn.style.background = 'rgba(255, 255, 255, 0.2)';
            closeBtn.style.transform = 'scale(1)';
        });

        lightbox.appendChild(img);
        lightbox.appendChild(closeBtn);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) lightbox.remove();
        });

        document.body.appendChild(lightbox);
    }
};

// ============================================
// COUNTER ANIMATION (For Stats)
// ============================================

const counterAnimation = {
    animateValue(element, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            element.textContent = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }
};

// ============================================
// ADD FADE-IN/UP ANIMATION STYLES
// ============================================

const addAnimationStyles = () => {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes slideUp {
            from {
                opacity: 1;
                transform: translateY(0);
            }
            to {
                opacity: 0;
                transform: translateY(-20px);
            }
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        @keyframes fadeUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        [data-aos="fade-up"] {
            animation: fadeUp 0.6s ease-out backwards;
        }

        [data-aos="fade-right"] {
            animation: slideInRight 0.6s ease-out backwards;
        }

        [data-aos="zoom-in"] {
            animation: zoomIn 0.6s ease-out backwards;
        }

        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(30px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        @keyframes zoomIn {
            from {
                opacity: 0;
                transform: scale(0.9);
            }
            to {
                opacity: 1;
                transform: scale(1);
            }
        }
    `;
    document.head.appendChild(style);
};

// ============================================
// PERFORMANCE: LAZY LOAD IMAGES
// ============================================

const lazyLoadImages = {
    init() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src || img.src;
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }
};

// ============================================
// ACCESSIBILITY: KEYBOARD NAVIGATION
// ============================================

const keyboardNav = {
    init() {
        document.addEventListener('keydown', (e) => {
            // Close mobile menu on Escape
            if (e.key === 'Escape') {
                const navMenu = document.querySelector('.nav-menu');
                if (navMenu) navMenu.classList.remove('active');
            }

            // Skip to main content on keyboard navigation
            if (e.key === 'Tab') {
                document.body.style.scrollBehavior = 'auto';
            }
        });
    }
};

// ============================================
// INITIALIZATION ON DOM READY
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Add animation styles
    addAnimationStyles();

    // Initialize all modules
    languageSwitcher.init();
    mobileNav.init();
    menuTabs.init();
    smoothScroll.init();
    reviewRating.init();
    formHandling.init();
    scrollAnimations.init();
    headerScroll.init();
    galleryLightbox.init();
    lazyLoadImages.init();
    keyboardNav.init();

    // Log initialization (for debugging)
    console.log('Pack Food Website Initialized Successfully! 🍔');
});

// ============================================
// PERFORMANCE: PRELOAD CRITICAL RESOURCES
// ============================================

window.addEventListener('load', () => {
    // Preload next section images
    const preloadImages = () => {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            const imagePreload = new Image();
            imagePreload.src = img.src;
        });
    };
    preloadImages();
});

// ============================================
// ERROR HANDLING
// ============================================

window.addEventListener('error', (event) => {
    console.error('Error:', event.error);
    // Could send to error tracking service
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
});
