/* ============================================================
   MARY'S UNIVERSE
   JOURNEY ENGINE — FINAL CLEAN VERSION
   ============================================================ */


/* ============================================================
   JOURNEY CHAPTER DATA
   ============================================================ */

const chapters = [

    {
        id: "01",
        phase: "NEW MOON",
        phaseName: "NEW MOON · THE ORIGIN",
        image: "Images/moon-10-waxing-crescent.png",
        type: "FOUNDATION",
        year: "2019 — 2020",
        title: "THE BEGINNING",

        story:
            "SSC built the foundation. I discovered my love for Mathematics and Science, and the curiosity that would shape everything that followed.",

        tags: [
            "SSC · Maharashtra Board",
            "83.80%",
            "Mathematics",
            "Science"
        ]
    },


    {
        id: "02",
        phase: "WAXING CRESCENT",
        phaseName: "WAXING CRESCENT · THE SPARK",
        image: "Images/moon-02-waxing-crescent.png",
        type: "EDUCATION",
        year: "2020 — 2022",
        title: "THE CHOICE",

        story:
            "HSC Science opened the path towards Mathematics, Statistics and Physics. This was where the path towards Statistics began to take shape.",

        tags: [
            "HSC · Science",
            "Mathematics",
            "Statistics",
            "Physics",
            "56.50%"
        ]
    },


    {
        id: "03",
        phase: "FIRST QUARTER",
        phaseName: "FIRST QUARTER · THE AWAKENING",
        image: "Images/moon-03-first-quarter.png",
        type: "ACADEMIC",
        year: "2022 — 2025",
        title: "THE STATISTICIAN",

        story:
            "During my BSc in Statistics, numbers became more than calculations. Probability, regression, distributions and programming became tools for understanding the world.",

        tags: [
            "BSc Statistics",
            "R Programming",
            "Probability",
            "Regression"
        ],

        milestones: [
            "Academic Topper — Statistics",
            "1st Prize — Pictorial Statistics",
            "CCC Certification",
            "3rd Place — Box Cricket"
        ]
    },


    {
        id: "04",
        phase: "WAXING GIBBOUS",
        phaseName: "WAXING GIBBOUS · THE ART OF DATA",
        image: "Images/moon-04-waxing-gibbous.png",
        type: "CREATIVE",
        year: "2024 — 2025",
        title: "THE CREATOR",

        story:
            "I began bringing numbers and visual communication together — discovering that analysis could be presented with the same care as the analysis itself.",

        tags: [
            "Visual Storytelling",
            "Presentation",
            "Canva",
            "Design"
        ],

        milestones: [
            "1st Prize — PPT Presentation",
            "I-COP PRO Certification",
            "DLLE Extension Work"
        ]
    },


    {
        id: "05",
        phase: "FULL MOON",
        phaseName: "FULL MOON · THE BREAKTHROUGH",
        image: "Images/moon-05-full.png",
        type: "SELF-DIRECTED",
        year: "2025",
        title: "THE TURNING POINT",

        story:
            "After TYBSc, I used my vacation to learn by building. Indian Startup Funding Analysis became my first self-directed project and a turning point in how I approached real data.",

        tags: [
            "First Project",
            "EDA",
            "Statistical Analysis",
            "Data Visualization"
        ],

        milestones: [
            "Indian Startup Funding Analysis"
        ]
    },


    {
        id: "06",
        phase: "WANING GIBBOUS",
        phaseName: "WANING GIBBOUS · CONSTRUCTING SYSTEMS",
        image: "Images/moon-06-waning-gibbous.png",
        type: "ACADEMIC BUILDING",
        year: "2025",
        title: "THE BUILDER",

        story:
            "MSc Part I pushed me from learning concepts to applying them. Projects became laboratories where statistics, machine learning and programming came together.",

        tags: [
            "DMart",
            "Iris",
            "Machine Learning",
            "Python"
        ],

        milestones: [
            "DMart Stock Analysis & Prediction",
            "Iris Species Intelligence"
        ]
    },


    {
        id: "07",
        phase: "LAST QUARTER",
        phaseName: "LAST QUARTER · DEEP INQUIRIES",
        image: "Images/moon-07-third-quarter.png",
        type: "RESEARCH",
        year: "2026",
        title: "THE RESEARCHER",

        story:
            "The questions became deeper. I explored biological data, forensic inference and human behaviour — moving from simply finding answers to investigating why patterns exist.",

        tags: [
            "Gene Expression",
            "DNA Forensics",
            "Research",
            "Statistical Inference"
        ],

        milestones: [
            "Hidden Patterns in Human Gene Expression",
            "DNA Forensic Analysis",
            "Predicting Task Accuracy from Digital Multitasking Behaviour"
        ]
    },


    {
        id: "08",
        phase: "WANING CRESCENT",
        phaseName: "WANING CRESCENT · SELF-EXPLORATION",
        image: "Images/moon-08-waning-crescent.png",
        type: "SELF-DIRECTED",
        year: "2026",
        title: "BEYOND THE SYLLABUS",

        story:
            "I started building simply because I wanted to grow. AI experiments and this portfolio became spaces to explore development, ideas and creativity beyond academic requirements.",

        tags: [
            "AI",
            "LLM",
            "Prompt Engineering",
            "Web Development"
        ],

        milestones: [
            "Synthetic Persona Intelligence",
            "Mary’s Universe Portfolio Architecture"
        ]
    },


    {
        id: "09",
        phase: "RADIANT MOON",
        phaseName: "RADIANT MOON · PINNACLE OF INITIATIVE",
        image: "Images/moon-09-new-dark.png",
        type: "LEADERSHIP",
        year: "AUGUST 2026",
        title: "THE LEADER",

        story:
            "Quent Quest became my first leadership experience. As Coordinator and Social Media Head, I handled responsibilities from the beginning to the end.",

        tags: [
            "Quent Quest",
            "Coordinator",
            "Social Media Head",
            "Leadership"
        ],

        milestones: [
            "Quent Quest — Inter-Collegiate One-Day Event",
            "Coordinator — Event Management",
            "Social Media Head"
        ],

        special: true
    },


    {
        id: "10",
        phase: "ETERNAL HORIZON",
        phaseName: "ETERNAL HORIZON · THE NEXT CHAPTER",
        image: "Images/full moon.png",
        type: "CURRENT",
        year: "2026 →",
        title: "THE UNIVERSE CONTINUES",

        story:
            "This is not the end of the story. I am still learning, still building, still researching and still discovering what the next version of my universe can become.",

        tags: [
            "MSc Applied Statistics",
            "Research",
            "AI",
            "Creative Development"
        ],

        milestones: [
            "The next chapter is still being written"
        ]
    }

];


