<template>
    <p class="item">03. <span style="color: #8526FE;" class="item">Ferramentas</span></p>
    <section class="global-container invert">
        <div class="container">
            <img src="../assets/imgs/circle.png" alt="circulo de fundo" class="circle" />
            <img src="../assets/imgs/moockup_comunidades.png" alt="tela de comunidades" class="image" />
        </div>
        <div class="container">
            <div class="informations">
                <h3 class="title">Descubra comunidades</h3>
                <p class="text">Explore e participe de diversas comunidades no Nexus, assim personalizando sua própria
                    experiência de aprendizado! Para saber mais sobre a aba de comunidades acesse 👇</p>
                <div class="wrapper">
                    <button class="btn">
                        <p class="btnText">
                            Comunidades</p>
                    </button>
                </div>
            </div>
        </div>
    </section>
    <section class="global-container">
        <div class="container">
            <div class="informations">
                <h3 class="title">Faça Posts e Perguntas</h3>
                <p class="text">Participe do mundo do conhecimento em nossas abas posts e perguntas, aqui, os usuários
                    têm a oportunidade de se interagir de forma mais próxima, garantindo incríveis chances para networks
                    entre os usuários, para saber mais, acesse 👇 </p>
                <div class="wrapper">
                    <button class="btn">
                        <p class="btnText">
                            Posts e Perguntas</p>
                    </button>
                </div>
            </div>
        </div>
        <div class="container">
            <img src="../assets/imgs/moockup_posts.png" alt="tela de postagens e perguntas" class="image" />
        </div>
    </section>
    <section class="global-container invert">
        <div class="container">
            <img src="../assets/imgs/circle.png" alt="circulo de fundo" class="circle" />
            <img src="../assets/imgs/moockup_wikis.png" alt="tela de wikis" class="image" />
        </div>
        <div class="container">
            <div class="informations">
                <h3 class="title">Leia Wikis</h3>
                <p class="text">Explore um universo de conhecimento ilimitado com as Wikis do Nexus. Descubra, crie e
                    contribua para as Wikis sobre os assuntos que mais te inspiram. Para saber mais sobre essa página,
                    acesse 👇</p>
                <div class="wrapper">
                    <button class="btn">
                        <p class="btnText">
                            Wikis</p>
                    </button>
                </div>
            </div>
        </div>
    </section>
    <section class="global-container">
        <div class="container">
            <div class="informations">
                <h3 class="title">Monte seu Perfil</h3>
                <p class="text">Mostre quem você realmente é, o que estuda e tudo que você achar condizente, aqui também
                    fica guardado todas suas contribuições e seus pontos. Para saber mais sobre a aba de perfil, acesse
                    👇</p>
                <div class="wrapper">
                    <button class="btn">
                        <p class="btnText">
                            Perfil</p>
                    </button>
                </div>
            </div>
        </div>
        <div class="container">
            <img src="../assets/imgs/moockup_perfil.png" alt="tela de perfil" class="image">
        </div>
    </section>
</template>

<style scoped>
.item {
    text-align: center;
    margin-top: 10px;
}

.circle {
    position: absolute;
    z-index: -1;
    animation: rotateCircle 5s ease-in-out infinite;
}

@keyframes rotateCircle {
    0% {
        transform: rotate(0deg);
    }

    25% {
        transform: rotate(90deg);
    }

    50% {
        transform: rotate(180deg);
    }

    75% {
        transform: rotate(270deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>