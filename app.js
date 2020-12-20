new fullpage("#fullpage", {
    autoScrolling: true,
    navigation: true,
    onLeave: (origin, destination, direction) => {
        const tl = new TimelineMax({ delay: 0.4 });
       
        if (destination.index === 1) {
            const greet = document.querySelectorAll(".greet");
            const lap = document.querySelectorAll(".lap img");
            const msg = document.querySelectorAll(".msg");

            tl.fromTo(greet, 1, { y: "-50", x: "-50", opacity: 0 }, { y: 0, x: 0, opacity: 1 });
            tl.fromTo(msg, 0.5, { y: "50", x: "50", opacity: 0 }, { y: 0, x: 0, opacity: 1 });
            tl.fromTo(lap, 0.5, { x: "-500" }, { x: 0 });

        }
        if (destination.index === 2) {
            const skillText = document.querySelector(".skillText");
            tl.fromTo(skillText, 0.5, { y: "300" }, { y: 0 });
        }
        if (destination.index === 3) {
            const time = document.querySelector(".time"); 
            let timeInterval = setInterval(timer, 1000);
            
            function timer() {
                const currentTime = new Date().toLocaleTimeString();
                time.innerHTML = currentTime;
                return;
            }
            tl.fromTo(time, 3, { x: "1100", y: "600" }, { x: 0, y: 0 });
        };
    }
});


// ******************************About********************************************



// ******************************mobo responsive*************************************
const navSlide = () => {
    const burger = document.querySelector(".burger");
const navBar = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");

burger.addEventListener("click", () => {
    navBar.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = "";
        } else {
            link.style.animation = `linkAnime 0.5s ease forwards ${index / 7 + 0.5}s`
        }
        
    });

    burger.classList.toggle("toggle");
});

}

navSlide();


// ***************svg text********************

// const chars = document.querySelectorAll(".name path");
// for (i = 0; i < chars.length; i++){
//     console.log(`${i} is ${chars[i].getTotalLength()}`);
// }