/* ============================================================
   JOURNEY ENGINE
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    const orbit =
        document.querySelector(".orbit");

    const coreMoon =
        document.getElementById("coreMoon");

    const coreNumber =
        document.getElementById("coreNumber");

    const detailType =
        document.getElementById("detailType");

    const detailYear =
        document.getElementById("detailYear");

    const detailTitle =
        document.getElementById("detailTitle");

    const detailStory =
        document.getElementById("detailStory");

    const detailTags =
        document.getElementById("detailTags");

    const detailMilestones =
        document.getElementById("detailMilestones");

    const journeyCurrent =
        document.getElementById("journeyCurrent");

    const prevButton =
        document.getElementById("journeyPrev");

    const nextButton =
        document.getElementById("journeyNext");


    if (!orbit) {

        console.error(
            "Journey orbit not found."
        );

        return;
    }


    /* ============================================================
       CURRENT CENTRE MOON
       ============================================================ */

    let currentMoon = 1;


    /* ============================================================
       ORBIT ORDER

       Initial state:

       CORE → 01

       Orbit:
       10 → 02 → 03 → 04 → 05
       06 → 07 → 08 → 09

       The movement mechanism remains unchanged.
       ============================================================ */

    let orbitMoons = [
        10,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
    ];


    /* ============================================================
       FINAL CIRCULAR / ELLIPTICAL VISUAL POSITIONS

       These positions correspond to the nine orbital locations.

       They are visual positions only.
       The click/movement mechanism below remains independent.
       ============================================================ */

    const positions = [

    /* POSITION 1 — UPPER LEFT */
    {
        x: "-180px",
        y: "-235px"
    },

    /* POSITION 2 — TOP */
    {
        x: "150px",
        y: "-225px"
    },

    /* POSITION 3 — UPPER RIGHT */
    {
        x: "253px",
        y: "-130px"
    },

    /* POSITION 4 — RIGHT */
    {
        x: "283px",
        y: "40px"
    },

    /* POSITION 5 — LOWER RIGHT */
    {
        x: "173px",
        y: "210px"
    },

    /* POSITION 6 — BOTTOM */
    {
        x: "0px",
        y: "273px"
    },

    /* POSITION 7 — LOWER LEFT */
    {
        x: "-173px",
        y: "210px"
    },

    /* POSITION 8 — LEFT */
    {
        x: "-293px",
        y: "65px"
    },

    /* POSITION 9 — UPPER LEFT */
    {
        x: "-273px",
        y: "-105px"
    }

];
    /* ============================================================
       CREATE ORBIT MOONS
       ============================================================ */

    const moonElements = {};


    chapters.forEach(chapter => {

        const id =
            Number(chapter.id);

        const moon =
            document.createElement("button");

        moon.className =
            "orbit-moon";

        moon.type =
            "button";

        moon.dataset.id =
            id;

        moon.setAttribute(
            "aria-label",
            `Explore ${chapter.title}`
        );


        moon.innerHTML = `

            <span class="moon-number">
                ${chapter.id}
            </span>

            <img
                src="${chapter.image}"
                alt="${chapter.phase}"
            >

        `;


        moon.addEventListener(
            "click",
            event => {

                event.preventDefault();

                event.stopPropagation();

                moveToCenter(id);

            }
        );


        orbit.appendChild(moon);

        moonElements[id] =
            moon;

    });


    /* ============================================================
       RENDER ORBIT
       ============================================================ */

    function renderOrbit() {

        chapters.forEach(chapter => {

            const id =
                Number(chapter.id);

            const moon =
                moonElements[id];

            if (!moon) {
                return;
            }


            const positionIndex =
                orbitMoons.indexOf(id);


            /* ----------------------------------------------------
               CURRENT CENTRE MOON

               The actual centre moon is controlled by #coreMoon,
               so its orbital copy stays invisible.
               ---------------------------------------------------- */

            if (
                id === currentMoon ||
                positionIndex === -1
            ) {

                moon.style.opacity =
                    "0";

                moon.style.pointerEvents =
                    "none";

                return;
            }


            /* ----------------------------------------------------
               ORBIT MOON
               ---------------------------------------------------- */

            moon.style.opacity =
                "1";

            moon.style.pointerEvents =
                "auto";


            moon.style.setProperty(
                "--x",
                positions[positionIndex].x
            );

            moon.style.setProperty(
                "--y",
                positions[positionIndex].y
            );

        });

    }


    /* ============================================================
       UPDATE CENTRAL MOON + JOURNEY DETAILS
       ============================================================ */

    function updateCenter() {

        const chapter =
            chapters.find(
                item =>
                    Number(item.id) ===
                    currentMoon
            );


        if (!chapter) {
            return;
        }


        /* ----------------------------------------------------
           CENTRAL MOON IMAGE
           ---------------------------------------------------- */

        if (coreMoon) {

            coreMoon.src =
                chapter.image;

            coreMoon.alt =
                chapter.phase;

        }


        /* ----------------------------------------------------
           CENTRAL NUMBER
           ---------------------------------------------------- */

        if (coreNumber) {

            coreNumber.textContent =
                chapter.id;

        }


        /* ----------------------------------------------------
           BOTTOM COUNTER
           ---------------------------------------------------- */

        if (journeyCurrent) {

            journeyCurrent.textContent =
                chapter.id;

        }


        /* ----------------------------------------------------
           TYPE
           ---------------------------------------------------- */

        if (detailType) {

            detailType.textContent =
                chapter.type;

        }


        /* ----------------------------------------------------
           YEAR
           ---------------------------------------------------- */

        if (detailYear) {

            detailYear.textContent =
                chapter.year;

        }


        /* ----------------------------------------------------
           TITLE
           ---------------------------------------------------- */

        if (detailTitle) {

            detailTitle.textContent =
                chapter.title;

        }


        /* ----------------------------------------------------
           STORY
           ---------------------------------------------------- */

        if (detailStory) {

            detailStory.textContent =
                chapter.story;

        }


        /* ----------------------------------------------------
           TAGS
           ---------------------------------------------------- */

        if (detailTags) {

            detailTags.innerHTML =
                "";

            (chapter.tags || [])
                .forEach(tag => {

                    const tagElement =
                        document.createElement(
                            "span"
                        );

                    tagElement.className =
                        "detail-tag";

                    tagElement.textContent =
                        tag;

                    detailTags.appendChild(
                        tagElement
                    );

                });

        }


        /* ----------------------------------------------------
           MILESTONES
           ---------------------------------------------------- */

        if (detailMilestones) {

            detailMilestones.innerHTML =
                "";

            (chapter.milestones || [])
                .forEach(milestone => {

                    const milestoneElement =
                        document.createElement(
                            "div"
                        );

                    milestoneElement.className =
                        "detail-milestone";

                    milestoneElement.textContent =
                        milestone;

                    detailMilestones.appendChild(
                        milestoneElement
                    );

                });

        }

    }


    /* ============================================================
       MOVE SELECTED MOON TO CENTRE

       IMPORTANT:
       THIS IS THE WORKING MECHANISM WE ARE KEEPING.

       Example:

       START
       CORE = 01
       ORBIT = [10, 02, 03, 04, 05, 06, 07, 08, 09]

       CLICK 02

       CORE = 02
       ORBIT = [10, 01, 03, 04, 05, 06, 07, 08, 09]

       The old centre moon replaces the clicked moon's
       position.

       Nothing disappears.
       ============================================================ */

    function moveToCenter(targetId) {

        if (
            targetId ===
            currentMoon
        ) {

            return;
        }


        const clickedIndex =
            orbitMoons.indexOf(
                targetId
            );


        if (clickedIndex === -1) {

            return;
        }


        const oldCenter =
            currentMoon;


        /* Remove clicked moon
           from its current orbital position. */

        orbitMoons.splice(
            clickedIndex,
            1
        );


        /* Put the previous centre moon
           into that exact orbital position. */

        orbitMoons.splice(
            clickedIndex,
            0,
            oldCenter
        );


        /* Selected moon becomes
           the new centre. */

        currentMoon =
            targetId;


        renderOrbit();

        updateCenter();

    }


    /* ============================================================
       NEXT CHAPTER
       ============================================================ */

    function nextMoon(event) {

        if (event) {

            event.preventDefault();

            event.stopPropagation();

        }


        const currentIndex =
            chapters.findIndex(
                chapter =>
                    Number(chapter.id) ===
                    currentMoon
            );


        const nextIndex =
            (
                currentIndex + 1
            ) %
            chapters.length;


        const nextId =
            Number(
                chapters[nextIndex].id
            );


        moveToCenter(nextId);

    }


    /* ============================================================
       PREVIOUS CHAPTER
       ============================================================ */

    function previousMoon(event) {

        if (event) {

            event.preventDefault();

            event.stopPropagation();

        }


        const currentIndex =
            chapters.findIndex(
                chapter =>
                    Number(chapter.id) ===
                    currentMoon
            );


        const previousIndex =
            (
                currentIndex -
                1 +
                chapters.length
            ) %
            chapters.length;


        const previousId =
            Number(
                chapters[previousIndex].id
            );


        moveToCenter(previousId);

    }


    /* ============================================================
       ARROW BUTTONS
       ============================================================ */

    if (nextButton) {

        nextButton.addEventListener(
            "click",
            nextMoon
        );

    }


    if (prevButton) {

        prevButton.addEventListener(
            "click",
            previousMoon
        );

    }


    /* ============================================================
       KEYBOARD NAVIGATION
       ============================================================ */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key ===
                "ArrowRight"
            ) {

                nextMoon();

            }


            if (
                event.key ===
                "ArrowLeft"
            ) {

                previousMoon();

            }

        }
    );


    /* ============================================================
       INITIALISE JOURNEY
       ============================================================ */

    renderOrbit();

    updateCenter();

});