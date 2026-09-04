console.log("Stars Loaded");

const far = document.getElementById("stars-far");
const mid = document.getElementById("stars-mid");
const near = document.getElementById("stars-near");

function createStars(container, count){

    for(let i = 0; i < count; i++){

        const star = document.createElement("div");

        star.classList.add("star");

        const random = Math.random();

        if(random < 0.75){

            // Normal star

        }else if(random < 0.90){

            star.classList.add("glow");

        }else if(random < 0.98){

            star.classList.add("cross");

        }else{

            star.classList.add("diamond");

        }

        const size = Math.random()*2 + 0.5;

        star.style.width = size + "px";
        star.style.height = size + "px";

        star.style.left = Math.random()*100 + "%";
        star.style.top = Math.random()*100 + "%";

        star.style.animationDuration=
        Math.random()*8+4+"s";

        star.style.animationDelay =
            Math.random()*5 + "s";

        container.appendChild(star);

        if(Math.random() < 0.04){
            star.style.width="4px";
            star.style.height="4px";
            
            star.classList.add("hero-star");
        }

    }


}

createStars(far,380);
createStars(mid,100);
createStars(near,60);

setInterval(()=>{

            const stars=document.querySelectorAll(".star");
            
            const randomStar=
            stars[Math.floor(Math.random()*stars.length)];
            
            randomStar.classList.add("flash");
            
            setTimeout(()=>{
                randomStar.classList.remove("flash");
            },600);
        },1800);


function createShootingStar(){

    const meteor = document.createElement("div");

    meteor.className = "shooting-star";

    document.querySelector(".hero").appendChild(meteor);

    // Starting Position
    let x = window.innerWidth * 0.65 + Math.random() * 250;
    let y = Math.random() * 120;

    // Speed
    let vx = -(7 + Math.random()*2);
    let vy = 2;

    // Gravity
    const gravity = 0.035;

    // Rotation
    const angle = -25;

    // Random Length
    meteor.style.width =120 + Math.random()*180 + "px";
    meteor.style.height=1+Math.random()*2+"px";

    function animate(){

        x += vx;
        y += vy;

        vy += gravity;

        meteor.style.left = x + "px";
        meteor.style.top = y + "px";

        meteor.style.transform =
            `rotate(${angle}deg)`;

        if(x < -300 || y > window.innerHeight){

            meteor.remove();

            return;

        }

        requestAnimationFrame(animate);

    }

    animate();

}

function randomMeteor(){

    createShootingStar();

    const next =
        5000 + Math.random()*9000;

    setTimeout(randomMeteor,next);

}

randomMeteor();

document.addEventListener("mousemove",(e)=>{

    const x=(e.clientX/window.innerWidth-.5);

    const y=(e.clientY/window.innerHeight-.5);

    far.style.transform=
    `translate(${x*8}px,${y*8}px)`;

    mid.style.transform=
    `translate(${x*18}px,${y*18}px)`;

    near.style.transform=
    `translate(${x*30}px,${y*30}px)`;

    document.querySelector(".hero-moon").style.transform=
    `translate(calc(-50% + ${x*15}px),${y*15}px)`;

    document.querySelectorAll(".nebula").forEach((nebula,index)=>{
        nebula.style.transform=
        `translate(${x*(15+index*8)}px,${y*(15+index*8)}px)`;
    });

});

document.getElementById("exploreBtn").addEventListener("click",()=>{

    document.querySelector("#about").scrollIntoView({

        behavior:"smooth"

    });

});

// ===================================
// Window Stars
// ===================================

const windowStars = document.querySelector(".window-shooting-stars");

for(let i = 0; i < 120; i++){

    const star = document.createElement("div");

    star.classList.add("mini-star");

    const size = Math.random()*2 + .5;

    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.left = Math.random()*100 + "%";
    star.style.top = Math.random()*100 + "%";

    star.style.animationDelay =
        Math.random()*5 + "s";

    star.style.animationDuration =
        (2 + Math.random()*4) + "s";

    windowStars.appendChild(star);

    if(Math.random()<0.15){

    star.style.boxShadow=

    "0 0 6px white";}

}

