<template>
  <div>
    <navigation />
    <h1>Proyectos</h1>
    <figure class="img-container">
      <img src="https://i.imgur.com/xFwvB6k.png" alt="Man working" />
    </figure>

    <div class="projects">
      <div class="project-img">
        <nuxt-link to="/projects/Raypal" class="project">
          <img
            class="raypal"
            src="https://i.imgur.com/BYtWpA6.png"
            alt="Raypal"
          />
        </nuxt-link>

        <div class="div">
          <nuxt-link to="/projects/MemoBrown" class="project">
            <img
              class="memobrown"
              src="https://i.imgur.com/5JNMRGd.png"
              alt="MemoBrown"
            />
          </nuxt-link>

          <nuxt-link to="/projects/FerreteriaBravo" class="project">
            <img
              class="ferrebravo"
              src="https://i.imgur.com/IyiFIic.png"
              alt="FerreBravo"
            />
          </nuxt-link>
        </div>

        <nuxt-link to="/projects/CryptoExchange" class="project">
          <img
            class="crypto"
            src="https://i.imgur.com/gTrzdzs.png"
            alt="CryptoExchange"
          />
        </nuxt-link>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
export default {
  components: {
    Navigation,
    Footer,
  },
  head: {
    title: 'Proyectos',
  },
}
</script>

<style scoped>
h1 {
  font-size: 14rem;
  font-family: var(--titles);
  color: var(--textDark);
  font-weight: 400;
  margin: 3rem 0 0 3rem;
  text-align: center;
}
.img-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15rem;
}
.project-img {
  display: flex;
  align-items: center;
  justify-content: center;
}
.raypal {
  margin-right: 5px;
}
.crypto {
  margin-left: 5px;
}
.memobrown {
  margin-bottom: 2.5px;
}
.ferrebravo {
  margin-top: 2.5px;
}
.div {
  display: flex;
  flex-flow: column;
}
.project {
  transition: all 300ms;
  border-radius: 30px;
}
.project:hover {
  transform: scale(1.03);
}
.projects {
  margin-bottom: 15rem;
}
</style>
