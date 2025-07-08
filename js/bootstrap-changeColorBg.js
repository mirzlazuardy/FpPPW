gsap.from(".changeColor", {
  scrollTrigger: {
    trigger: ".changeColor",
    start: "center center",
    end: "bottom bottom",
    scrub: true,
    markers: true,
  }, 
  duration: 0.5,
  backgroundColor: "#1a1a1b",
  ease: "none",
});
