// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animate hamburger menu
        menuToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu && menuToggle) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Form Submission Handler
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());
        
        // Build WhatsApp message
        const message = `Nama anak: ${data['child-name']}
Usia: ${data['age']}
No Telp: ${data['phone']}
Pesan: ${data['message'] || '-'}`;
        
        // WhatsApp number (without + and spaces)
        const whatsappNumber = '6285229552707';
        
        // Create WhatsApp URL
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        
        // Open WhatsApp in new tab
        window.open(whatsappURL, '_blank');
        
        // Reset form
        contactForm.reset();
    });
}

// Notification System
function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${type === 'success' ? '✓' : 'ℹ'}</span>
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles if not already present
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.innerHTML = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                background: white;
                padding: 1rem 1.5rem;
                border-radius: 10px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                z-index: 10000;
                animation: slideIn 0.3s ease-out;
                max-width: 400px;
            }
            
            .notification-success {
                border-left: 4px solid #bbe000;
            }
            
            .notification-error {
                border-left: 4px solid #ff3131;
            }
            
            .notification-content {
                display: flex;
                align-items: center;
                gap: 1rem;
            }
            
            .notification-icon {
                font-size: 1.5rem;
                font-weight: bold;
                color: #bbe000;
            }
            
            .notification-message {
                flex: 1;
                color: #2C3E50;
            }
            
            .notification-close {
                background: none;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
                color: #7f8c8d;
                padding: 0;
                line-height: 1;
            }
            
            .notification-close:hover {
                color: #2C3E50;
            }
            
            @keyframes slideIn {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(400px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Close button handler
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Scroll Animation for Cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.about-card, .curriculum-card, .benefit-item');
    
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
});

// Console message for developers
console.log('%c🤖 Littlerobo.id - Belajar Robotika dengan LEGO! 🧱', 
    'color: #2044bc; font-size: 20px; font-weight: bold; padding: 10px;');
console.log('%cTertarik dengan website ini? Hubungi kami di info@littlerobo.id', 
    'color: #f4c720; font-size: 14px;');
