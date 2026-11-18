// Service Details Database
const serviceData = {
    'web-dev': {
        title: 'Web Development Services',
        icon: 'fas fa-code',
        description: 'We construct tailored, mobile-optimized, fast web platforms. From dynamic corporate sites to e-commerce hubs, our code is built cleanly using modern web standards for maximum conversion and security.'
    },
    'app-dev': {
        title: 'Custom Mobile App Development',
        icon: 'fas fa-mobile-screen-button',
        description: 'Transform your business concept into intuitive iOS and Android applications. We manage everything from user-interface wireframing to App Store deployment and real-time database management.'
    },
    'smm': {
        title: 'Social Media Marketing',
        icon: 'fas fa-share-nodes',
        description: 'Expand your online reach across Instagram, Facebook, and LinkedIn. We design content calendars, produce interactive media, manage community responses, and build high-conversion ad campaigns.'
    },
    'content': {
        title: 'Content Strategy & Marketing',
        icon: 'fas fa-pen-nib',
        description: 'High-value copywriting, blog posts, press releases, and multimedia assets designed to establish brand authority, improve organic search engine trust, and nurture qualified leads.'
    },
    'photo': {
        title: 'Mobile Product Photography',
        icon: 'fas fa-camera',
        description: 'High-impact mobile product photography and short-form video reels tailored specifically for modern social media algorithms and high-converting e-commerce product catalogs.'
    },
    'ai-eng': {
        title: 'AI Engineering & Virtual Agents',
        icon: 'fas fa-brain',
        description: 'Custom AI chatbot setups, workflow automation pipelines, customer qualification agents, and generative AI integrations engineered to streamline operational costs and provide 24/7 client response.'
    },
    'seo': {
        title: 'Search Engine Optimization (SEO)',
        icon: 'fas fa-magnifying-glass-chart',
        description: 'Technical audits, site-speed enhancements, keyword mapping, backlink building, and local SEO optimizations engineered to move your domain to Page #1 on Google without relying purely on ads.'
    },
    'ppc': {
        title: 'Pay-Per-Click (PPC) Advertising',
        icon: 'fas fa-rectangle-ad',
        description: 'Targeted Google Search, Display, and Meta advertising setups engineered to deliver instant visitor traffic and high intent customer leads while maintaining full tracking of cost-per-acquisition.'
    },
    'monitoring': {
        title: 'Website Health & Performance Monitoring',
        icon: 'fas fa-heart-pulse',
        description: 'Continuous uptime tracking, daily security vulnerability scans, database backups, and monthly page speed optimization reports to ensure your site is always fast, secure, and operational.'
    },
    'graphic': {
        title: 'Graphic Design & Brand Assets',
        icon: 'fas fa-palette',
        description: 'Professional visual identities, logos, social media promo flyers, corporate pitch decks, and digital banner design crafted to ensure your business makes an immediate visual impact.'
    }
};

const googleReviewData = {
    profileUrl: 'https://share.google/u5uRNFjzGX1dnd6IZ',
    rating: 5.0,
    totalReviewCount: 5,
    verifiedAt: '2026-11-18',
    ratingBreakdown: null,
    // Add only genuine reviews that are verified and permitted for republication.
    reviews: []
};

