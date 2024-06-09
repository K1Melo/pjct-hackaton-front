<template>
    <section class="pitch">
        <div class="informations">
            <p class="item">02. <span style="color: #8526FE;" class="item">Pitch</span></p>
            <h3 class="title">Quer conhecer um<br>pouco mais sobre ele?</h3>
            <p class="text">Criada por estudantes, para estudantes, veja nosso pitch e entenda mais sobre nossas
                propostas e a problematização que buscamos resolver.</p>
        </div>
        <div id="videoPitch">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/wcFVfR5iUts?si=6ufCkBgdEmlZYrO1"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </section>
</template>

<style scoped>
.pitch {
    width: 100%;
    height: auto;
    padding: 5% 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.pitch .informations {
    display: flex;
    flex-direction: column;
    align-items: center;

    .item {
        margin-bottom: 60px;
    }

    .title {
        text-align: center;
        margin-bottom: 60px;
        font-size: 50px;
    }

    .text {
        text-align: center;
        width: 70%;
        margin-bottom: 40px;
    }

    .wrapper {
        margin-bottom: 30px;
    }
}

#videoPitch {
    aspect-ratio: 560/315;
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
}


@media (max-width: 1300px) {
    .pitch .informations {
        .item {
            margin-bottom: 50px;
        }

        .title {
            margin-bottom: 50px;
            font-size: 45px;
        }

        .text {
            width: 70%;
            margin-bottom: 35px;
        }

        .wrapper {
            margin-bottom: 25px;
        }
    }
}

@media (max-width: 1024px) {
    .pitch .informations {
        .item {
            margin-bottom: 35px;
        }

        .title {
            margin-bottom: 35px;
            font-size: 40px;
        }

        .text {
            width: 80%;
            margin-bottom: 35px;
        }
    }
}

@media (max-width: 620px) {
    .pitch .informations {
        .item {
            margin-bottom: 30px;
        }

        .title {
            margin-bottom: 30px;
            font-size: 35px;
        }

        .text {
            width: 90%;
            margin-bottom: 30px;
        }
    }

    #videoPitch {
        width: 80%;
        margin-top: 30px;
    }
}

@media (max-width: 375px) {
    .pitch .informations {
        .item {
            margin-bottom: 25px;
        }

        .title {
            margin-bottom: 25px;
            font-size: 25px;
        }

        .text {
            width: 95%;
            margin-bottom: 30px;
        }
    }

    #videoPitch {
        width: 90%;
        margin-top: 30px;
    }
}
</style>