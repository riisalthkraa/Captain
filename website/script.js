// ============================================================================
// CAP'TAINE - SCRIPT ULTRA-PREMIUM
// JavaScript avancé pour animations 3D, curseur custom, et effets interactifs
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {

    // ========================================
    // 1. BUBBLE CURSOR - Bulles flottantes au survol
    // ========================================
    let lastBubbleTime = 0;
    const bubbleDelay = 150; // Délai entre chaque bulle (ms)

    document.addEventListener('mousemove', (e) => {
        const now = Date.now();

        // Créer une bulle seulement si assez de temps s'est écoulé
        if (now - lastBubbleTime > bubbleDelay) {
            createBubble(e.clientX, e.clientY);
            lastBubbleTime = now;
        }
    });

    function createBubble(x, y) {
        const bubble = document.createElement('div');
        bubble.className = 'mouse-bubble';

        // Taille aléatoire entre 10px et 30px
        const size = Math.random() * 20 + 10;
        bubble.style.width = size + 'px';
        bubble.style.height = size + 'px';

        // Position initiale
        bubble.style.left = x + 'px';
        bubble.style.top = y + 'px';

        // Décalage horizontal aléatoire pour variation
        const offsetX = (Math.random() - 0.5) * 50;
        bubble.style.setProperty('--offset-x', offsetX + 'px');

        document.body.appendChild(bubble);

        // Supprimer la bulle après l'animation (3 secondes)
        setTimeout(() => {
            bubble.remove();
        }, 3000);
    }

    // Effet hover sur les éléments interactifs
    const hoverable = document.querySelectorAll('a, button, .btn, .highlight-card, .truth-card, .pricing-card, .faq-question, .download-card');
    let bubbleInterval;

    hoverable.forEach(el => {
        el.addEventListener('mouseenter', (e) => {
            // Créer des bulles plus rapidement au hover
            bubbleInterval = setInterval(() => {
                const rect = el.getBoundingClientRect();
                const x = rect.left + Math.random() * rect.width;
                const y = rect.top + Math.random() * rect.height;
                createBubble(x, y);
            }, 100);
        });

        el.addEventListener('mouseleave', () => {
            clearInterval(bubbleInterval);
        });
    });

    // ========================================
    // 2. NAVBAR - Effet scroll et mobile menu
    // ========================================
    const navbar = document.querySelector('.navbar');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // Effet scroll navbar
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Menu mobile toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');

            // Bloquer le scroll quand le menu est ouvert
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Fermer le menu quand on clique sur un lien
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

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

    // ========================================
    // 3. SCROLL ANIMATIONS - Intersection Observer
    // ========================================
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Observer une seule fois
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observer tous les éléments avec classes d'animation
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .highlight-card, .truth-card, .pricing-card');
    animatedElements.forEach(el => {
        el.classList.add('fade-in'); // Ajouter classe par défaut si pas déjà présente
        observer.observe(el);
    });

    // ========================================
    // 4. SMOOTH SCROLL - Ancres smooth
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 100; // Offset pour la navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========================================
    // 5. CARDS 3D TILT - Effet d'inclinaison 3D
    // ========================================
    const tiltCards = document.querySelectorAll('.highlight-card, .pricing-card, .truth-card, .download-card');
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });

    // ========================================
    // 6. PARALLAX EFFECT - DÉSACTIVÉ (utilisateur ne veut pas)
    // ========================================
    // Parallaxe désactivé à la demande de l'utilisateur
    // const parallaxElements = document.querySelectorAll('.hero');
    // if (parallaxElements.length > 0) {
    //     window.addEventListener('scroll', () => {
    //         const scrolled = window.pageYOffset;
    //         parallaxElements.forEach(el => {
    //             const speed = 0.5;
    //             el.style.transform = `translateY(${scrolled * speed}px)`;
    //         });
    //     });
    // }

    // ========================================
    // 7. SCROLL PROGRESS BAR - Barre de progression
    // ========================================
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, var(--wave-cyan), var(--gold-accent));
        z-index: 10000;
        transform-origin: left;
        transform: scaleX(0);
        transition: transform 0.1s ease;
        pointer-events: none;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.pageYOffset;
        const progress = scrolled / scrollHeight;
        progressBar.style.transform = `scaleX(${progress})`;
    });

    // ========================================
    // 8. SPARKLE EFFECT - Effet étincelles sur hover
    // ========================================
    const sparkleElements = document.querySelectorAll('.btn-primary, .btn-large');
    sparkleElements.forEach(el => {
        el.addEventListener('mouseenter', function(e) {
            createSparkle(e.currentTarget);
        });
    });

    function createSparkle(parent) {
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                const sparkle = document.createElement('span');
                sparkle.className = 'sparkle';
                sparkle.style.cssText = `
                    position: absolute;
                    width: 4px;
                    height: 4px;
                    background: var(--gold-accent);
                    border-radius: 50%;
                    pointer-events: none;
                    animation: sparkleAnim 1s ease-out forwards;
                    left: ${Math.random() * 100}%;
                    top: ${Math.random() * 100}%;
                `;
                parent.style.position = 'relative';
                parent.appendChild(sparkle);

                setTimeout(() => sparkle.remove(), 1000);
            }, i * 100);
        }
    }

    // ========================================
    // 9. FAQ ACCORDION - Accordéon FAQ
    // ========================================
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

    // ========================================
    // 10. CONSOLE MESSAGE - Message développeur
    // ========================================
    console.log('%c🎉 Bienvenue sur Cap\'taine ! ⛵', 'font-size: 20px; font-weight: bold; color: #0891b2;');
    console.log('%cSite développé avec ❤️ par VIEY David', 'font-size: 12px; color: #67e8f9;');
    console.log('%chttps://rk-developpement.fr', 'font-size: 12px; color: #22d3ee;');

}); // Fin du DOMContentLoaded principal

// ============================================================================
// KEYFRAMES CSS DYNAMIQUES
// ============================================================================
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkleAnim {
        0% {
            transform: translateY(0) scale(0);
            opacity: 1;
        }
        100% {
            transform: translateY(-30px) scale(1);
            opacity: 0;
        }
    }

    .fade-in {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    }

    .fade-in.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .slide-in-left {
        opacity: 0;
        transform: translateX(-50px);
        transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    }

    .slide-in-left.visible {
        opacity: 1;
        transform: translateX(0);
    }

    .slide-in-right {
        opacity: 0;
        transform: translateX(50px);
        transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    }

    .slide-in-right.visible {
        opacity: 1;
        transform: translateX(0);
    }
`;
document.head.appendChild(style);

console.log('🧭 Cap\'taine Site Web chargé');
