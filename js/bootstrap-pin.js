gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: ".navbar",
  start: "clamp(top)", //top+100
  end: "max",
  pin: true,
  pinSpacing: false
});

gsap.to(".navbar", {
  opacity: 0,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".halaman3",
    start: "top",
    end: "center+=200 bottom",
    scrub: true
  }
});

ScrollTrigger.create({
  trigger: ".work",
  start: "clamp(top)", //top+100
  end: "max",
  pin: true,
  markers: true,
  pinSpacing: false
});

gsap.to(".work", {
  opacity: 0,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".halaman3",
    markers: true,
    start: "bottom bottom",
    end: "bottom+=200 bottom",
    scrub: true
  }
});


