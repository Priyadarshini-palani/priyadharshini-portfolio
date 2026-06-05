// CONTACT FORM

document
.getElementById("contactForm")
.addEventListener("submit", function(e){

e.preventDefault();

alert(
"Thank you for contacting me! I will get back to you soon."
);

this.reset();

});

// SIMPLE FADE ANIMATION

const cards =
document.querySelectorAll(
".card,.project-card,.skill-card"
);

const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(50px)";
card.style.transition="0.8s";

observer.observe(card);

});

// PARTICLES JS

particlesJS("particles-js", {
  particles: {
    number: {
      value: 80
    },
    color: {
      value: "#38bdf8"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.5
    },
    size: {
      value: 3
    },
    move: {
      enable: true,
      speed: 2
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#38bdf8",
      opacity: 0.3
    }
  }
});