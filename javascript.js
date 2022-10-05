/*document.addEventListener('mousemove', function(e){
    let body = document.querySelector('body');
    let partikel = document.createElement('span');
    let x = e.offsetX;
    let y = e.offsetY;
    partikel.style.left = x+'px';
    partikel.style.top = y+'px';
    
    let size = Math.random()*8;
    partikel.style.width = 4 + size+'px';
    partikel.style.height = 4 + size+'px';


    body.appendChild(partikel);

    setTimeout(function(){
        partikel.remove()
    }, 2000)
})*/

/*Typing Front Page */
function typingFrontPage() {
  typed = new Typed(".auto-type", {
    strings: ["Welcome to my Portfolio Page", "I'm Noah Kuonen"],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true,
  });
}

/*Effect to Title Chapter 3 Skills*/

/*Card Tilt effect Chapter 3 Skills*/
function addEffecTiltToCard() {
  VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.2,
  });
}

window.onload = () => {
  typingFrontPage();
  addEffecTiltToCard();
};
