<script setup>
import WelcomeNexus from '../components/WelcomeNexus.vue'
import AboutNexus from '../components/AboutNexus.vue'
import PitchNexus from '../components/PitchNexus.vue'
import FeaturesNexus from '../components/FeaturesNexus.vue'
import SharkTec from '../components/SharkTec.vue'
import Header from '../components/HeaderNexus.vue'
</script>

<template>
  <header>
    <Header />
  </header>
  <main>
    <WelcomeNexus />
    <AboutNexus />
    <PitchNexus />
    <FeaturesNexus />
    <SharkTec />
  </main>
  <footer>
    <div class="us">
      <div class="title-logo-footer">
        <div class="logo">
          <img src="../assets/imgs/sharktec_small_logo.png" alt="shark tec logo">
          <h2 style="font-size: 20px;">SharkTec</h2>
        </div>
        <button class="btnFooter" @click="openGitHub">Git Hub</button>
        <div class="copyrigth">
          <p>© 2024 SHARKTEC</p>
        </div>
      </div>
    </div>
    <nav class="footerNav">
      <div class="options" id="optionOne" data-aos="fade-up">
        <router-link to="/" @click="goTo(0)">Início</router-link>
        <router-link to="/" @click="goTo(1)" class="subtitle">Sobre</router-link>
        <router-link to="/" @click="goTo(2)" class="subtitle">Pitch</router-link>
        <router-link to="/" @click="goTo(3)" class="subtitle">Ferramentas</router-link>
        <router-link to="/" @click="goTo(7)" class="subtitle">Equipe</router-link>
      </div>
    </nav>
  </footer>
</template>


<script>

export default {
  methods: {
    goTo(int) {
      window.scroll({ top: innerHeight * int, behavior: "smooth" })
    },
    openGitHub() {
      window.open("https://github.com/K1Melo/pjct-quilombolas");
    },
  }
}

</script>


<style scoped>
.us {
  width: 30%;
  display: flex;
  justify-content: center;
}

.title-logo-footer {
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  h2 {
    font-weight: 100;
    color: rgb(255, 255, 255);
    margin-left: 5px;
  }
}

.logo {
  display: flex;
  align-items: center;
}

.footerNav {
  width: 70%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;

  a {
    margin-bottom: 10px;
    color: #ffffff;
    text-decoration: none;
    font-size: 14px;
  }
}

.options {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  margin-bottom: 50px;
}

.btnFooter {
  background-color: rgba(255, 255, 255, 0);
  border: 1px solid #ffffff;
}

.subtitle {
  color: #afafaf;
}

.copyrigth {
  margin-top: 10%;
  color: #ffffffdb;
  font-weight: 100;
}

@media only screen and (max-width: 1000px) {
  footer {
    flex-direction: column-reverse;
    padding-top: 10%;
  }

  .us {
    width: 50%;
    display: flex;
    justify-content: center;
  }

  .footerNav {
    width: 100%;
    margin-bottom: 30px;

    a {
      margin-bottom: 10px;
      color: #ffffff;
      text-decoration: none;
    }
  }
}

@media only screen and (max-width: 800px) {
  .footerNav {
    flex-direction: column;
    align-items: center;
  }

  .options {
    width: 40%;
  }

  .us {
    width: 100%;
  }
}
</style>