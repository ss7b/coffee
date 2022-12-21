let  statsSecion= document.querySelector(".Our-Stats");
let num = document.querySelectorAll(".stat");
let started = false

window.onscroll = function () {
    // stats
    if(window.scrollY >= statsSecion.offsetTop - 250){
        if(!started){
            num.forEach(num => scrollCount(num));    
        }
        started = true
    }
};

function scrollCount(el){
    let goal= el.dataset.goal;
    let counter = setInterval(() => {
        el.textContent++;
        if(el.textContent == goal){
            clearInterval(counter)
        }
    }, 3000 / goal);
}