let t1 = gsap.timeline();
t1
    .from("#nav span,#nav h4", {
        delay: 0.5,
        opacity:0,
        y:-50,
        duration:0.5,
        stagger:0.2,
    })
    .from("#page1 h1", {
        opacity:0,
        y:20,
        duration:0.5,
        scale:0.2,
    })
    .from("#page1 h2", {
        opacity:0,
        y:20,
        duration:0.5,
        scale:0.2,
    })
    .from("#page1 p", {
        opacity:0,
        y:20,
        duration:0.5,
        scale:0.2,
    })
    .to("#page1 h1", {
        y:10,
        duration:0.5,
        yoyo:true,
        repeat:3,
    })
    .from("#page1 h4", {
        scale: 0.2,
        opacity: 0,
    })
    .to("#page1 h4", {
        y: 30,
        repeat: -1,
        duration: 0.6,
        yoyo: true,
    })
gsap.to("#nav", {
    backgroundColor: "#96c11eb0",
    duration: 0.5,
    height: "90px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        scrub: 1.5,
    }
})
let t2 = gsap.timeline();
t2
    .from("#page2 h3", {
        opacity:0,
        y:20,
        duration:0.5,
        scale:0.2,
        scrollTrigger: {
            trigger: "#page2 h3",
            scroller: "body",
            // markers: true,
            start: "top 70%",
            end: "bottom 90%",
            scrub: 1,
        }
    })
    .from("#page2 h2", {
        opacity:0,
        y:20,
        duration:0.5,
        scale:0.2,
        scrollTrigger: {
            trigger: "#page2 h2",
            scroller: "body",
            // markers: true,
            start: "top 70%",
            end: "bottom 90%",
            scrub: 1,
        }
    })
let t3 = gsap.timeline();
t3
    .from("#page3 table", {
        opacity:0,
        y:20,
        duration:0.5,
        scale:0.2,
        scrollTrigger: {
            trigger: "#page3 table",
            scroller: "body",
            // markers: true,
            start: "top 70%",
            end: "bottom 90%",
            scrub: 1,
        }
    })
let t4 = gsap.timeline();
t4.from("#page4 p", {
    opacity:0,
    y:20,
    duration:0.5,
    scale:0.2,
    scrollTrigger: {
        trigger: "#page4 p",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "bottom 90%",
        scrub: 1,
    }
})
let t5 = gsap.timeline();
t5.from("#page5 p, #page5 button", {
    opacity:0,
    y:20,
    duration:0.5,
    scale:0.2,
    scrollTrigger: {
        trigger: "#page5 p",
        scroller: "body",
        start: "top 70%",
        end: "bottom 90%",
        scrub: 1,
    }
})
let home = document.querySelector("#home");
home.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#page1").scrollIntoView({ behavior: "smooth" });
})
let about = document.querySelector("#about");
about.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector('#page2').scrollIntoView({ behavior: "smooth" });
})
let projects = document.querySelector("#projects");
projects.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector('#page3').scrollIntoView({ behavior: 'smooth' });
})
let cert = document.querySelector("#cert");
cert.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector('#page4').scrollIntoView({ behavior: 'smooth' });
})
let contact = document.querySelector("#contact");
contact.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector('#page5').scrollIntoView({ behavior: 'smooth' });
})