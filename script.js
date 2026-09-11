/* =========================================================
   KRUPALI & KEYUR
   PREMIUM WEDDING INVITATION JAVASCRIPT
   PERFORMANCE + MOBILE OPTIMIZED
========================================================= */


/* =========================================================
   1. WEDDING DATE
========================================================= */

const wedding =
    new Date("January 25, 2027 11:00:00").getTime();


/* =========================================================
   2. COUNTDOWN
========================================================= */

function updateCountdown() {

    const now = Date.now();
    const distance = wedding - now;

    const days =
        document.getElementById("days");

    const hours =
        document.getElementById("hours");

    const minutes =
        document.getElementById("minutes");

    const seconds =
        document.getElementById("seconds");


    if (!days || !hours || !minutes || !seconds) {
        return;
    }


    if (distance <= 0) {

        days.textContent = "0";
        hours.textContent = "0";
        minutes.textContent = "0";
        seconds.textContent = "0";

        return;
    }


    const d =
        Math.floor(distance / 86400000);


    const h =
        Math.floor(
            (distance % 86400000) / 3600000
        );


    const m =
        Math.floor(
            (distance % 3600000) / 60000
        );


    const s =
        Math.floor(
            (distance % 60000) / 1000
        );


    days.textContent = d;
    hours.textContent = h;
    minutes.textContent = m;
    seconds.textContent = s;
}


updateCountdown();


setInterval(
    updateCountdown,
    1000
);


/* =========================================================
   3. SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(
                    function (entry) {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "show"
                            );


                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -40px 0px"
            }
        );


    revealElements.forEach(
        function (element) {

            revealObserver.observe(
                element
            );

        }
    );


} else {

    revealElements.forEach(
        function (element) {

            element.classList.add(
                "show"
            );

        }
    );

}


/* =========================================================
   4. PARTICLES
========================================================= */

const particleContainer =
    document.getElementById("particles");


const isSmallScreen =
    window.matchMedia(
        "(max-width: 700px)"
    ).matches;


function createParticle() {

    if (!particleContainer) {
        return;
    }


    const particle =
        document.createElement("div");


    particle.classList.add(
        "particle"
    );


    particle.style.left =
        Math.random() * 100 + "%";


    particle.style.animationDuration =
        (8 + Math.random() * 12) + "s";


    particle.style.animationDelay =
        Math.random() * 8 + "s";


    const size =
        2 + Math.random() * 4;


    particle.style.width =
        size + "px";


    particle.style.height =
        size + "px";


    particleContainer.appendChild(
        particle
    );

}


/*
   Desktop = 45 particles
   Mobile = 24 particles
*/

const particleCount =
    isSmallScreen ? 24 : 45;


for (
    let i = 0;
    i < particleCount;
    i++
) {

    createParticle();

}


/* =========================================================
   5. 3D CARD EFFECT
========================================================= */

const cards =
    document.querySelectorAll(
        ".person-card, " +
        ".gallery-card, " +
        ".event-card, " +
        ".family-card, " +
        ".glass-card, " +
        ".venue-card"
    );


const hasFinePointer =
    window.matchMedia(
        "(hover: hover) and (pointer: fine)"
    ).matches;


if (hasFinePointer) {

    cards.forEach(
        function (card) {

            let frame = 0;

            let mouseX = 0;
            let mouseY = 0;


            function updateCardTilt() {

                frame = 0;


                const rect =
                    card.getBoundingClientRect();


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const rotateX =
                    ((mouseY - centerY) / centerY) * -4;


                const rotateY =
                    ((mouseX - centerX) / centerX) * 4;


                card.style.transform =
                    "perspective(1100px) " +
                    "rotateX(" + rotateX + "deg) " +
                    "rotateY(" + rotateY + "deg) " +
                    "translateY(-8px) " +
                    "scale(1.02)";

            }


            card.addEventListener(
                "mousemove",
                function (event) {

                    const rect =
                        card.getBoundingClientRect();


                    mouseX =
                        event.clientX -
                        rect.left;


                    mouseY =
                        event.clientY -
                        rect.top;


                    if (!frame) {

                        frame =
                            requestAnimationFrame(
                                updateCardTilt
                            );

                    }

                },
                {
                    passive: true
                }
            );


            card.addEventListener(
                "mouseleave",
                function () {

                    if (frame) {

                        cancelAnimationFrame(
                            frame
                        );

                        frame = 0;

                    }


                    card.style.transform = "";

                }
            );

        }
    );

}


/* =========================================================
   6. HERO PARALLAX
========================================================= */

const hero =
    document.querySelector(
        ".hero"
    );


const floralElements =
    document.querySelectorAll(
        ".floral"
    );


