$(function () {

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

  // Paragraph Animation
  let pAnimationLines = gsap.utils.toArray(".p-animation p");

  pAnimationLines.forEach(pAnimationLine => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: pAnimationLine,
        start: 'top 90%',
        duration: 2,
        end: 'bottom 60%',
        scrub: false,
        markers: false,
        toggleActions: 'play none none none'
      }
    });

    const pSplitLine = new SplitText(pAnimationLine, { type: "lines" });
    gsap.set(pAnimationLine, { perspective: 400 });
    pSplitLine.split({ type: "lines" })
    tl.from(pSplitLine.lines, {
      duration: 0.7, 
      delay: 0.2, 
      opacity: 0, 
      y: 50, 
      force3D: true, 
      transformOrigin: "top center -50", 
      stagger: 0.1 
    });
  });

  
  });