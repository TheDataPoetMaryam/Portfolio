window.addEventListener("DOMContentLoaded", () => {
  gsap.from(".logo", { y: -30, opacity: 0, duration: 0.8 });
  gsap.from("nav a", { y: -20, opacity: 0, stagger: 0.05, duration: 0.6 });

  gsap.from(".hero-title", { x: -50, opacity: 0, duration: 0.8 });
  gsap.from(".hero-subtitle", { x: -50, opacity: 0, delay: 0.1, duration: 0.8 });
  gsap.from(".description", { y: 20, opacity: 0, delay: 0.2, duration: 0.8 });
  gsap.from(".pill", { y: 15, opacity: 0, stagger: 0.08, delay: 0.4, duration: 0.5 });

  gsap.to(".video-container",{
    y:-10,
    duration:3,
    repeat:-1,
    yoyo:true,
    ease:"power1.inOut"
});

  gsap.from(".glass-card", {
    y: 30,
    opacity: 0,
    stagger: 0.15,
    duration: 0.8,
    delay: 0.3
  });
});

gsap.utils.toArray(".counter").forEach(counter => {

    let text = counter.innerText;

    let end = parseInt(text);

    let suffix = "";

    if(text.includes("K")) suffix = "K+";
    else if(text.includes("%")) suffix = "%";
    else if(text.includes("+")) suffix = "+";

    let obj = {value:0};

    gsap.to(obj,{
        value:end,
        duration:2,
        ease:"power2.out",

        scrollTrigger:counter,

        onUpdate:()=>{

            counter.innerText=Math.floor(obj.value)+suffix;

        }

    });

});

console.log("Universe JS Loaded!");