const teamMembers = [
    {
        id: 'team-member-01',
        name: 'Ray P  Karipache',
        position: ' C.S.O CHIEF STRATEGIC OFFICER',
        photo: 'assets/images/team/teamray.jpeg',
        biography: 'Chief Strategic Officer responsible for driving the overall strategic direction and growth initiatives of the company.',
        socialLinks: []
    },
    {
        id: 'team-member-02',
        name: 'Tony Witness N',
        position: ' Founder & C.E.O CHIEF EXECUTIVE OFFICER',
        photo: 'assets/images/team/teamtony.png',
        biography: 'Founder & Chief Executive Officer (C.E.O.) leading product strategy, technical development, and digital growth to build scalable, high-impact web and brand experiences.',
        socialLinks: []
    },
    {
        id: '79-182426D-73',
        name: 'Deborah Mumpande',
        position: 'ADMINISTRATOR & CHIEF FINANCIAL OFFICER',
        photo: 'assets/images/team/teamdeborah.png',
        biography: 'Administrator & Chief Financial Officer (CFO) overseeing daily business operations, financial strategy, budgeting, and compliance to ensure sustainable profitability and smooth organizational execution.',
        socialLinks: []
    },
    {
        id: '79-182426D-73',
        name: 'Roselyne Mwela',
        position: 'STRATEGIC OFFICER & ADMINISTRATOR',
        photo: 'assets/images/team/teamrossy.png',
        biography: 'Strategic Officer & Administrator responsible for supporting the company’s strategic initiatives and managing administrative operations.',
        socialLinks: []
    },
    {
        id: '79-185014R-84',
        name: 'Marshal R Pfidze',
        position: 'WEB DEVELOPER , UI/UX DESIGNER & SEO SPECIALIST',
        photo: 'assets/images/team/teammarshal.png',
        biography: 'Web Developer, UI/UX Designer, and SEO Specialist architecting scalable, user-centric, and search-engine-optimized web solutions engineered to elevate brand authority and drive measurable business growth.',
        socialLinks: []
    },
    {
        id: '97-87979167U-05',
        name: 'Ashton Ncube',
        position: 'SOCIAL MEDIA MANAGER & VIDEO GRAPHER',
        photo: 'assets/images/team/teamashton.png',
        biography: 'Social Media Manager & Videographer shooting, editing, and publishing engaging video content while managing social channels to grow brand reach, community engagement, and online conversions.',
        socialLinks: []
    },
    {
        id: '79-2013244K-06',
        name: 'Deline Munenge ',
        position: 'CUSTOMER RELATIONS &  THE STRATEGIEST ',
        photo: 'assets/images/team/teamdelin.webp',
        biography: 'Customer Relations & Strategist building lasting client partnerships, managing key accounts, and developing data-driven growth strategies to maximize satisfaction, retention, and brand impact.',
        socialLinks: []
    },
    {
        id: '79-1987654L-08',
        name: 'Trevis Dube',
        position: 'M.P.O MULTIMEDIA PRODUCTION OFFICER',
        photo: 'assets/images/team/teamtrevis.png',
        biography: 'Multimedia Production Officer (M.P.O.) producing, editing, and delivering high-impact video, audio, and visual content to elevate brand storytelling and audience engagement across digital platforms.',
        socialLinks: []
    },
    {
        id: '79-182426D-73',
        name: 'Emmanuel Mthandazo Dube',
        position: 'GRAPHIC DESIGNER & MEDIA QUALITY CONTROL OFFICER ',
        photo: 'assets/images/team/teamemma.png',
        biography: 'Graphic Designer & Media Quality Control Officer creating compelling brand visuals while ensuring every graphic, video, and digital asset meets high standards of polish, consistency, and accuracy before launch.',
        socialLinks: []
    }
];

