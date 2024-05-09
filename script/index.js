document.getElementById("scroll").addEventListener("click", (e) => {
    e.preventDefault();
    window.scroll({ top: innerHeight, behavior: "smooth" })
})

document.getElementById("sobre").addEventListener("click", () => {
    window.scroll({ top: innerHeight, behavior: "smooth" })
})
document.getElementById("pitch").addEventListener("click", () => {
    window.scroll({ top: 2*innerHeight, behavior: "smooth" })
})
document.getElementById("ferramentas").addEventListener("click", () => {
    window.scroll({ top: 3.2*innerHeight, behavior: "smooth" })
})
document.getElementById("contato").addEventListener("click", () => {
    window.scroll({ top: 6*innerHeight, behavior: "smooth" })
})

window.addEventListener("scroll", () => {
    let sobre = document.getElementById('sobre')
    let pitch = document.getElementById('pitch')
    let ferramentas = document.getElementById('ferramentas')
    let contato = document.getElementById('contato')

    if (window.scrollY > (window.innerHeight * 0.5)) { sobre.style.background = "#FFF"; sobre.style.color = "#000" } else { sobre.style.color = "#FFF";  sobre.style.background = "#ffffff00"; }
    if (window.scrollY > (window.innerHeight * 1.5)) { pitch.style.background = "#FFF"; pitch.style.color = "#000"; sobre.style.color = "#FFF";  sobre.style.background = "#ffffff00"; } else {  pitch.style.background = "#ffffff00"; pitch.style.color = "#fff" }
    if (window.scrollY > (window.innerHeight * 3)) { ferramentas.style.color = "#000"; ferramentas.style.background = "#FFF"; pitch.style.color = "#FFF";  pitch.style.background = "#ffffff00"; } else { ferramentas.style.color = "#fff"; ferramentas.style.background = "#ffffff00"; }

})