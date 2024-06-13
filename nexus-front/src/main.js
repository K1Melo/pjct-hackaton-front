import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

window.addEventListener("scroll", () => {
    let sobre = document.getElementById('sobre')
    let pitch = document.getElementById('pitch')
    let ferramentas = document.getElementById('ferramentas')
    let equipe = document.getElementById('equipe')

    if (window.scrollY > (window.innerHeight * 0.5)) { sobre.style.background = "#FFF"; sobre.style.color = "#000" } else { sobre.style.color = "#FFF";  sobre.style.background = "#ffffff00"; }
    if (window.scrollY > (window.innerHeight * 1.5)) { pitch.style.background = "#FFF"; pitch.style.color = "#000"; sobre.style.color = "#FFF";  sobre.style.background = "#ffffff00"; } else {  pitch.style.background = "#ffffff00"; pitch.style.color = "#fff" }
    if (window.scrollY > (window.innerHeight * 2.5)) { ferramentas.style.color = "#000"; ferramentas.style.background = "#FFF"; pitch.style.color = "#FFF";  pitch.style.background = "#ffffff00"; } else { ferramentas.style.color = "#fff"; ferramentas.style.background = "#ffffff00"; }
    if (window.scrollY > (window.innerHeight * 6.5)) { equipe.style.color = "#000"; equipe.style.background = "#FFF"; ferramentas.style.color = "#FFF";  ferramentas.style.background = "#ffffff00"; } else { equipe.style.color = "#fff"; equipe.style.background = "#ffffff00"; }

})
