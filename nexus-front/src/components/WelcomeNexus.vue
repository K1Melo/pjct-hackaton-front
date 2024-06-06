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
        <img src="../assets/imgs/tela_entrar.png" alt="tela de cadastro do aplicativo" class="cellphone"
            id="tela-entrar">
        <img src="../assets/imgs/tela_comunidades.png" alt="tela de cadastro do aplicativo" class="cellphone"
            id="tela-comunidades">
        <img src="../assets/imgs/tela_wikis.png" alt="tela de cadastro do aplicativo" class="cellphone" id="tela-wikis">
        <img src="../assets/imgs/tela_perfil.png" alt="tela de cadastro do aplicativo" class="cellphone"
            id="tela-perfil">
    </section>
</template>

<style scoped>
.cellphones-container {
    height: 100vh;
    overflow: hidden;
    position: relative;
}

.welcome {
    width: 50%;
    margin: 0 auto;
    margin-top: 3%;
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
}

#tela-entrar {
    bottom: calc(-30% + 2vh);
    left: 8%;
}

#tela-perfil {
    bottom: calc(-30% + 2vh);
    right: 8%;
}

#tela-wikis {
    bottom: calc(-50% + 5vh);
    right: 30%;
}

#tela-comunidades {
    bottom: calc(-50% + 5vh);
    left: 30%;
}

@media only screen and (max-width: 1290px) and (orientation: landscape) {

    .cellphone {
        width: calc(100vw - 82%);
    }

    #tela-entrar {
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

@media only screen and (max-width: 1025) and (orientation: portrait) {}
</style>