const partners = [
    {
        name: 'The Little Outlook',
        website: 'https://www.theoutlook.co.zw/about-us/the-little-outlook',
        logo: 'assets/images/partners/the littleoutlook.png',
        logoAvailable: true
    },
    {
        name: 'The Outlook',
        website: 'https://theoutlook.co.zw/',
        logo: 'assets/images/partners/theoutlook.png',
        logoAvailable: true
    },
    {
        name: 'Savannah Adventures',
        website: 'https://www.savannahadventure.com/',
        logo: 'assets/images/partners/savannah-adventures.png',
        logoAvailable: true
    },
    {
        name: 'The White House',
        website: 'https://whitehouse.co.zw/',
        logo: 'assets/images/partners/white-house.png',
        logoAvailable: true
    },
    {
        name: 'Brance Tours and Safaris',
        website: 'https://brancesafaris.netlify.app/',
        logo: 'assets/images/partners/brance-tours.png',
        logoAvailable: true
    },
    {
        name: 'Spring Villa Guest Lodge & Campsite',
        website: 'https://mthandazoemmanuel2-oss.github.io/Spring-Villa-Guest-Lodge-Campsite/index.html',
        logo: 'assets/images/partners/spring-villa.png',
        logoAvailable: true
    },
    {
        name: 'Chikara Business Consultancy',
        website: null,
        logo: 'assets/images/partners/Chikara Logo.png',
        logoAvailable: true
    },
    {
        name: 'Land of Grace',
        website: 'https://www.landofgrace.co.zw/',
        logo: 'assets/images/partners/land-of-grace.png',
        logoAvailable: true
    },
    {
        name: 'Bethel Lodgings',
        website: 'https://www.bethellodgings.com/',
        logo: 'assets/images/partners/bethel-lodgings.png',
        logoAvailable: true
    },
    {
        name: 'Black J',
        website: null,
        logo: 'assets/images/partners/blackj.png',
        logoAvailable: true
    },
    {
        name: 'Dash Delivery',
        website: 'https://www.dashdelivery.co.zw/',
        logo: 'assets/images/partners/dash-delivery.png',
        logoAvailable: true
    },
    {
        name: 'Tamuka Travel',
        website: 'https://tamukatravel.co.zw/',
        logo: 'assets/images/partners/tamuka-travel.png',
        logoAvailable: true
    },
    {
        name: 'Fidelity Travel',
        website: null,
        logo: 'assets/images/partners/fidelity travel.png',
        logoAvailable: true
    },
    {
        name: 'CBD Hardware',
        website: null,
        logo: 'assets/images/partners/CBD.png',
        logoAvailable: true
    },
    {
        name: 'Just Leo',
        website: 'https://youtu.be/ez6f8mQHRaE',
        logo: 'assets/images/partners/leo.png',
        logoAvailable: true
    },
      {
        name: 'uncommon.org',
        website: 'https://uncommon.org/',
        logo: 'assets/images/partners/uncommon.png',
        logoAvailable: true
    }
];

const createTeamPhotoPlaceholder = () => {
    const placeholder = document.createElement('span');
    placeholder.className = 'team-photo-placeholder';
    placeholder.setAttribute('aria-hidden', 'true');

    const placeholderIcon = document.createElement('i');
    placeholderIcon.className = 'fas fa-user';

    const placeholderText = document.createElement('span');
    placeholderText.textContent = 'Portrait unavailable';

    placeholder.append(placeholderIcon, placeholderText);
    return placeholder;
};

const renderGoogleStars = (container, rating) => {
    container.replaceChildren();
    container.setAttribute('role', 'img');
    container.setAttribute('aria-label', `${rating} out of 5 stars`);

    for (let value = 1; value <= 5; value += 1) {
        const star = document.createElement('i');
        star.className = `fas fa-star${value > Math.round(rating) ? ' is-empty' : ''}`;
        star.setAttribute('aria-hidden', 'true');
        container.appendChild(star);
    }
};

const isValidGoogleReview = (review) => {
    if (!review || typeof review.name !== 'string' || !review.name.trim()
        || typeof review.text !== 'string' || !review.text.trim()
        || !Number.isInteger(review.rating) || review.rating < 1 || review.rating > 5
        || typeof review.publishedAt !== 'string') {
        return false;
    }

    return !Number.isNaN(new Date(review.publishedAt).getTime());
};

const createGoogleReviewCard = (review) => {
    const card = document.createElement('article');
    card.className = 'google-review-card';

    const header = document.createElement('header');
    header.className = 'google-review-card-header';

    const avatar = document.createElement('span');
    avatar.className = 'google-review-avatar';
    avatar.setAttribute('aria-hidden', 'true');
    const initials = review.name.trim().split(/\s+/).slice(0, 2).map(part => part[0]).join('').toUpperCase();
    avatar.textContent = initials;

    if (review.profileImageUrl) {
        const image = document.createElement('img');
        image.src = review.profileImageUrl;
        image.alt = '';
        image.loading = 'lazy';
        image.addEventListener('error', () => {
            avatar.textContent = initials;
        }, { once: true });
        avatar.replaceChildren(image);
    }

    const author = document.createElement('div');
    author.className = 'google-review-author';

    const name = document.createElement('strong');
    name.textContent = review.name.trim();

    const date = document.createElement('time');
    const publishedAt = new Date(review.publishedAt);
    date.dateTime = review.publishedAt;
    date.textContent = publishedAt.toLocaleDateString('en', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });

    author.append(name, date);
    header.append(avatar, author);

    const stars = document.createElement('span');
    stars.className = 'google-stars google-review-stars';
    renderGoogleStars(stars, review.rating);

    const quote = document.createElement('blockquote');
    quote.textContent = review.text.trim();

    const attribution = document.createElement('a');
    attribution.className = 'google-review-attribution';
    attribution.href = review.googleReviewUrl || googleReviewData.profileUrl;
    attribution.target = '_blank';
    attribution.rel = 'noopener noreferrer';
    attribution.setAttribute('aria-label', `View ${review.name.trim()}'s original review on Google`);
    attribution.textContent = 'Google';
    attribution.setAttribute('translate', 'no');

    const footer = document.createElement('footer');
    footer.appendChild(attribution);
    card.append(header, stars, quote, footer);
    return card;
};

