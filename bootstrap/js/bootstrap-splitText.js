gsap.registerPlugin(SplitText, ScrollTrigger);

console.clear();

gsap.set(".katakata", { opacity: 1 });

document.fonts.ready.then(() => {
  let containers = gsap.utils.toArray(".halaman1");

  containers.forEach((halaman1) => {
    let text = halaman1.querySelector(".katakata");
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
            trigger: halaman1,
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

