<script setup>
// import TheHeader from './TheHeader'
</script>

<template>
    <section class="cellphones-container">
        <section class="welcome">
            <p id="team">Feito Por SharkTec 🦈</p>
            <h1>Nexus</h1>
            <p id="slogan">Uma plataforma que une os estudantes</p>
        </section>
        <img src="../assets/imgs/tela_posts.png" alt="tela de postagens do aplicativo" class="cellphone"
            id="tela-posts">
        <img src="../assets/imgs/tela_comunidades.png" alt="tela de cadastro do aplicativo" class="cellphone"
            id="tela-comunidades">
        <img src="../assets/imgs/tela_wikis.png" alt="tela de cadastro do aplicativo" class="cellphone" id="tela-wikis">
        <img src="../assets/imgs/tela_perfil.png" alt="tela de cadastro do aplicativo" class="cellphone"
            id="tela-perfil">
        <div class="blur"></div>
    </section>
</template>

<style scoped>
.cellphones-container {
    height: 100vh;
    overflow: hidden;
    position: relative;
}

.blur {
    position: absolute;
    box-shadow: 0 10px 100px 100px rgba(0, 0, 0, 0.932);
    bottom: 0;
    width: 100%;
}

.welcome {
    width: 50%;
    margin: 0 auto;
    margin-top: 5%;
    text-align: center;
    position: relative;
}

#team {
    font-weight: 100;
    font-size: 20px;
}

h1 {
    font-weight: 700;
    font-size: 120px;
    margin: 10px 0;
    position: relative;
    display: inline;
}

h1::after {
    content: " ";
    width: 140px;
    height: 4px;
    background-image: linear-gradient(to right, #58256F, #8526FE, #CA57FF);
    position: absolute;
    left: 62%;
    bottom: 12%;
}


#slogan {
    font-weight: 200;
    margin: 0 auto;
    font-size: 40px;
    width: 60%;
}

.cellphone {
    position: absolute;
    width: calc(100vw - 81%);
    height: auto;
    z-index: -1;
}

#tela-posts {

    bottom: calc(-50% + 5vh);
    left: 29%;
}

#tela-perfil {

    bottom: calc(-50% + 5vh);
    right: 29%;
}

#tela-wikis {
    bottom: calc(-30% + 2vh);
    right: 6%;
}

#tela-comunidades {
    bottom: calc(-30% + 2vh);
    left: 6%;
}

@media only screen and (max-width: 1290px) and (orientation: landscape) {

    .cellphone {
        width: calc(100vw - 82%);
    }

    #tela-posts {
        bottom: calc(-25% + 2vh);
        left: 8%;
    }

    #tela-perfil {
        bottom: calc(-25% + 2vh);
        right: 8%;
    }

    #tela-wikis {
        bottom: calc(-45% + 5vh);
        right: 30%;
    }

    #tela-comunidades {
        bottom: calc(-45% + 5vh);
        left: 30%;
    }
}

@media only screen and (max-width: 1190px) and (orientation: landscape) {
    .welcome {
        width: 70%;
    }
}

@media only screen and (max-width: 1024px) and (orientation: portrait) {
    .welcome {
        width: 100%;
        margin-top: 15%;
    }

    #team {
        font-size: 25px;
    }

    h1 {
        font-size: 130px;
        margin: 20px 0;
    }

    h1::after {
        content: " ";
        width: 155px;
        height: 4px;
        background-image: linear-gradient(to right, #58256F, #8526FE, #CA57FF);
        position: absolute;
        left: 62%;
        bottom: 11%;
    }

    #slogan {
        font-size: 50px;
        width: 60%;
    }

    .cellphone {
        width: 45%;
    }

    #tela-posts {
        display: none
    }

    #tela-perfil {
        display: none;
    }

    #tela-wikis {
        display: none;
    }

    #tela-comunidades {
        margin: auto;
        left: 0;
        right: 0;
    }
}

@media only screen and (max-width: 912px) and (orientation: portrait) {

    h1 {
        font-size: 120px;
    }


    h1::after {
        content: " ";
        width: 140px;
        height: 4px;
        background-image: linear-gradient(to right, #58256F, #8526FE, #CA57FF);
        position: absolute;
        left: 62%;
        bottom: 10%;
    }

    #slogan {
        font-size: 45px;
    }


    #tela-comunidades {
        bottom: -25%;
    }
}

@media only screen and (max-width: 712px) and (orientation: portrait) {

    h1 {
        font-size: 100px;
        margin: 5px 0;
    }


    h1::after {
        content: " ";
        width: 118px;
        height: 3px;
        background-image: linear-gradient(to right, #58256F, #8526FE, #CA57FF);
        position: absolute;
        left: 62%;
        bottom: 11%;
    }

    #slogan {
        font-size: 40px;
        width: 90%;
    }
}

@media only screen and (max-width: 540px) and (orientation: portrait) {

    #team {
        font-size: 22px;
    }

    h1 {
        font-size: 90px;
    }


    h1::after {
        content: " ";
        width: 105px;
        height: 3px;
        background-image: linear-gradient(to right, #58256F, #8526FE, #CA57FF);
        position: absolute;
        left: 62%;
        bottom: 11%;
    }

    #slogan {
        font-size: 30px;
    }


    #tela-comunidades {
        bottom: -22%;
    }
}

@media only screen and (max-width: 450px) and (orientation: portrait) {
    .welcome {
        width: 100%;
        margin-top: 25%;
    }

    #team {
        font-size: 20px;
    }

    h1 {
        font-size: 80px;
    }


    h1::after {
        content: " ";
        width: 95px;
        height: 2px;
        background-image: linear-gradient(to right, #58256F, #8526FE, #CA57FF);
        position: absolute;
        left: 62%;
        bottom: 11%;
    }

    #slogan {
        font-size: 28px;
    }

    .cellphone {
        position: absolute;
        width: 52%;
        height: auto;
    }

    #tela-comunidades {
        bottom: -12%;
    }
}
</style>