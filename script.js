const links = document.getElementsByClassName("linkBox");

for (const link of links) {
    link.addEventListener("mouseenter", () => {
        link.classList.toggle('hover')
    })

    link.addEventListener("mouseleave", () => {
        link.classList.toggle('hover')
    })
}


document.querySelector('button').addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
    if(document.body.classList.contains('light-mode')) {
        localStorage.setItem('mode', 'light');
    } else {
        localStorage.setItem('mode', 'night');
    }
});


if(localStorage.getItem('mode') === 'light') {
    document.body.classList.add('light-mode');
}

document.getElementById("github").addEventListener("click", () => window.open("https://github.com/Ariadna5D", '_blank'))

document.getElementById("itchio").addEventListener("click", () => window.open("https://ariadna5d.itch.io/", '_blank'))

document.getElementById("artsation").addEventListener("click", () => window.open("https://www.artstation.com/ariadna5d", '_blank'))

document.getElementById("linkedin").addEventListener("click", () => window.open("https://www.linkedin.com/in/ariadnadelgadosantana/", '_blank'))


