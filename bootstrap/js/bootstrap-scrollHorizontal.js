let scroll_tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.factsContainer',
            start: "top center",
            // pin: true,
            scrub: true,
            end: "+=300",
            // markers: true,
        }
    }),
        facts = [...document.querySelectorAll('.fact')]
    scroll_tl.to('.factsContainer h2', {
        scale: 1.5,
        duration: 1,
        ease: "slow"
    })
    scroll_tl.to(facts, {
        xPercent: -85 * (facts.length - 1),
        scrollTrigger: {
            trigger: ".factsContainer_sm",
            start: "center center",
            pin: true,
            markers: true,
            // horizontal: true,
            // pinSpacing:false,
            // markers: true,
            scrub: 1,
            // snap: 1 / (facts.length - 1),
            // base vertical scrolling on how wide the container is so it feels more natural.
            // end: () => `+=${smallFactsContainer.offsetWidth}`
            end: () => `+=4320`
        }
    });

// rotasi acak di .fact img 
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".fact img");

    images.forEach((img, i) => {
      // Buat rotasi acak antara -10 sampai +10 derajat
      const angle = Math.floor(Math.random() * 21) - 5;
      img.style.transform = `rotate(${angle}deg)`;
    });
  });