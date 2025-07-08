gsap.registerPlugin(SplitText, ScrollTrigger);

console.clear();

gsap.set(".katakata2", { opacity: 1 });

document.fonts.ready.then(() => {
  let containers = gsap.utils.toArray(".halaman5");

  containers.forEach((halaman5) => {
    let text = halaman5.querySelector(".katakata2");
    let animation;

    SplitText.create(text, {
      type: "words,lines",
      mask: "lines",
      linesClass: "line",
      autoSplit: true,
      onSplit: (instance) => {
        console.log("split")
        return gsap.from(instance.lines, {
          yPercent: -120,
          stagger: 0.1,
          scrollTrigger: {
            trigger: halaman5,
            markers: true,
            scrub: true,
            start: "clamp(top center)",
            end: "clamp(center center)"
          }
        });
      }
    });
  });
});