const renderGoogleReviews = () => {
    const rating = Number(googleReviewData.rating);
    const reviewCount = Number(googleReviewData.totalReviewCount);
    const ratingValue = document.getElementById('googleRatingValue');
    const reviewCountValue = document.getElementById('googleReviewCount');
    const ratingStars = document.getElementById('googleRatingStars');
    const checkedAt = document.getElementById('googleRatingChecked');
    const reviewGrid = document.getElementById('googleReviewGrid');
    const emptyState = document.getElementById('googleReviewsEmpty');

    if (!ratingValue || !reviewCountValue || !ratingStars || !checkedAt || !reviewGrid || !emptyState) {
        console.error('Google reviews section is missing required markup.');
        return;
    }

    if (!Number.isFinite(rating) || rating < 1 || rating > 5
        || !Number.isInteger(reviewCount) || reviewCount < 0) {
        console.error('Google review rating data is invalid.');
        return;
    }

    ratingValue.textContent = rating.toFixed(1);
    reviewCountValue.textContent = reviewCount.toLocaleString();
    renderGoogleStars(ratingStars, rating);

    const verifiedDate = new Date(`${googleReviewData.verifiedAt}T00:00:00Z`);
    if (Number.isNaN(verifiedDate.getTime())) {
        console.error('Google review verification date is invalid.');
    } else {
        checkedAt.dateTime = googleReviewData.verifiedAt;
        checkedAt.textContent = verifiedDate.toLocaleDateString('en', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
            timeZone: 'UTC'
        });
    }

    reviewGrid.replaceChildren();
    googleReviewData.reviews.forEach((review, index) => {
        if (!isValidGoogleReview(review)) {
            console.error(`Google review entry ${index + 1} is invalid and was not displayed.`);
            return;
        }

        reviewGrid.appendChild(createGoogleReviewCard(review));
    });

    reviewGrid.hidden = reviewGrid.childElementCount === 0;
    emptyState.hidden = !reviewGrid.hidden;
};

