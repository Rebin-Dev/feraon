
const menuToggle = document.getElementById('menuToggle');
const navigation = document.getElementById('mainNavigation');
const siteHeader = document.getElementById('siteHeader');

function closeMenu() {
    navigation.classList.remove('show');
    menuToggle.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'باز کردن منو');
    document.body.classList.remove('menu-open');
}

menuToggle.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('show');

    menuToggle.classList.toggle('active', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'بستن منو' : 'باز کردن منو');

    document.body.classList.toggle('menu-open', isOpen);
});

document.querySelectorAll('.navigation a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

document.addEventListener('click', event => {
    if (
        navigation.classList.contains('show') &&
        !navigation.contains(event.target) &&
        !menuToggle.contains(event.target)
    ) {
        closeMenu();
    }
});

window.addEventListener('scroll', () => {
    siteHeader.classList.toggle('scrolled', window.scrollY > 30);
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 991) {
        closeMenu();
    }
});



const filterButtons = document.querySelectorAll('.filter-btn');
const perfumeItems = document.querySelectorAll('.perfume-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedCategory = button.dataset.filter;

        filterButtons.forEach(item => {
            item.classList.remove('active');
            item.setAttribute('aria-pressed', 'false');
        });

        button.classList.add('active');
        button.setAttribute('aria-pressed', 'true');

        perfumeItems.forEach(item => {
            const category = item.dataset.category;
            const isVisible = selectedCategory === 'all' || category === selectedCategory;

            item.classList.toggle('is-hidden', !isVisible);
        });
    });
});


document.documentElement.classList.add('js-ready');

const storyElements = document.querySelectorAll('.story-reveal');

if ('IntersectionObserver' in window) {
    const storyObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
    });

    storyElements.forEach(element => {
        storyObserver.observe(element);
    });
} else {
    storyElements.forEach(element => {
        element.classList.add('visible');
    });
}


const saqqezElements = document.querySelectorAll('.saqqez-reveal');

if ('IntersectionObserver' in window) {
    const saqqezObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    saqqezElements.forEach(element => {
        saqqezObserver.observe(element);
    });
} else {
    saqqezElements.forEach(element => {
        element.classList.add('visible');
    });
}


const footerYear = document.getElementById("footer-year");

if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
}

document.querySelectorAll("[data-footer-filter]").forEach(link => {
    link.addEventListener("click", () => {
        const filter = link.dataset.footerFilter;
        const filterButton = document.querySelector(
            `[data-filter="${filter}"]`
        );

        if (filterButton) {
            filterButton.click();
        }
    });
});


const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!contactForm.reportValidity()) return;

        const name = document.getElementById("contact-name").value.trim();
        const phone = document.getElementById("contact-phone").value.trim();
        const subject = document.getElementById("contact-subject").value;
        const message = document.getElementById("contact-message").value.trim();
        const feedback = document.getElementById("contact-feedback");

        const phoneDigits = phone.replace(/\D/g, "");

        if (phoneDigits.length < 8) {
            feedback.textContent = "لطفاً شماره تماس معتبر وارد کنید. 📱";
            return;
        }

        const telegramMessage =
`سلام فرعون عزیز 👑🌹

👤 نام من: ${name}
📱 شماره تماسم: ${phone}

📌 موضوع: ${subject}

💬 پیام من:
${message}

با تشکر از عطر فرعون سقز ✨🖤`;

        const telegramURL =
            "https://t.me/PRO_MAX1253?text=" +
            encodeURIComponent(telegramMessage);

        feedback.textContent = "در حال باز کردن تلگرام... ✈️";

        window.open(telegramURL, "_blank", "noopener,noreferrer");
    });
}

// Back To Top Button

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", () => {

        backToTop.classList.toggle(
            "show",
            window.scrollY > 400
        );

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}