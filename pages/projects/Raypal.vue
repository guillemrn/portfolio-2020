<template>
  <div>
    <navigation />
    <h1 class="title">{{ titlePage }}</h1>
    <figure class="desktop">
      <img src="https://i.imgur.com/n2ffGEL.png" :alt="titlePage" />
    </figure>
    <figure class="img-decorate">
      <img class="teal" src="https://i.imgur.com/ljsxoed.png" alt="" />
    </figure>
    <div class="project-container">
      <div>
        <h1 class="project-title">{{ titlePage }}</h1>
        <ul class="project-description">
          <p>
            {{ $t('desc') }}
          </p>
          <li>{{ $t('date') }}</li>
          <li>Responsive Design</li>
          <li>{{ $t('built') }}</li>
          <li>
            {{ $t('web') }}
            <a href="https://raypal.com.mx" target="_blank"
              ><em>raypal.com.mx</em></a
            >
          </li>
        </ul>
      </div>
      <figure class="responsive">
        <img src="https://i.imgur.com/eu8hPYZ.png" :alt="titlePage" />
      </figure>
    </div>
    <div class="color-container">
      <nuxt-link to="/projects/Fuerza-y-Valor" class="arrow">
        <img src="https://i.imgur.com/siIqyoM.png" alt="Left Arrow" />
        <p>{{ $t('previous') }}</p>
      </nuxt-link>
      <div class="colors">
        <div class="color-1"><p>#222222</p></div>
        <div class="color-2"><p>#004f77</p></div>
        <div class="color-3"><p>#11a4bf</p></div>
        <div class="color-4"><p>#66b969</p></div>
        <div class="color-5"><p>#1e9f6d</p></div>
      </div>
      <nuxt-link to="/projects/Vitruvio" class="arrow">
        <img src="https://i.imgur.com/MxEy6sb.png" alt="Right Arrow" />
        <p>{{ $t('next') }}</p>
      </nuxt-link>
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
  data() {
    return {
      titlePage: 'Raypal AI Recycling',
    }
  },
  head: {
    title: 'Raypal',
  },
}
</script>

<style scoped>
.arrow {
  margin: 0 4rem 5rem 4rem;
  text-decoration: none;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
}
.arrow p {
  font-family: var(--body);
  font-size: 2rem;
  color: var(--textDark);
  font-weight: bold;
  text-align: center;
  transition: all 300ms;
}
.arrow p:hover {
  color: var(--primary-lighter);
}
.title {
  font-family: var(--titles);
  font-size: 6.7rem;
  color: var(--textDark);
  font-weight: 400;
  text-align: center;
}
.desktop {
  text-align: center;
  position: relative;
  z-index: 1;
}
.responsive {
  position: relative;
  z-index: 1;
}
.project-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem 2rem;
  margin: 1rem 4rem 15rem 4rem;
}
.colors {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15rem;
}
.colors div {
  width: 10rem;
  height: 10rem;
  margin: 2rem;
  border-radius: 50%;
  box-shadow: 3px 3px 17px 0 rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
  font-family: var(--body);
  font-size: 2.5rem;
  color: var(--textDark);
  text-align: center;
}
.colors p {
  margin: 0;
  margin-top: 2rem;
  padding-top: 10rem;
  color: var(--textDark);
}
.color-1 {
  background-color: #222222;
}
.color-2 {
  background-color: #004f77;
}
.color-3 {
  background-color: #11a4bf;
}
.color-4 {
  background-color: #66b969;
}
.color-5 {
  background-color: #1e9f6d;
}
.project-title {
  font-family: var(--titles);
  font-size: 5rem;
  color: var(--textDark);
}
.project-description {
  font-family: var(--body);
  color: var(--textDark);
  font-size: 3rem;
}
.teal {
  position: absolute;
  z-index: 0;
}
.teal {
  top: 250%;
  right: 0;
}
li a {
  text-decoration: none;
  color: var(--textDark);
  transition: all 300ms;
}
li a:hover {
  color: var(--primary-lighter);
  text-decoration: underline;
}
.color-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
@media screen and (max-width: 1440px) {
  .desktop img {
    width: 100%;
  }
}

@media screen and (max-width: 1024px) {
  img {
    width: 100%;
  }
  .teal {
    width: 50rem;
  }
}

@media screen and (max-width: 768px) {
  .teal {
    display: none;
  }
  .title {
    font-size: 6rem;
  }
  .desktop img {
    width: 100%;
  }
  .project-container {
    flex-flow: column-reverse;
  }
  .responsive img {
    width: 100%;
  }
  .project-title {
    font-size: 4rem;
    text-align: center;
  }
  .color-container {
    flex-flow: column;
  }
}

@media screen and (max-width: 576px) {
  .colors div {
    width: 8rem;
    height: 8rem;
    margin: 1rem;
  }
  .project-container[data-v-b5b1c5c6] {
    padding: 1rem 0rem;
  }
}

@media screen and (max-width: 480px) {
  .project-container {
    margin: 1rem 2rem 10rem 2rem;
  }
  .title {
    font-size: 5rem;
  }
  .project-description {
    font-size: 2.5rem;
  }
  .colors {
    margin-bottom: 10rem;
  }
  .colors div {
    width: 7rem;
    height: 7rem;
    font-size: 2.2rem;
  }
  .arrow img {
    width: 5rem;
  }
  .arrow p {
    font-size: 1.8rem;
  }
}

@media screen and (max-width: 426px) {
  .title {
    font-size: 4rem;
  }
  .project-title {
    font-size: 3rem;
  }
  .project-description {
    font-size: 2rem;
    padding: 1rem;
  }
  .colors div {
    width: 6rem;
    height: 6rem;
    font-size: 2rem;
  }
  .colors p {
    padding-top: 5rem;
  }
}

@media screen and (max-width: 376px) {
  .title {
    font-size: 3.5rem;
  }
  .project-title {
    font-size: 2.5rem;
  }
  .colors div {
    width: 5rem;
    height: 5rem;
    font-size: 1.5rem;
  }
  .colors p {
    padding-top: 4rem;
  }
}

@media screen and (max-width: 320px) {
  .title {
    font-size: 3rem;
  }
  .project-description {
    font-size: 1.8rem;
  }
  .colors div {
    width: 4rem;
    height: 4rem;
    font-size: 1.3rem;
  }
  .colors p {
    padding-top: 3.5rem;
  }
}
</style>

<i18n lang="yaml">
en:
  desc: 'Raypal recycles your paper and collects it at home from a box, promoting recycling in people'
  date: 'Date: February 2021'
  built: 'Built with NuxtJs, HTML and CSS'
  web: 'Website'
  previous: 'Previous Project'
  next: 'Next Project'
es:
  desc: 'Raypal recicla tu papel y recolecta a domicilio desde una caja,
    incentivando el reciclaje en las personas'
  date: 'Fecha: Febrero 2021'
  built: 'Construído con NuxtJs, HTML y CSS'
  web: 'Sitio web'
  previous: 'Proyecto Anterior'
  next: 'Proyecto Siguiente'
</i18n>