const aboutWindow = document.querySelector(".about-window");
const moon = document.querySelector(".window-moon");
const clouds = document.querySelectorAll(".window-real-cloud");

aboutWindow.addEventListener("mousemove",(e)=>{

    const rect = aboutWindow.getBoundingClientRect();

    const x = (e.clientX - rect.left)/rect.width - 0.5;
    const y = (e.clientY - rect.top)/rect.height - 0.5;

    moon.style.transform =
    `translate(${x*10}px, ${y*10}px)`;

    clouds.forEach((cloud,index)=>{

        const amount = (index+1)*6;

        cloud.style.transform =
        `translate(${x*amount}px, ${y*amount}px)`;

    });

});

const windowSky =
document.querySelector(".window-shooting-stars");


function createWindowMeteor(){

    if(!windowSky) return;

    const meteor =
    document.createElement("div");

    meteor.className="window-meteor";


    meteor.style.top =
    Math.random()*200 + "px";


    meteor.style.left =
    Math.random()*100 + "%";


    windowSky.appendChild(meteor);


    setTimeout(()=>{

        meteor.remove();

    },2000);

}

function randomWindowMeteor(){

    createWindowMeteor();

    const next =
    3000 + Math.random()*7000;

    setTimeout(randomWindowMeteor,next);

}

randomWindowMeteor();

const observer =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            aboutWindow.classList.add("open");

            observer.unobserve(aboutWindow);

        }

    });

},{
    threshold:.5
});


observer.observe(aboutWindow);

document.querySelectorAll('.project-star').forEach(star => {
    star.addEventListener('mouseenter', () => {
        const path = document.querySelector('.star-lines path');
        path.style.display = "block"; // Show the shooting streak
    });
    star.addEventListener('mouseleave', () => {
        const path = document.querySelector('.star-lines path');
        path.style.display = "none";  // Hide it when you move away
    });
});

const projects = {

    dmart:{
        name:"DMart Stock Prediction",
        mission:"Forecasting stock movement using statistical models",
        tools:"Python • Monte Carlo • HMM",
        link:"projects/dmart.html"
    },


    gene:{
        name:"Gene Expression ML",
        mission:"Biological classification model",
        tools:"PCA • SVM • ML",
        link:"projects/gene.html"
    },


    ai:{
        name:"AI Persona Chatbot",
        mission:"Creative conversational AI system",
        tools:"AI • NLP",
        link:"projects/ai.html"
    },


    iris:{
        name:"Iris Classification",
        mission:"Flower prediction application",
        tools:"Decision Tree • Streamlit",
        link:"projects/iris.html"
    },


    analytics:{
        name:"Data Stories",
        mission:"Finding insights through visual analysis",
        tools:"EDA • Dashboard",
        link:"projects/stories.html"
    },

    "mary-core":{
        name:"Mary's Universe",
        mission:"Personal celestial portfolio experience",
        tools:"HTML • CSS • JavaScript",
        link:"projects/universe.html"
    }

};

const card =
document.querySelector(".discovery-card");

const stars =
document.querySelectorAll(".project-star");

const discovery =
document.getElementById("discovery");

const map =
document.querySelector(".constellation-map");



stars.forEach(star => {


    star.addEventListener("click",(e)=>{


        e.stopPropagation();


        let key =
        [...star.classList]
        .find(cls => projects[cls]);


        document.querySelector("#projectName").innerText =
        projects[key].name;


        document.querySelector("#mission").innerText =
        projects[key].mission;


        document.querySelector("#tools").innerText =
        projects[key].tools;

        document.querySelector("#projectLink").href =
        projects[key].link;

        const starBox =
        star.getBoundingClientRect();


        const mapBox =
        map.getBoundingClientRect();



        let x =
        starBox.left - mapBox.left + 60;


        let y =
        starBox.top - mapBox.top - 80;



        // ⭐ Data Stories special card position
        if(key === "analytics"){


            x =
            starBox.left - mapBox.left + 120;


            y =
            starBox.top - mapBox.top - 20;


        }

        else{


            if(x + 300 > mapBox.width){


                x =
                starBox.left - mapBox.left - 320;


            }



            if(y < 0){


                y =
                starBox.top - mapBox.top + 40;


            }


        }



        discovery.style.left =
        x + "px";


        discovery.style.top =
        y + "px";


        // ✨ OPEN CARD AGAIN
        discovery.classList.add("active");


    });


});




