document.addEventListener('mousemove', function(e){
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
})

window.addEventListener("scroll", function(){
    var header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})