if (
    hero &&
    hasFinePointer &&
    floralElements.length
) {

    let parallaxFrame = 0;


    let pointerX = 0;
    let pointerY = 0;


    function updateParallax() {

        parallaxFrame = 0;


        const x =
            (pointerX / window.innerWidth) -
            0.5;


        const y =
            (pointerY / window.innerHeight) -
            0.5;


        floralElements.forEach(
            function (element, index) {

                const speed =
                    (index + 1) * 8;


                element.style.transform =
                    "translate(" +
                    (x * speed) +
                    "px, " +
                    (y * speed) +
                    "px)";

            }
        );

    }


    window.addEventListener(
        "mousemove",
        function (event) {

            pointerX =
                event.clientX;


            pointerY =
                event.clientY;


            if (!parallaxFrame) {

                parallaxFrame =
                    requestAnimationFrame(
                        updateParallax
                    );

            }

        },
        {
            passive: true
        }
    );

}


/* =========================================================
   7. VENUE MAP
========================================================= */

function openMap() {

    window.open(
        "https://www.google.com/maps",
        "_blank",
        "noopener"
    );

}


/* =========================================================
   8. NAVBAR ACTIVE SECTION
========================================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


const navLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


let scrollFrame = 0;


function updateActiveSection() {

    scrollFrame = 0;


    let current = "";


    sections.forEach(
        function (section) {

            const sectionTop =
                section.offsetTop - 180;


            if (
                window.scrollY >=
                sectionTop
            ) {

                current =
                    section.getAttribute(
                        "id"
                    );

            }

        }
    );


    navLinks.forEach(
        function (link) {

            const isActive =
                link.getAttribute("href") ===
                "#" + current;


            link.classList.toggle(
                "active",
                isActive
            );


            link.style.color =
                isActive
                    ? "#b57f6c"
                    : "";

        }
    );

}


window.addEventListener(
    "scroll",
    function () {

        if (!scrollFrame) {

            scrollFrame =
                requestAnimationFrame(
                    updateActiveSection
                );

        }

    },
    {
        passive: true
    }
);


/*
   Set active navigation immediately.
*/

updateActiveSection();


/* =========================================================
   9. INVITATION CARD
========================================================= */

const invitationCard =
    document.querySelector(
        ".invitation-card"
    );


function toggleInvitation() {

    if (invitationCard) {

        invitationCard.classList.toggle(
            "opened"
        );

    }

}


if (invitationCard) {

    invitationCard.addEventListener(
        "click",
        toggleInvitation
    );

}


/* =========================================================
   10. SMOOTH NAVIGATION
========================================================= */

document
    .querySelectorAll(
        ".nav-links a"
    )
    .forEach(
        function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();


                    const target =
                        document.querySelector(
                            link.getAttribute(
                                "href"
                            )
                        );


                    if (target) {

                        target.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }

                }
            );

        }
    );


/* =========================================================
   11. MOBILE MENU
========================================================= */

const menuButton =
    document.getElementById(
        "menuButton"
    );


const navigation =
    document.querySelector(
        ".nav-links"
    );


if (
    menuButton &&
    navigation
) {

    menuButton.addEventListener(
        "click",
        function () {

            const isOpen =
                navigation.classList.toggle(
                    "mobile-open"
                );


            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        }
    );


    navigation
        .querySelectorAll("a")
        .forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        navigation.classList.remove(
                            "mobile-open"
                        );


                        menuButton.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }
                );

            }
        );

}


/* =========================================================
   12. INVITATION BUTTON
========================================================= */

const openCard =
    document.querySelector(
        ".open-card"
    );


if (openCard) {

    openCard.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();


            toggleInvitation();

        }
    );

}


/* =========================================================
   13. PAGE LOADING
========================================================= */

window.addEventListener(
    "load",
    function () {

        document.body.classList.add(
            "loaded"
        );

    },
    {
        once: true
    }
);


/* =========================================================
   14. GALLERY CARD REVEAL DELAY
========================================================= */

const galleryCards =
    document.querySelectorAll(
        ".gallery-card"
    );


galleryCards.forEach(
    function (card, index) {

        card.style.transitionDelay =
            (index * 0.08) + "s";

    }
);


/* =========================================================
   15. RESIZE SAFETY
========================================================= */

let resizeTimer = 0;


window.addEventListener(
    "resize",
    function () {

        clearTimeout(
            resizeTimer
        );


        resizeTimer =
            setTimeout(
                function () {

                    /*
                       Close mobile menu
                       when returning to desktop.
                    */

                    if (
                        window.innerWidth > 950 &&
                        navigation &&
                        menuButton
                    ) {

                        navigation.classList.remove(
                            "mobile-open"
                        );


                        menuButton.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }


                    updateActiveSection();

                },
                120
            );

    },
    {
        passive: true
    }
);
