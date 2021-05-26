gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);
 

const sections = document.querySelectorAll("section");

function goToSection(section, anim) {
  gsap.to(window, {
    scrollTo: {y: section, autoKill: false},
    duration: 1,
    delay: .2
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
    onEnterBack: () => goToSection(section)
  });
 
});



gsap.to(".cirkelbegin", {
  scrollTrigger: {
    trigger: ".cirkelbegin",
    start: "top 30%",
    end: "bottom+=250px",
    toggleActions: "restart pause reverse none",
    // markers: true
  },
  width: "100vw",
  height: "100vh",
  ease: "power2.in",
  borderRadius: "0 0"
})




gsap.to(".cirkel", {
  scrollTrigger: {
    trigger: ".cirkel",
    start: "top-=20% 10%",
    end: "top+=0%",
    toggleActions: "restart pause reverse none",
    // markers: {
    //   startColor: "blue",
    //   endColor: "purple"
    // }
  },
  width: "25vh",
  height: "25vh",
  ease: "power1.in",
  borderRadius: "50% 50%"
})

gsap.to(".cirkel", {
  immediateRender: false,
  scrollTrigger: {
    trigger: ".cirkel",
    start: "top+=50% 30%",
    end: "bottom",
    scrub: true,
    toggleActions: "restart pause reverse none",
    // markers: true
  },
  width: "100vw",
  height: "100vh",
  ease: "power2.out",
  borderRadius: "0 0"
})

gsap.to(".cirkel2", {
  scrollTrigger: {
    trigger: ".cirkel2",
    start: "top-=20% 10%",
    end: "top+=0%",
    toggleActions: "restart pause reverse none",
    // markers: {
    //   startColor: "blue",
    //   endColor: "purple"
    // }
  },
  width: "25vh",
  height: "25vh",
  ease: "power1.in",
  borderRadius: "50% 50%",
})

gsap.to(".cirkel2", {
  immediateRender: false,
  scrollTrigger: {
    trigger: ".cirkel2",
    start: "top+=50% 30%",
    end: "bottom",
    scrub: true,
    toggleActions: "restart pause reverse none",
    // markers: true
  },
  width: "100vw",
  height: "100vh",
  ease: "power2.out",
  borderRadius: "0 0"
})

gsap.to(".cirkeleind", {
  scrollTrigger: {
    trigger: ".cirkeleind",
    start: "top 30%",
    end: "top",
    toggleActions: "restart pause reverse none",
    // markers: true
  },
  width: "25vh",
  height: "25vh",
  ease: "power2.in",
  borderRadius: "50% 50%"
})