/* =========================================================
   KRUPALI & KEYUR
   PREMIUM WEDDING INVITATION JAVASCRIPT
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

    const now =
        new Date().getTime();

    const distance =
        wedding - now;


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

        days.innerHTML = "0";
        hours.innerHTML = "0";
        minutes.innerHTML = "0";
        seconds.innerHTML = "0";

        return;
    }


    const d =
        Math.floor(
            distance /
            (1000 * 60 * 60 * 24)
        );


    const h =
        Math.floor(
            (distance %
                (1000 * 60 * 60 * 24))
            /
            (1000 * 60 * 60)
        );


    const m =
        Math.floor(
            (distance %
                (1000 * 60 * 60))
            /
            (1000 * 60)
        );


    const s =
        Math.floor(
            (distance %
                (1000 * 60))
            /
            1000
        );


    days.innerHTML = d;
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;

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


const revealObserver =
    new IntersectionObserver(

        function(entries) {

            entries.forEach(
                function(entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add("show");

                    }

                }
            );

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(
    function(element) {

        revealObserver.observe(
            element
        );

    }
);


/* =========================================================
   4. PARTICLES
========================================================= */

const particleContainer =
    document.getElementById(
        "particles"
    );


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


for (
    let i = 0;
    i < 45;
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


cards.forEach(
    function(card) {


        card.addEventListener(
            "mousemove",
            function(event) {


                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const rotateX =
                    ((y - centerY) /
                        centerY) * -4;


                const rotateY =
                    ((x - centerX) /
                        centerX) * 4;


                card.style.transform =
                    `
                    perspective(1100px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    translateY(-8px)
                    scale(1.02)
                    `;

            }
        );


        card.addEventListener(
            "mouseleave",
            function() {

                card.style.transform =
                    "";

            }
        );

    }
);


/* =========================================================
   6. HERO PARALLAX
========================================================= */

const hero =
    document.querySelector(
        ".hero"
    );


window.addEventListener(
    "mousemove",
    function(event) {

        if (!hero) {
            return;
        }


        const x =
            (
                event.clientX /
                window.innerWidth
            ) - .5;


        const y =
            (
                event.clientY /
                window.innerHeight
            ) - .5;


        const floral =
            document.querySelectorAll(
                ".floral"
            );


        floral.forEach(
            function(element,index) {

                const speed =
                    (index + 1) * 8;


                element.style.transform =
                    `
                    translate(
                        ${x * speed}px,
                        ${y * speed}px
                    )
                    `;

            }
        );

    }
);


/* =========================================================
   7. VENUE MAP
========================================================= */

function openMap() {

    window.open(
        "https://www.google.com/maps",
        "_blank"
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


window.addEventListener(
    "scroll",
    function() {


        let current = "";


        sections.forEach(
            function(section) {

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
            function(link) {

                link.classList.remove(
                    "active"
                );


                if (
                    link.getAttribute("href")
                    ===
                    "#" + current
                ) {

                    link.classList.add(
                        "active"
                    );

                    link.style.color =
                        "#b57f6c";

                }

            }
        );

    }
);


/* =========================================================
   9. INVITATION CARD
========================================================= */

const invitationCard =
    document.querySelector(
        ".invitation-card"
    );


if (invitationCard) {

    invitationCard.addEventListener(
        "click",
        function() {

            invitationCard.classList.toggle(
                "opened"
            );

        }
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
        function(link) {


            link.addEventListener(
                "click",
                function(event) {

                    event.preventDefault();


                    const target =
                        document.querySelector(
                            link.getAttribute(
                                "href"
                            )
                        );


                    if (target) {

                        target.scrollIntoView({
                            behavior: "smooth"
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
        function() {

            navigation.classList.toggle(
                "mobile-open"
            );

        }
    );


    navigation
        .querySelectorAll("a")
        .forEach(
            function(link) {

                link.addEventListener(
                    "click",
                    function() {

                        navigation.classList.remove(
                            "mobile-open"
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
        function(event) {

            event.stopPropagation();

            if (invitationCard) {

                invitationCard.classList.toggle(
                    "opened"
                );

            }

        }
    );

}


/* =========================================================
   13. PAGE LOADING
========================================================= */

window.addEventListener(
    "load",
    function() {

        document.body.classList.add(
            "loaded"
        );

    }
);


/* =========================================================
   14. GALLERY CARD TILT
========================================================= */

const galleryCards =
    document.querySelectorAll(
        ".gallery-card"
    );


galleryCards.forEach(
    function(card,index) {

        card.style.transitionDelay =
            `${index * 0.08}s`;

    }
);


/* =========================================================
   15. PREVENT PARALLAX ON MOBILE
========================================================= */

function checkMobile() {

    if (
        window.innerWidth <= 700
    ) {

        window.removeEventListener(
            "mousemove",
            arguments.callee
        );

    }

}


checkMobile();