// 🌌 click space = close telescope
document.addEventListener("click",()=>{


    discovery.classList.remove("active");


});



// 🔭 clicking card itself doesn't close it
discovery.addEventListener("click",(e)=>{


    e.stopPropagation();


});

/* =========================================
   RESEARCH CARD GAME
========================================= */

const researchCards =
    document.querySelectorAll(".research-card");

const scoreCount =
    document.getElementById("scoreCount");

let discoveriesFound = 0;

researchCards.forEach(function(card) {

    let flipTimer;

    card.addEventListener("click", function(e) {

        e.stopPropagation();

        /* If already flipped, do nothing */
        if (card.classList.contains("flipped")) {
            return;
        }

        card.classList.add("flipped");

        clearTimeout(flipTimer);

        /* =================================
           CORRECT CARDS
           Card 3 + Card 6
        ================================= */

        const isResearchCard =
            card.classList.contains("card-three") ||
            card.classList.contains("card-five");

        if (isResearchCard) {

            /* Add score only once */
            if (!card.dataset.discovered) {

                card.dataset.discovered = "true";

                discoveriesFound++;

scoreCount.textContent =
    discoveriesFound;

/* ✦ Score glow */

const scoreBox =
    document.getElementById("researchScore");

scoreBox.classList.remove("updated");

void scoreBox.offsetWidth;

scoreBox.classList.add("updated");
            }

            /* Correct cards stay longer */
            flipTimer = setTimeout(function() {

                card.classList.remove("flipped");

            }, 12000);

        }

        /* =================================
           MYSTERY CARDS
        ================================= */

        else {

            /* Normal cards flip back after 5 sec */

            flipTimer = setTimeout(function() {

                card.classList.remove("flipped");

            }, 5000);

        }

    });

});

/* =========================================
   RESEARCH DISCOVERY PANEL
========================================= */

const researchPanel =
    document.getElementById("researchPanel");

const closeResearch =
    document.getElementById("closeResearch");

const discoveryButtons =
    document.querySelectorAll(".enter-discovery");

const panelTitle =
    document.getElementById("panelTitle");

const panelSubtitle =
    document.getElementById("panelSubtitle");

const panelDescription =
    document.getElementById("panelDescription");

const panelGithub =
    document.getElementById("panelGithub");


/* METHOD BOXES */

const method1 =
    document.getElementById("method1");

const method2 =
    document.getElementById("method2");

const method3 =
    document.getElementById("method3");


/* =========================================
   RESEARCH DATA
========================================= */

const researchData = {

    dna: {

        title:
            "DNA Forensic Analysis",

        subtitle:
            "Statistical Inference",

        description:
            "A statistical framework for forensic DNA analysis combining Random Match Probability, Likelihood Ratios and Bayesian Inference to evaluate the strength of DNA evidence.",

        methods: [
            "Random Match Probability",
            "Likelihood Ratio",
            "Bayesian Inference"
        ],

        github:
            "https://github.com/TheDataPoetMaryam/DNA-Forensic-Analysis"

    },


    multitasking: {

        title:
            "Predicting Task Accuracy",

        subtitle:
            "Human Behaviour Research",

        description:
            "A statistical research project investigating the relationship between digital multitasking behaviour and task performance using questionnaire data and regression analysis.",

        methods: [
            "139 Participants",
            "Regression Analysis",
            "R · Python"
        ],

        github:
            "https://github.com/TheDataPoetMaryam/Digital-Multitasking-Analysis"

    }

};


/* =========================================
   OPEN DISCOVERY
========================================= */

discoveryButtons.forEach(function(button) {

    button.addEventListener("click", function(e) {

        e.preventDefault();

        e.stopPropagation();

        const key =
            button.dataset.research;

        const data =
            researchData[key];

        if (!data) {
            return;
        }


        panelTitle.textContent =
            data.title;

        panelSubtitle.textContent =
            data.subtitle;

        panelDescription.textContent =
            data.description;


        method1.textContent =
            data.methods[0];

        method2.textContent =
            data.methods[1];

        method3.textContent =
            data.methods[2];


        panelGithub.href =
            data.github;


        researchPanel.classList.add("active");

    });

});