document.addEventListener('DOMContentLoaded', () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const heroVideo = document.querySelector('.hero-video');
    const heroVideoSource = heroVideo && heroVideo.dataset.videoSrc.trim();

    if (heroVideoSource && !prefersReducedMotion) {
        heroVideo.src = heroVideoSource;
        heroVideo.load();
    }

    const revealObserver = !prefersReducedMotion && 'IntersectionObserver' in window
        ? new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' })
        : null;

    const revealElements = (elements) => {
        Array.from(elements).forEach((element, index) => {
            document.documentElement.classList.add('motion-ready');
            element.dataset.reveal = '';
            element.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 70}ms`);
            if (prefersReducedMotion || !revealObserver) {
                element.classList.add('is-visible');
            } else {
                revealObserver.observe(element);
            }
        });
    };

    renderGoogleReviews();

    revealElements(document.querySelectorAll(
        '.section-header, .service-card, .step-card, .portfolio-card, ' +
        '.about-image-col, .about-text-col, .about-bullets .bullet-item, ' +
        '.audit-content, .contact-info, .contact-form-card, .info-item, ' +
        '.google-rating-card, .google-review-card, .google-reviews-empty:not([hidden])'
    ));

    const teamGrid = document.getElementById('teamGrid');

    if (teamGrid) {
        teamMembers.forEach((member, index) => {
            const card = document.createElement('article');
            card.className = 'team-card';
            card.dataset.memberId = member.id;

            const cardInner = document.createElement('div');
            cardInner.className = 'team-card-inner';

            const front = document.createElement('div');
            front.className = 'team-card-face team-card-front';

            const frontButton = document.createElement('button');
            frontButton.className = 'team-card-front-button';
            frontButton.type = 'button';
            frontButton.setAttribute('aria-label', `Meet ${member.name}`);
            frontButton.setAttribute('aria-expanded', 'false');

            if (member.photo) {
                const photo = document.createElement('img');
                photo.className = 'team-photo';
                photo.src = member.photo;
                photo.alt = 'Temporary stock portrait; this person is not a Fidelity eSolutions employee.';
                photo.loading = 'lazy';
                photo.decoding = 'async';
                photo.addEventListener('error', () => {
                    photo.replaceWith(createTeamPhotoPlaceholder());
                }, { once: true });
                frontButton.appendChild(photo);
            } else {
                frontButton.appendChild(createTeamPhotoPlaceholder());
            }

            const frontOverlay = document.createElement('span');
            frontOverlay.className = 'team-card-overlay';

            const memberNumber = document.createElement('span');
            memberNumber.className = 'team-card-number';
            memberNumber.textContent = `0${index + 1}`;

            const frontHint = document.createElement('span');
            frontHint.className = 'team-card-hint';
            const hintDot = document.createElement('span');
            hintDot.className = 'team-card-hint-dot';
            frontHint.append(hintDot, document.createTextNode('Click to meet'));

            frontOverlay.append(memberNumber, frontHint);
            frontButton.appendChild(frontOverlay);
            front.appendChild(frontButton);

            const back = document.createElement('div');
            back.className = 'team-card-face team-card-back';
            back.inert = true;
            back.setAttribute('aria-hidden', 'true');

            const backContent = document.createElement('div');
            backContent.className = 'team-card-back-content';

            const backEyebrow = document.createElement('span');
            backEyebrow.className = 'team-card-eyebrow';
            backEyebrow.textContent = 'Temporary profile · Replace before launch';

            const name = document.createElement('h3');
            name.className = 'team-card-name';
            name.textContent = member.name;

            const position = document.createElement('span');
            position.className = 'team-role';
            position.textContent = member.position;

            const biography = document.createElement('p');
            biography.className = 'team-card-bio';
            biography.textContent = member.biography;

            backContent.append(backEyebrow, name, position, biography);

            if (member.socialLinks.length) {
                const socials = document.createElement('div');
                socials.className = 'team-socials';

                member.socialLinks.forEach((social) => {
                    const link = document.createElement('a');
                    link.href = social.url;
                    link.setAttribute('aria-label', `${member.name} on ${social.label}`);
                    link.target = '_blank';
                    link.rel = 'noopener noreferrer';

                    const icon = document.createElement('i');
                    icon.className = social.icon;
                    icon.setAttribute('aria-hidden', 'true');
                    link.appendChild(icon);
                    socials.appendChild(link);
                });

                backContent.appendChild(socials);
            }

            const backButton = document.createElement('button');
            backButton.className = 'team-card-back-button';
            backButton.type = 'button';
            backButton.textContent = 'Back to photo';
            backButton.disabled = true;
            backButton.setAttribute('aria-label', `Show ${member.name}'s photo`);

            const backIcon = document.createElement('i');
            backIcon.className = 'fas fa-arrow-left';
            backIcon.setAttribute('aria-hidden', 'true');
            backButton.prepend(backIcon);

            back.append(backContent, backButton);
            cardInner.append(front, back);
            card.appendChild(cardInner);
            revealElements([card]);

            card.addEventListener('click', (event) => {
                if (event.target.closest('a')) {
                    return;
                }

                const isFlipped = card.classList.toggle('is-flipped');
                frontButton.disabled = isFlipped;
                frontButton.setAttribute('aria-expanded', String(isFlipped));
                backButton.disabled = !isFlipped;
                back.inert = !isFlipped;
                back.setAttribute('aria-hidden', String(!isFlipped));
                front.setAttribute('aria-hidden', String(isFlipped));
                (isFlipped ? backButton : frontButton).focus();
            });

            teamGrid.appendChild(card);
        });
    }

    const partnersGrid = document.getElementById('partnersGrid');

    if (partnersGrid) {
        partners.forEach((partner) => {
            const card = partner.website
                ? document.createElement('a')
                : document.createElement('div');
            card.className = 'partner-card';

            if (partner.website) {
                card.href = partner.website;
                card.target = '_blank';
                card.rel = 'noopener noreferrer';
                card.setAttribute('aria-label', `Visit ${partner.name} website (opens in a new tab)`);
            }

            const createLogoFallback = () => {
                const fallback = document.createElement('span');
                fallback.className = 'partner-logo-fallback';
                fallback.textContent = partner.name;
                fallback.setAttribute('role', 'img');
                fallback.setAttribute('aria-label', `${partner.name} logo not supplied`);
                return fallback;
            };

            if (partner.logoAvailable) {
                const logo = document.createElement('img');
                logo.className = 'partner-logo';
                logo.src = partner.logo;
                logo.alt = partner.name;
                logo.loading = 'lazy';
                logo.decoding = 'async';
                logo.addEventListener('error', () => {
                    card.replaceChild(createLogoFallback(), logo);
                }, { once: true });
                card.appendChild(logo);
            } else {
                card.appendChild(createLogoFallback());
            }

            partnersGrid.appendChild(card);
            revealElements([card]);
        });
    }

    // 1. Mobile Navigation Menu Toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            document.body.classList.toggle('nav-open', navLinks.classList.contains('active'));
            const icon = mobileToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.className = 'fas fa-xmark';
            } else {
                icon.className = 'fas fa-bars';
            }
        });
    }

    // Close menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            document.body.classList.remove('nav-open');
            if(mobileToggle) mobileToggle.querySelector('i').className = 'fas fa-bars';
        });
    });

    // 2. Animate the published company statistics when they enter view.
    const statNumbers = document.querySelectorAll('.stat-number[data-target]');
    const animateStat = (counter) => {
        const target = Number(counter.dataset.target);
        if (!Number.isFinite(target)) {
            return;
        }

        if (prefersReducedMotion || !('IntersectionObserver' in window)) {
            counter.textContent = String(target);
            return;
        }

        const duration = 1100;
        const startTime = performance.now();
        const updateCount = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            counter.textContent = String(Math.round(target * easedProgress));
            if (progress < 1) {
                window.requestAnimationFrame(updateCount);
            }
        };

        window.requestAnimationFrame(updateCount);
    };

    if (statNumbers.length) {
        if (prefersReducedMotion || !('IntersectionObserver' in window)) {
            statNumbers.forEach(animateStat);
        } else {
            const statsObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateStat(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });

            statNumbers.forEach(counter => statsObserver.observe(counter));
        }
    }

    // 3. Interactive SEO Audit Tool Form Simulation
    const auditForm = document.getElementById('seoAuditForm');
    const auditResult = document.getElementById('auditResult');
    const resUrl = document.getElementById('resUrl');

    if (auditForm) {
        auditForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const urlInput = document.getElementById('auditUrl').value;
            
            if (urlInput) {
                resUrl.innerText = urlInput;
                auditResult.classList.remove('hidden');
                auditResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });
    }

    // 4. Modal Handler for Core Services
    const serviceModal = document.getElementById('serviceModal');
    const modalClose = document.getElementById('modalClose');

    window.openServiceModal = (key) => {
        const data = serviceData[key];
        if (data) {
            document.getElementById('modalTitle').innerText = data.title;
            document.getElementById('modalIcon').className = `modal-icon ${data.icon}`;
            document.getElementById('modalBody').innerHTML = `<p>${data.description}</p>`;
            serviceModal.classList.remove('hidden');
        }
    };

    window.closeServiceModal = () => {
        serviceModal.classList.add('hidden');
    };

    if (modalClose) {
        modalClose.addEventListener('click', closeServiceModal);
    }

    window.addEventListener('click', (e) => {
        if (e.target === serviceModal) {
            closeServiceModal();
        }
    });

    // 5. Contact Form Handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you! Your message has been sent to Fidelity Solutions. We will get back to you shortly.');
            contactForm.reset();
        });
    }

    // 6. Website assistant
    const chatToggle = document.getElementById('chatToggle');
    const chatPanel = document.getElementById('chatPanel');
    const chatClose = document.getElementById('chatClose');
    const chatForm = document.getElementById('chatForm');
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');

    if (!chatToggle || !chatPanel || !chatForm || !chatInput || !chatMessages) {
        return;
    }

    const appendMessage = (text, sender) => {
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${sender}`;

        const paragraph = document.createElement('p');
        paragraph.textContent = text;

        const timestamp = document.createElement('span');
        timestamp.className = 'time';
        timestamp.textContent = new Intl.DateTimeFormat(undefined, {
            hour: 'numeric',
            minute: '2-digit'
        }).format(new Date());

        msgDiv.append(paragraph, timestamp);
        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    };

    const getBotResponse = (input) => {
        const message = input.toLowerCase().replace(/[^\w\s+#.-]/g, ' ');
        const includesAny = (...terms) => terms.some(term => message.includes(term));

        if (includesAny('are you human', 'are you a person', 'real person', 'human or')) {
            return "I’m Fidelity eSolutions’ automated website assistant. I can answer common questions and help you reach our team. For personal assistance, WhatsApp +263 77 589 7169, call +263 78 262 8369, or email info@fidelityesolutions.co.zw.";
        }

        if (/^(hello|hi|hey|good morning|good afternoon|good evening)[\s!.]*$/.test(message)) {
            return "Hello, and welcome to Fidelity Solutions. I can help with our services, project enquiries, pricing, or ways to contact our team. What would you like to know?";
        }

        if (includesAny('thank', 'thanks')) {
            return "You’re welcome. If you have another question or would like to discuss a project, I’m happy to help.";
        }

        if (includesAny('price', 'pricing', 'cost', 'quote', 'quotation', 'budget', 'rate', 'proposal')) {
            return "Project pricing depends on the scope, features, and timeline. We prepare a tailored proposal after learning about your goals, and we don’t use restrictive long-term contracts. Share a brief through our contact form to request a quote.";
        }

        if (includesAny('how long', 'timeline', 'when can', 'how soon', 'delivery date')) {
            return "Timelines depend on the project scope, required features, and feedback milestones. Our team can provide a realistic schedule after reviewing your brief.";
        }

        if (includesAny('contact', 'email', 'phone', 'call', 'whatsapp', 'speak to', 'talk to', 'address', 'location', 'where are')) {
            return "You can reach Fidelity eSolutions on WhatsApp at +263 77 589 7169, by phone at +263 78 262 8369, or by email at info@fidelityesolutions.co.zw. We’re based in Victoria Falls, Zimbabwe, and work with clients globally.";
        }

        if (includesAny('audit', 'seo score', 'website score', 'site score')) {
            return "The SEO audit section on this page is a demonstration and does not run a live scan. Contact us with your website address if you’d like to discuss a proper website or SEO assessment.";
        }

        if (includesAny('monitor', 'maintenance', 'website health', 'security', 'uptime', 'backup', 'performance')) {
            return "Website care can include uptime and performance monitoring, maintenance, security checks, and backups. The right plan depends on your platform and support requirements.";
        }

        if (includesAny('web development', 'website', 'web design', 'web developer', 'e-commerce', 'ecommerce')) {
            return "Our web development service covers responsive business websites, e-commerce experiences, and custom web platforms. We can discuss your pages, features, integrations, and goals, then recommend a suitable scope. Would you like to request a project quote?";
        }

        if (includesAny('mobile app', 'app development', 'ios', 'android', 'application')) {
            return "We design and develop mobile applications for iOS and Android, including interface planning, application development, and deployment support. Tell us what you’d like the app to help people do, and our team can discuss the next steps.";
        }

        if (includesAny('social media', 'instagram', 'facebook', 'linkedin', 'social marketing')) {
            return "Our social media services include content planning, creative assets, community engagement, and campaign management for platforms such as Instagram, Facebook, and LinkedIn.";
        }

        if (includesAny('content', 'copywriting', 'copy writing', 'blog', 'writing')) {
            return "We create content such as website copy, blog articles, and campaign materials to help communicate your brand and support your marketing goals.";
        }

        if (includesAny('photo', 'photography', 'video', 'reel', 'product images')) {
            return "We provide product photography and short-form video content for social media and e-commerce. Share the products and platforms you have in mind, and we can discuss a suitable brief.";
        }

        if (includesAny('ai', 'artificial intelligence', 'chatbot', 'automation', 'automate')) {
            return "Our AI and automation work includes virtual assistants, chatbot integrations, and workflow automation. We start by understanding the process you want to improve, then recommend an appropriate solution.";
        }

        if (includesAny('seo', 'search engine', 'google ranking', 'keywords', 'backlinks')) {
            return "Our SEO services include technical and on-page reviews, keyword planning, site performance improvements, local search support, and content guidance. Search results can’t be guaranteed, but we can recommend a strategy based on your goals.";
        }

        if (includesAny('ppc', 'paid ads', 'advertising', 'google ads', 'facebook ads', 'meta ads')) {
            return "We plan and manage paid campaigns across channels such as Google and Meta, with attention to audience targeting, campaign goals, and performance tracking.";
        }

        if (includesAny('graphic design', 'logo', 'branding', 'brand identity', 'flyer', 'design')) {
            return "Our graphic design services include brand assets, promotional materials, social media graphics, and digital design. Share the deliverables and style you’re looking for, and we can help define a brief.";
        }

        if (includesAny('service', 'services', 'offer', 'what do you do', 'help with')) {
            return "Fidelity Solutions offers web and app development, SEO, social media and content marketing, product photography, AI and automation, paid advertising, website monitoring, and graphic design. Which area would you like to explore?";
        }

        if (includesAny('team', 'who are you', 'about fidelity', 'about your company')) {
            return "Fidelity Solutions is a Victoria Falls-based digital agency combining software development and digital marketing. Our team supports businesses with web, marketing, and automation projects.";
        }

        return "Thank you for your message. I can help with our services, project pricing, SEO, web or app development, marketing, AI automation, and contact details. Could you share a little more about what you need? You can also reach our team at info@fidelityesolutions.co.zw or +263 77 589 7169.";
    };

    let replyPending = false;

    const sendMessage = (text) => {
        const message = text.trim();
        if (!message || replyPending) {
            return;
        }

        appendMessage(message, 'user');
        chatInput.value = '';
        replyPending = true;
        chatInput.disabled = true;
        const sendButton = chatForm.querySelector('button[type="submit"]');
        if (sendButton) {
            sendButton.disabled = true;
        }

        const typingIndicator = document.createElement('div');
        typingIndicator.className = 'message bot typing-indicator';
        typingIndicator.setAttribute('role', 'status');
        typingIndicator.textContent = 'Preparing a response…';
        chatMessages.appendChild(typingIndicator);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        window.setTimeout(() => {
            typingIndicator.remove();
            appendMessage(getBotResponse(message), 'bot');
            replyPending = false;
            chatInput.disabled = false;
            if (sendButton) {
                sendButton.disabled = false;
            }
            chatInput.focus();
        }, 450);
    };

    chatToggle.addEventListener('click', () => {
        chatPanel.classList.toggle('hidden');
        const isOpen = !chatPanel.classList.contains('hidden');
        document.body.classList.toggle('chat-open', isOpen);
        chatToggle.setAttribute('aria-expanded', String(isOpen));
        if (isOpen) {
            chatInput.focus();
        }
    });

    if (chatClose) {
        chatClose.addEventListener('click', () => {
            chatPanel.classList.add('hidden');
            document.body.classList.remove('chat-open');
            chatToggle.setAttribute('aria-expanded', 'false');
            chatToggle.focus();
        });
    }

    chatForm.addEventListener('submit', (event) => {
        event.preventDefault();
        sendMessage(chatInput.value);
    });

    document.querySelectorAll('.reply-chip').forEach(button => {
        button.addEventListener('click', () => sendMessage(button.textContent));
    });
    window.sendQuickReply = sendMessage;
    window.sendQuickReply = sendMessage;
});