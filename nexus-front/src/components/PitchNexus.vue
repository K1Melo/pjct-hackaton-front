<template>
    <section class="pitch">
        <div class="container">
            <div class="informations">
                <p class="item">02. <span style="color: #8526FE;" class="item">Pitch</span></p>
                <h3 class="title">Quer conhecer um<br>pouco mais sobre ele?</h3>
                <p class="text">Criada por estudantes, para estudantes, veja nosso pitch e entenda mais sobre nossas
                    propostas e a problematização que buscamos resolver.</p>
            </div>
        </div>
        <div class="pitch-player">
            <div id="videoPitch">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/GvdugEjj5WI?si=XPKzp2JCGyVqk62D"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    </section>
</template>

<style scoped>
.pitch {
    width: 100%;
    height: 100vh;
    padding: 5% 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    position: relative;
}

.pitch-player {
    width: 90%;
    margin: 0 auto;
    z-index: 0;
    position: absolute;
    right: 5%;
    display: flex;
    align-items: center;
    justify-content: end;
}

#videoPitch {
    aspect-ratio: 560/315;
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
}

iframe {
    border-radius: 15px;
}

@media only screen and (max-width: 1024px) and (orientation: portrait) {
    .pitch-player {
        width: 100%;
        position: static;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #videoPitch {
        width: 80%;
    }
}

@media only screen and (max-width: 912px) and (orientation: portrait) {
    .pitch-player {
        width: 100%;
        position: static;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #videoPitch {
        width: 90%;
    }
}

@media only screen and (max-width: 512px) and (orientation: portrait) {

    #videoPitch {
        width: 100%;
    }

    iframe {
        border-radius: 0px;
    }
}
</style>