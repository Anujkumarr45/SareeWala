
document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // SMOOTH SCROLLING
    // =========================

    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {

        link.addEventListener("click", function (e) {

            const targetId = this.getAttribute("href");

            if (targetId && targetId !== "#") {

                const target = document.querySelector(targetId);

                if (target) {

                    e.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }

        });

    });


    // =========================
    // MOBILE MENU
    // =========================

    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {

            navMenu.classList.toggle("active");
            menuToggle.classList.toggle("active");

            // Change accessibility label
            if (navMenu.classList.contains("active")) {

                menuToggle.setAttribute(
                    "aria-label",
                    "Close Menu"
                );

            } else {

                menuToggle.setAttribute(
                    "aria-label",
                    "Open Menu"
                );

            }

        });


        // Close menu after clicking a link

        navMenu.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                navMenu.classList.remove("active");
                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-label",
                    "Open Menu"
                );

            });

        });

    }


    // =========================
    // WHATSAPP ENQUIRY BUTTONS
    // =========================

    const whatsappButtons = document.querySelectorAll(
        'a[href*="wa.me"], a[href*="whatsapp"]'
    );

    whatsappButtons.forEach(button => {

        button.addEventListener("click", function () {

            const defaultMessage =
                "Hello Saree Wala, I would like to know more about your saree collection.";

            const phoneNumber = "917857004991";

            const existingHref =
                this.getAttribute("href");

            /*
             * Product enquiry buttons already have
             * their own message.
             *
             * Do not overwrite those messages.
             */

            if (
                !existingHref ||
                !existingHref.includes("?text=")
            ) {

                this.setAttribute(
                    "href",
                    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`
                );

            }

        });

    });


    // =========================
    // PHONE CALL BUTTON
    // =========================

    const phoneButtons = document.querySelectorAll(
        'a[href^="tel:"]'
    );

    phoneButtons.forEach(button => {

        button.addEventListener("click", () => {

            button.setAttribute(
                "href",
                "tel:+917857004991"
            );

        });

    });


    // =========================
    // NAVBAR SCROLL EFFECT
    // =========================

    const navbar = document.querySelector(".navbar");

    if (navbar) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 50) {

                navbar.classList.add("scrolled");

            } else {

                navbar.classList.remove("scrolled");

            }

        });

    }


    // =========================
    // ACTIVE NAVIGATION LINK
    // =========================

    const sections =
        document.querySelectorAll("section[id]");

    const navigationLinks =
        document.querySelectorAll(
            '.nav-menu a[href^="#"]'
        );


    function updateActiveNavigation() {

        let currentSection = "home";


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            const sectionHeight =
                section.offsetHeight;


            if (
                window.scrollY >= sectionTop &&
                window.scrollY <
                sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navigationLinks.forEach(link => {

            link.classList.remove("active");


            if (
                link.getAttribute("href") ===
                `#${currentSection}`
            ) {

                link.classList.add("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNavigation
    );


    // Run once when page loads
    updateActiveNavigation();


    // =========================
    // COLLECTION CARDS
    // =========================

    const collectionCards =
        document.querySelectorAll(".collection-card");


    collectionCards.forEach(card => {

        card.addEventListener("click", function () {

            const featured =
                document.querySelector("#featured");


            if (featured) {

                setTimeout(() => {

                    featured.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }, 10);

            }

        });

    });


    // =========================
    // ESC KEY
    // CLOSE MOBILE MENU
    // =========================

    document.addEventListener("keydown", event => {

        if (
            event.key === "Escape" &&
            navMenu &&
            navMenu.classList.contains("active")
        ) {

            navMenu.classList.remove("active");

            if (menuToggle) {

                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-label",
                    "Open Menu"
                );

            }

        }

    });


    // =========================
    // IMAGE ERROR CHECK
    // =========================

    const images =
        document.querySelectorAll("img");


    images.forEach(image => {

        image.addEventListener("error", function () {

            console.warn(
                "Image could not be loaded:",
                this.src
            );

        });

    });


    // =========================
    // PREVENT EMPTY "#" LINKS
    // =========================

    document
        .querySelectorAll('a[href="#"]')
        .forEach(link => {

            link.addEventListener("click", e => {

                e.preventDefault();

            });

        });


    // =========================
    // CONSOLE MESSAGE
    // =========================

    console.log(
        "Saree Wala website loaded successfully ❤️"
    );

});

