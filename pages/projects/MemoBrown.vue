<template>
  <div>
    <navigation />
    <h1 class="title">{{ titlePage }}</h1>
    <figure class="desktop">
      <img src="https://i.imgur.com/CZq96Db.png" :alt="titlePage" />
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
            <a href="https://guillermo-moreno.netlify.app/" target="_blank"
              ><em>guillermo-moreno.netlify.app</em></a
            >
          </li>
        </ul>
      </div>
      <figure class="responsive">
        <img src="https://i.imgur.com/G6Xd9rl.png" :alt="titlePage" />
      </figure>
    </div>
    <div class="color-container">
      <nuxt-link to="/projects/Raypal" class="arrow">
        <img src="https://i.imgur.com/siIqyoM.png" alt="Left Arrow" />
        <p>{{ $t('previous') }}</p>
      </nuxt-link>
      <div class="colors">
        <div class="color-1"><p>#234afc</p></div>
        <div class="color-2"><p>#ff00ff</p></div>
        <div class="color-3"><p>#ff9b4f</p></div>
        <div class="color-4"><p>#27272b</p></div>
        <div class="color-5"><p>#edeeff</p></div>
      </div>
      <nuxt-link to="/projects/FerreteriaBravo" class="arrow">
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
      titlePage: 'MemoBrown',
    }
  },
  head: {
    title: 'MemoBrown',
  },
}
</script>

<style scoped>
.color-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
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
  background-color: #234afc;
}
.color-2 {
  background-color: #ff00ff;
}
.color-3 {
  background-color: #ff9b4f;
}
.color-4 {
  background-color: #27272b;
}
.color-5 {
  background-color: #edeeff;
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
</style>

<i18n lang="yaml">
en:
  desc: 'Website, mainly used to show my work done'
  date: 'Date: September 2020'
  built: 'Built with Vue, JavaScript, HTML and CSS'
  web: 'Website'
  previous: 'Previous Project'
  next: 'Next Project'
es:
  desc: 'Sitio web, utilizado principalmente para mostrar mi trabajo realizado.'
  date: 'Fecha: Septiembre 2020'
  built: 'Construído con Vue, JavaScript, HTML y CSS'
  web: 'Sitio web'
  previous: 'Proyecto Anterior'
  next: 'Proyecto Siguiente'
</i18n>
