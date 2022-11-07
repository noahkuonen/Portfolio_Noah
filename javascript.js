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

/*Dark Mode Function*/

function DarkMode() {
  const btn = document.querySelector(".btn-toggle");
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

  const currentTheme = localStorage.getItem("theme");
  if (currentTheme == "dark") {
    document.body.classList.toggle("dark-theme");
  } else if (currentTheme == "light") {
    document.body.classList.toggle("light-theme");
  }

  btn.addEventListener("click", function () {
    if (prefersDarkScheme.matches) {
      document.body.classList.toggle("light-theme");
      var theme = document.body.classList.contains("light-theme")
        ? "light"
        : "dark";
    } else {
      document.body.classList.toggle("dark-theme");
      var theme = document.body.classList.contains("dark-theme")
        ? "dark"
        : "light";
    }
    localStorage.setItem("theme", theme);
  });
}

/*Typing Front Page */
function typingFrontPage() {
  typed = new Typed(".auto-type", {
    strings: [
      "Welcome to my Portfolio Page",
      "I'm Noah Kuonen",
      "Scroll for more :)",
    ],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true,
  });
}
/*Card Tilt effect Chapter 3 Skills*/
function addEffecTiltToCard() {
  VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.2,
  });
}

/*Toggle Icon Dark Mode*/

function ToggleIcon(x) {
  x.classList.toggle("uil-moon");
  x.classList.toggle("uil-sun");
}

/*Responsive Navbar*/

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

window.onload = () => {
  typingFrontPage();
  addEffecTiltToCard();
  DarkMode();
  ToggleIcon();
  myFunction();
};
