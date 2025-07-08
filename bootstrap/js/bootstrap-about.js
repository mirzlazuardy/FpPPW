gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: ".navbar",
  start: "clamp(top)", //top+100
  end: "max",
  pin: true,
  markers: true,
  pinSpacing: false
});

gsap.to(".navbar", {
  opacity: 0,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".batasakhir",
    start: "top",
    end: "center+=200 bottom",
    scrub: true
  }
});

