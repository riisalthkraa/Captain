/**
 * Cap'taine - Site Web
 * JavaScript pour les interactions
 */

// === Navigation Mobile ===
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('open');
            navToggle.classList.toggle('active');
        });

        // Fermer le menu quand on clique sur un lien
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('open');
                navToggle.classList.remove('active');
            });
        });
    }
});

// === FAQ Accordion ===
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        if (question) {
            question.addEventListener('click', function() {
                // Fermer les autres items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('open')) {
                        otherItem.classList.remove('open');
                    }
                });

                // Toggle l'item actuel
                item.classList.toggle('open');
            });
        }
    });
});

// === Formulaire de Contact ===
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Simuler l'envoi (à remplacer par votre logique d'envoi réelle)
            const formData = new FormData(contactForm);

            // Log pour debug (à supprimer en prod)
            console.log('Formulaire soumis:');
            for (let [key, value] of formData.entries()) {
                console.log(`${key}: ${value}`);
            }

            // Afficher le message de succès
            contactForm.style.display = 'none';
            if (formSuccess) {
                formSuccess.style.display = 'block';
            }

            // Alternative: Envoyer via un service comme Formspree, Netlify Forms, etc.
            // fetch('https://formspree.io/f/VOTRE_ID', {
            //     method: 'POST',
            //     body: formData,
            //     headers: {
            //         'Accept': 'application/json'
            //     }
            // }).then(response => {
            //     if (response.ok) {
            //         contactForm.style.display = 'none';
            //         formSuccess.style.display = 'block';
            //     }
            // });
        });
    }
});

// === Smooth Scroll pour les ancres ===
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');

            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();

                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// === Animation on Scroll (optionnel) ===
document.addEventListener('DOMContentLoaded', function() {
    // Observer pour les animations au scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observer les éléments avec la classe 'animate-on-scroll'
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
});

// === Navbar Background on Scroll ===
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');

    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
});

// === Copier le code (pour les pages techniques) ===
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.code-block').forEach(block => {
        // Ajouter un bouton de copie
        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-btn';
        copyBtn.textContent = 'Copier';
        copyBtn.style.cssText = `
            position: absolute;
            top: 8px;
            right: 8px;
            background: rgba(255,255,255,0.1);
            border: none;
            color: white;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 12px;
            cursor: pointer;
        `;

        block.style.position = 'relative';
        block.appendChild(copyBtn);

        copyBtn.addEventListener('click', function() {
            const code = block.querySelector('code');
            if (code) {
                navigator.clipboard.writeText(code.textContent).then(() => {
                    copyBtn.textContent = 'Copié !';
                    setTimeout(() => {
                        copyBtn.textContent = 'Copier';
                    }, 2000);
                });
            }
        });
    });
});

// === Compteur de téléchargements (simulé) ===
// À remplacer par une vraie API si vous avez un backend
function updateDownloadCount() {
    const downloadCountEl = document.getElementById('download-count');
    if (downloadCountEl) {
        // Simulé - remplacer par un vrai appel API
        const count = Math.floor(Math.random() * 1000) + 5000;
        downloadCountEl.textContent = count.toLocaleString('fr-FR');
    }
}

// === Détection du système d'exploitation pour le téléchargement ===
document.addEventListener('DOMContentLoaded', function() {
    const downloadBtns = document.querySelectorAll('.btn-download');

    // Détecter l'OS
    const userAgent = navigator.userAgent.toLowerCase();
    let detectedOS = 'windows';

    if (userAgent.includes('mac')) {
        detectedOS = 'macos';
    } else if (userAgent.includes('linux')) {
        detectedOS = 'linux';
    }

    // Mettre en évidence le bon bouton de téléchargement
    downloadBtns.forEach(btn => {
        const card = btn.closest('.download-card');
        if (card) {
            const osName = card.querySelector('h3').textContent.toLowerCase();
            if (osName.includes(detectedOS) ||
                (detectedOS === 'macos' && osName.includes('mac'))) {
                card.style.borderColor = 'var(--primary)';
                card.style.borderWidth = '2px';
            }
        }
    });
});

// === Gestion des préférences de thème (si implémenté) ===
function getPreferredTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

// === Utilitaires ===
const Utils = {
    // Formater un nombre avec séparateurs de milliers
    formatNumber: function(num) {
        return num.toLocaleString('fr-FR');
    },

    // Debounce pour les événements fréquents
    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Throttle pour les événements fréquents
    throttle: function(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
};

// === Export pour utilisation dans d'autres scripts ===
window.CapitaineSite = {
    Utils: Utils,
    setTheme: setTheme,
    getPreferredTheme: getPreferredTheme
};

console.log('🧭 Cap\'taine Site Web chargé');
