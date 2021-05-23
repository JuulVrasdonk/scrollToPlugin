gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);
 

const sections = document.querySelectorAll("section");

function goToSection(section, anim) {
  gsap.to(window, {
    scrollTo: {y: section, autoKill: false},
    duration: 1
  });
  
  anim && anim.restart();
}

sections.forEach(section => {
  const intoAnim = gsap.from(section.querySelector(".animsec"), {
    yPercent: 50,
    duration: 1, 
    paused: true
});
  
  ScrollTrigger.create({
    trigger: section,
    end: "bottom top+=1",
    onEnter: () => goToSection(section, intoAnim),
    onEnterBack: () => goToSection(section),
    markers: true
  });
 
});




