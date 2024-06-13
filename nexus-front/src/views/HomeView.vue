<script setup>
import WelcomeNexus from '../components/WelcomeNexus.vue'
import AboutNexus from '../components/AboutNexus.vue'
import PitchNexus from '../components/PitchNexus.vue'
import FeaturesNexus from '../components/FeaturesNexus.vue'
import SharkTec from '../components/SharkTec.vue'
import Header from '../components/HeaderNexus.vue'
import FooterNexus from '../components/FooterNexus.vue'
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
    <FooterNexus />
  </main>
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


<style scoped></style>