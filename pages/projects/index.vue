<template>
  <div>
    <navigation />
    <h1>Proyectos</h1>
    <figure>
      <img src="https://i.imgur.com/xFwvB6k.png" alt="Man working" />
    </figure>

    <div class="projects">
      <div class="project-img">
        <div class="project">
          <img
            class="raypal"
            src="https://i.imgur.com/BYtWpA6.png"
            alt="Raypal"
          />
        </div>

        <div>
          <div class="project">
            <img
              class="memobrown"
              src="https://i.imgur.com/5JNMRGd.png"
              alt="MemoBrown"
            />
          </div>

          <div class="project">
            <img
              class="ferrebravo"
              src="https://i.imgur.com/IyiFIic.png"
              alt="FerreBravo"
            />
          </div>
        </div>

        <div class="project">
          <img
            class="crypto"
            src="https://i.imgur.com/gTrzdzs.png"
            alt="CryptoExchange"
          />
        </div>
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
}
</script>

<style scoped>
h1 {
  font-size: 14rem;
  font-family: var(--titles);
  color: var(--textDark);
  font-weight: 400;
  margin: 3rem 0 0 3rem;
  padding-left: 5rem;
}
figure {
  display: flex;
  align-items: center;
  justify-content: center;
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
</style>
