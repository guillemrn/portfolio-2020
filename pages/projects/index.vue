<template>
  <div class="container">
    <navigation />
    <h1>{{ $t('h1') }}</h1>
    <figure class="img-container">
      <img src="https://i.imgur.com/Kl83q6q.png" alt="Man working" />
    </figure>

    <div class="projects">
      <div class="project-img">
        <nuxt-link to="/projects/Raypal" class="project">
          <img
            class="raypal img-hover"
            src="https://i.imgur.com/BYtWpA6.png"
            alt="Raypal"
          />
        </nuxt-link>

        <div class="div">
          <nuxt-link to="/projects/MemoBrown" class="project">
            <img
              class="memobrown img-hover"
              src="https://i.imgur.com/5JNMRGd.png"
              alt="MemoBrown"
            />
          </nuxt-link>

          <nuxt-link to="/projects/FerreteriaBravo" class="project">
            <img
              class="ferrebravo img-hover"
              src="https://i.imgur.com/IyiFIic.png"
              alt="FerreBravo"
            />
          </nuxt-link>
        </div>

        <nuxt-link to="/projects/CryptoExchange" class="project">
          <img
            class="crypto img-hover"
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
.img-hover {
  transition: all 300ms;
  border-radius: 24px;
}
.project:hover .img-hover {
  transform: scale(1.03);
  box-shadow: 4px 4px 10px rgb(70, 69, 69);
}
.project:hover {
  transform: scale(1.03);
}
.projects {
  margin-bottom: 15rem;
}

@media screen and (max-width: 1440px) {
}

@media screen and (max-width: 1024px) {
}

@media screen and (max-width: 768px) {
  h1 {
    font-size: 10rem;
    margin: 0;
    margin-top: 3rem;
  }
  .img-container img {
    width: 100%;
  }
  .img-hover {
    width: 23rem;
    height: auto;
  }
  .img-container {
    margin-top: 2rem;
  }
}

@media screen and (max-width: 576px) {
  h1 {
    font-size: 8rem;
  }
  .img-hover {
    width: 16rem;
    height: auto;
  }
}

@media screen and (max-width: 480px) {
  h1 {
    font-size: 6rem;
  }
  .img-hover {
    width: 14rem;
    height: auto;
    border-radius: 10px;
  }
}

@media screen and (max-width: 426px) {
  h1 {
    font-size: 4rem;
  }
  .img-hover {
    width: 12rem;
    height: auto;
  }
}

@media screen and (max-width: 376px) {
  .img-hover {
    width: 10rem;
    height: auto;
  }
}

@media screen and (max-width: 320px) {
  .img-hover {
    width: 9rem;
    height: auto;
  }
}
</style>

<i18n lang="yaml">
en:
  h1: 'Projects'
es:
  h1: 'Proyectos'
</i18n>