/* =========================================
   CLOSE DISCOVERY
========================================= */

closeResearch.addEventListener("click", function(e) {

    e.preventDefault();

    e.stopPropagation();

    researchPanel.classList.remove("active");

});

/* =========================================================
   MARY'S UNIVERSE
   FINAL 3D SKILL GLOBE
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const viewport =
        document.getElementById("skillGlobeStage");

    const globe =
        document.getElementById("skillGlobe");

    const svg =
        document.getElementById("skillConnections");


    if (!viewport || !globe || !svg) {
        console.error("Skills Globe elements not found.");
        return;
    }


    /* =====================================================
       CLEAN OLD GENERATED CONTENT
    ===================================================== */

    globe.innerHTML = "";
    svg.innerHTML = "";


    /* =====================================================
       SKILLS
    ===================================================== */

    const skillsData = [

        {
            id: 0,
            name: "Python",
            category: "Programming",
            icon: "🐍"
        },

        {
            id: 1,
            name: "R",
            category: "Statistics",
            icon: "R"
        },

        {
            id: 2,
            name: "SQL",
            category: "Data Tools",
            icon: "⌘"
        },

        {
            id: 3,
            name: "Statistics",
            category: "Statistics",
            icon: "∑"
        },

        {
            id: 4,
            name: "Machine Learning",
            category: "AI / ML",
            icon: "◈"
        },

        {
            id: 5,
            name: "Excel",
            category: "Data Tools",
            icon: "▦"
        },

        {
            id: 6,
            name: "GitHub",
            category: "Development",
            icon: "◉"
        },

        {
            id: 7,
            name: "Power BI",
            category: "Data Tools",
            icon: "◫"
        },

        {
            id: 8,
            name: "Tableau",
            category: "Data Tools",
            icon: "◌"
        },

        {
            id: 9,
            name: "Canva",
            category: "Creative",
            icon: "✧"
        },

        {
            id: 10,
            name: "Photoshop",
            category: "Creative",
            icon: "Ps"
        },

        {
            id: 11,
            name: "Research",
            category: "Research",
            icon: "🔬"
        },

        {
            id: 12,
            name: "Communication",
            category: "Soft Skills",
            icon: "💬"
        },

        {
            id: 13,
            name: "Problem Solving",
            category: "Soft Skills",
            icon: "💡"
        },

        {
            id: 14,
            name: "Architecture",
            category: "Development",
            icon: "🏛"
        },

        {
            id: 15,
            name: "Deep Learning",
            category: "AI / ML",
            icon: "🧠"
        },

        {
            id: 16,
            name: "Data Cleaning",
            category: "Hard Skills",
            icon: "🧹"
        },

        {
            id: 17,
            name: "Storytelling",
            category: "Creative",
            icon: "📖"
        },

        {
            id: 18,
            name: "Hypothesis Test",
            category: "Statistics",
            icon: "📊"
        },

        {
            id: 19,
            name: "Teamwork",
            category: "Soft Skills",
            icon: "🤝"
        },

        {
            id: 20,
            name: "Web Design",
            category: "Development",
            icon: "💻"
        }

    ];


    /* =====================================================
       CONNECTIONS

       "core" means the fixed centre node.

       Every skill has at least one connection.
       Only meaningful links are used.
    ===================================================== */

    const connections = [

        /* CORE SPOKES */

        ["core", 0],     // Python
        ["core", 3],     // Statistics
        ["core", 4],     // Machine Learning
        ["core", 11],    // Research
        ["core", 12],    // Communication
        ["core", 20],    // Web Design


        /* PROGRAMMING / AI */

        [0, 1],
        [0, 2],
        [0, 4],
        [0, 15],

        [4, 15],
        [4, 16],


        /* STATISTICS */

        [1, 3],
        [1, 18],

        [3, 11],
        [3, 18],


        /* DATA */

        [2, 5],
        [2, 7],
        [2, 8],

        [5, 16],

        [7, 8],


        /* DEVELOPMENT */

        [6, 14],
        [6, 20],

        [14, 20],


        /* CREATIVE */

        [9, 10],
        [9, 17],

        [10, 17],


        /* RESEARCH */

        [11, 17],
        [11, 18],


        /* SOFT SKILLS */

        [12, 13],
        [12, 19],

        [13, 19]

    ];


    /* =====================================================
       SETTINGS
    ===================================================== */

    const SETTINGS = {

        /* Sphere */

        desktopRadius: 305,

        maxRadius: 320,


        /* CORE DANGER ZONE

           No skill hexagon is allowed inside this circle.
        */

        coreDangerRadius: 160,


        /* Separation between visible hexagons */

        minimumNodeGap: 125,


        /* Interaction */

        dragSpeed: 0.0055,

        maxVerticalTilt: 0.28,


        /* Extremely slow idle movement */

        idleRotation: 0.00008,


        /* Depth visibility */

        hideBehind: -0.14,


        /* Hexagon edge distances */

        nodeEdge: 41,

        coreEdge: 70

    };


    /* =====================================================
       CREATE CORE
    ===================================================== */

    const core =
        document.createElement("div");

    core.className =
        "skill-node core-node";

    core.innerHTML = `

        <div class="hexagon core-hexagon">

            <span class="skill-icon">
                ✦
            </span>

            <span class="skill-name">
                CORE
            </span>

            <span class="skill-category">
                MY UNIVERSE
            </span>

        </div>

    `;

    globe.appendChild(core);


    /* =====================================================
       CREATE SKILL NODES
    ===================================================== */

    const nodes = [];

    skillsData.forEach(skill => {

        const element =
            document.createElement("div");

        element.className =
            "skill-node";

        element.dataset.skill =
            skill.name;

        element.innerHTML = `

            <div class="hexagon">

                <span class="skill-icon">
                    ${skill.icon}
                </span>

                <span class="skill-name">
                    ${skill.name}
                </span>

                <span class="skill-category">
                    ${skill.category}
                </span>

            </div>

        `;

        globe.appendChild(element);


        nodes.push({

            ...skill,

            element,

            x: 0,

            y: 0,

            z: 0

        });

    });


    /* =====================================================
       FIBONACCI SPHERE

       IMPORTANT FIX:

       We use (i + 0.5) instead of putting the first skill
       exactly at the north pole.

       That means PYTHON now actually travels around the
       globe when rotated instead of appearing stuck.
    ===================================================== */

    const goldenAngle =
        Math.PI *
        (3 - Math.sqrt(5));


    nodes.forEach((node, i) => {

        const count =
            nodes.length;


        const y =
            1 -
            2 *
            ((i + 0.5) / count);


        const ring =
            Math.sqrt(
                Math.max(
                    0,
                    1 - y * y
                )
            );


        const theta =
            goldenAngle * i;


        node.x =
            Math.cos(theta) *
            ring;


        /*
           Slight vertical compression keeps the whole
           constellation away from heading and bottom hint.
        */

        node.y =
            y * 0.82;


        node.z =
            Math.sin(theta) *
            ring;

    });


    /* =====================================================
       SVG LINES
    ===================================================== */

    const lineObjects =
        connections.map(([a, b]) => {

            const line =
                document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "line"
                );


            /*
               Both class names are included so this works
               with either of our recent CSS versions.
            */

            line.setAttribute(
                "class",
                "skill-connection connection-line"
            );


            svg.appendChild(line);


            return {
                a,
                b,
                line
            };

        });


    /* =====================================================
       ROTATION STATE
    ===================================================== */

    let rotationY = 0.28;

    let rotationX = -0.04;


    let pointerDown = false;

    let globeDragging = false;


    let startX = 0;

    let startY = 0;


    let lastX = 0;


    /* =====================================================
       POINTER DOWN
    ===================================================== */

    viewport.addEventListener(
        "pointerdown",
        event => {

            if (
                event.pointerType === "mouse" &&
                event.button !== 0
            ) {
                return;
            }


            pointerDown = true;

            globeDragging = false;


            startX =
                event.clientX;

            startY =
                event.clientY;


            lastX =
                event.clientX;

        }
    );


    /* =====================================================
       POINTER MOVE
    ===================================================== */

    viewport.addEventListener(
        "pointermove",
        event => {

            if (!pointerDown) {
                return;
            }


            const totalX =
                event.clientX -
                startX;


            const totalY =
                event.clientY -
                startY;


            /*
               If the user is moving mainly vertically on
               touch, DON'T rotate the globe.

               Let the browser scroll normally.
            */

            if (
                event.pointerType === "touch" &&
                !globeDragging &&
                Math.abs(totalY) >
                Math.abs(totalX)
            ) {

                pointerDown = false;

                return;
            }


            /*
               Require a real horizontal gesture.
            */

            if (
                !globeDragging &&
                Math.abs(totalX) < 7
            ) {

                return;
            }


            globeDragging = true;


            viewport.classList.add(
                "dragging"
            );


            const deltaX =
                event.clientX -
                lastX;


            /*
               EVERY skill uses this same rotation.

               Python is NOT special/fixed.
            */

            rotationY +=
                deltaX *
                SETTINGS.dragSpeed;


            /*
               Very small vertical tilt only.
            */

            rotationX +=
                totalY * 0.00018;


            rotationX =
                Math.max(

                    -SETTINGS.maxVerticalTilt,

                    Math.min(

                        SETTINGS.maxVerticalTilt,

                        rotationX
                    )
                );


            lastX =
                event.clientX;

        }
    );


    /* =====================================================
       POINTER END
    ===================================================== */

    function stopDragging() {

        pointerDown = false;

        globeDragging = false;


        viewport.classList.remove(
            "dragging"
        );

    }


    window.addEventListener(
        "pointerup",
        stopDragging
    );


    window.addEventListener(
        "pointercancel",
        stopDragging
    );


    /* =====================================================
       ROTATION MATH
    ===================================================== */

    function rotatePoint(node) {

        /* Y rotation */

        const cosY =
            Math.cos(rotationY);


        const sinY =
            Math.sin(rotationY);


        const x1 =
            node.x * cosY -
            node.z * sinY;


        const z1 =
            node.z * cosY +
            node.x * sinY;


        /* X rotation */

        const cosX =
            Math.cos(rotationX);


        const sinX =
            Math.sin(rotationX);


        const y2 =
            node.y * cosX -
            z1 * sinX;


        const z2 =
            z1 * cosX +
            node.y * sinX;


        return {

            x: x1,

            y: y2,

            z: z2

        };

    }


    /* =====================================================
       RESPONSIVE SPHERE
    ===================================================== */

    function getSphereSettings() {

        const width =
            viewport.clientWidth;


        const height =
            viewport.clientHeight;


        let radius;


        if (width < 700) {

            radius =
                Math.min(

                    width * 0.38,

                    height * 0.29,

                    245
                );

        } else {

            radius =
                Math.min(

                    width * 0.28,

                    height * 0.34,

                    SETTINGS.maxRadius
                );

        }


        return {
    radius,

    centerX:
        width / 2,

    centerY:
        height * 0.58,

    coreDangerRadius:
        width < 700
            ? 55
            : SETTINGS.coreDangerRadius,

    minimumNodeGap:
        width < 700
            ? 78
            : SETTINGS.minimumNodeGap
};
    }


    /* =====================================================
       PROJECT 3D → SCREEN
    ===================================================== */

    function projectNode(node) {

        const settings =
            getSphereSettings();


        const point =
            rotatePoint(node);


        /*
           Controlled perspective.

           Front nodes enlarge slightly.
        */

        const perspective =
            1 /
            (
                1 -
                point.z * 0.16
            );


        return {

            x:
                settings.centerX +
                point.x *
                settings.radius *
                perspective,


            y:
                settings.centerY +
                point.y *
                settings.radius *
                perspective,


            z:
                point.z,


            scale:
                perspective,


            element:
                node.element,


            id:
                node.id

        };

    }


    /* =====================================================
       EDGE POINT
    ===================================================== */

    function edgePoint(
        from,
        to,
        distance
    ) {

        const dx =
            to.x - from.x;


        const dy =
            to.y - from.y;


        const length =
            Math.hypot(
                dx,
                dy
            );


        if (!length) {

            return {

                x: from.x,

                y: from.y

            };

        }


        return {

            x:
                from.x +
                (dx / length) *
                distance,


            y:
                from.y +
                (dy / length) *
                distance

        };

    }


    /* =====================================================
       CHECK IF A LINE ENTERS CORE DANGER ZONE
    ===================================================== */

    function lineCrossesCore(
        a,
        b,
        centerX,
        centerY,
        radius
    ) {

        const vx =
            b.x - a.x;


        const vy =
            b.y - a.y;


        const lengthSquared =
            vx * vx +
            vy * vy;


        if (!lengthSquared) {
            return false;
        }


        let t =
            (
                (centerX - a.x) * vx +
                (centerY - a.y) * vy
            ) /
            lengthSquared;


        t =
            Math.max(
                0,
                Math.min(
                    1,
                    t
                )
            );


        const nearestX =
            a.x +
            vx * t;


        const nearestY =
            a.y +
            vy * t;


        const distance =
            Math.hypot(

                nearestX -
                centerX,

                nearestY -
                centerY
            );


        return (
            distance <
            radius
        );

    }


    /* =====================================================
       RENDER
    ===================================================== */

    function render() {

        const settings =
            getSphereSettings();


        /*
           Almost invisible idle rotation.

           Stops while dragging.
        */

        if (!globeDragging) {

            rotationY +=
                SETTINGS.idleRotation;

        }


        /* =================================================
           CORE
        ================================================= */

        core.style.left =
            `${settings.centerX}px`;


        core.style.top =
            `${settings.centerY}px`;


        core.style.zIndex =
            "10000";


        core.style.opacity =
            "1";


        /* =================================================
           PROJECT ALL SKILLS
        ================================================= */

        const projected =
            nodes.map(
                projectNode
            );


        /*
           Visibility is calculated from front to back,
           allowing collision checks to prioritise the
           skills closest to the viewer.
        */

        const order =
            projected
                .map(
                    (point, index) => ({
                        point,
                        index
                    })
                )
                .sort(
                    (a, b) =>
                        b.point.z -
                        a.point.z
                );


        const visible =
            new Set();


        const accepted =
            [];


        /* =================================================
           SELECT VISIBLE NODES
        ================================================= */

        order.forEach(
            ({ point, index }) => {


                /* ------------------------------
                   BACK OF GLOBE
                ------------------------------ */

                if (
                    point.z <
                    SETTINGS.hideBehind
                ) {

                    return;
                }


                /* ------------------------------
                   CORE DANGER ZONE

                   This checks the WHOLE visual node gap,
                   not just whether Core is layered above it.
                ------------------------------ */

                const coreDistance =
                    Math.hypot(

                        point.x -
                        settings.centerX,

                        point.y -
                        settings.centerY
                    );


                if (
                    coreDistance <
                    settings.coreDangerRadius
                ) {

                    return;
                }


                /* ------------------------------
                   HEADING SAFE AREA
                ------------------------------ */

                if (
                    point.y < 200
                ) {

                    return;
                }


                /* ------------------------------
                   BOTTOM HINT SAFE AREA
                ------------------------------ */

                if (
                    point.y >
                    viewport.clientHeight -
                    90
                ) {

                    return;
                }


                /* ------------------------------
                   SIDE SAFE AREA
                ------------------------------ */

                if (
                    point.x < 55 ||
                    point.x >
                    viewport.clientWidth - 55
                ) {

                    return;
                }


                /* ------------------------------
                   HEXAGON ↔ HEXAGON COLLISION
                ------------------------------ */

                let collision =
                    false;


                for (
                    const other
                    of accepted
                ) {

                    const distance =
                        Math.hypot(

                            point.x -
                            other.x,

                            point.y -
                            other.y
                        );


                    if (
                        distance <
                        settings.minimumNodeGap
                    ) {

                        collision =
                            true;

                        break;
                    }

                }


                if (collision) {
                    return;
                }


                visible.add(
                    index
                );


                accepted.push(
                    point
                );

            }
        );


        /* =================================================
           DRAW NODES
        ================================================= */

        projected.forEach(
            (point, index) => {

                const element =
                    point.element;


                if (
                    !visible.has(index)
                ) {

                    element.style.opacity =
                        "0";


                    element.style.visibility =
                        "hidden";


                    element.style.pointerEvents =
                        "none";


                    return;

                }


                element.style.visibility =
                    "visible";


                element.style.pointerEvents =
                    "auto";


                /*
                   Front nodes appear slightly larger.
                */

                const frontAmount =
                    (point.z + 1) / 2;


                const depthScale =
                    0.82 +
                    frontAmount * 0.20;


                const finalScale =
                    point.scale *
                    depthScale;


                element.style.transform =
                    `
                    translate3d(
                        ${point.x}px,
                        ${point.y}px,
                        0
                    )
                    translate(-50%, -50%)
                    scale(${finalScale})
                    `;


                /*
                   Front = brighter
                   Side = softer
                */

                const opacity =
                    0.55 +
                    Math.max(
                        0,
                        point.z
                    ) * 0.45;


                element.style.opacity =
                    Math.min(
                        1,
                        opacity
                    );


                element.style.zIndex =
                    Math.round(
                        1000 +
                        point.z * 500
                    );


                element.classList.toggle(
                    "front",
                    point.z > 0.35
                );

            }
        );


        /* =================================================
           CORE POINT FOR CONNECTIONS
        ================================================= */

        const corePoint = {

            x:
                settings.centerX,

            y:
                settings.centerY,

            z:
                1,

            scale:
                1,

            core:
                true

        };


        /* =================================================
           CONNECTION LINES
        ================================================= */

        lineObjects.forEach(
            ({
                a,
                b,
                line
            }) => {


                const first =
                    a === "core"
                        ? corePoint
                        : projected[a];


                const second =
                    b === "core"
                        ? corePoint
                        : projected[b];


                const firstVisible =
                    a === "core" ||
                    visible.has(a);


                const secondVisible =
                    b === "core" ||
                    visible.has(b);


                /*
                   Only show connections whose actual
                   hexagons are currently visible.
                */

                if (
                    !firstVisible ||
                    !secondVisible
                ) {

                    line.style.opacity =
                        "0";

                    return;
                }


                /*
                   Non-Core lines cannot pass through the
                   Core danger zone.

                   This keeps Core visually clean.
                */

                if (
                    a !== "core" &&
                    b !== "core" &&
                    lineCrossesCore(

                        first,
                        second,

                        settings.centerX,
                        settings.centerY,

                        SETTINGS.coreDangerRadius * 0.78

                    )
                ) {

                    line.style.opacity =
                        "0";

                    return;
                }


                /*
                   Lines terminate at hexagon edges.
                */

                const start =
                    edgePoint(

                        first,
                        second,

                        a === "core"
                            ? SETTINGS.coreEdge
                            : SETTINGS.nodeEdge *
                              first.scale

                    );


                const end =
                    edgePoint(

                        second,
                        first,

                        b === "core"
                            ? SETTINGS.coreEdge
                            : SETTINGS.nodeEdge *
                              second.scale

                    );


                line.setAttribute(
                    "x1",
                    start.x
                );


                line.setAttribute(
                    "y1",
                    start.y
                );


                line.setAttribute(
                    "x2",
                    end.x
                );


                line.setAttribute(
                    "y2",
                    end.y
                );


                /*
                   Core spokes are a little brighter.
                */

                if (
                    a === "core" ||
                    b === "core"
                ) {

                    line.style.opacity =
                        "0.72";


                    line.style.strokeWidth =
                        "2";

                } else {

                    const depth =
                        Math.min(
                            first.z,
                            second.z
                        );


                    line.style.opacity =
                        Math.min(
                            0.68,
                            0.34 +
                            Math.max(
                                0,
                                depth
                            ) * 0.34
                        );


                    line.style.strokeWidth =
                        "1.6";
                }

            }
        );


        requestAnimationFrame(
            render
        );

    }


    /* =====================================================
       START
    ===================================================== */

    requestAnimationFrame(
        render
    );

});