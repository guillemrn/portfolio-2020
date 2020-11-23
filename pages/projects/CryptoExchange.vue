<template>
  <div>
    <navigation />
    <h1 class="title">{{ titlePage }}</h1>
    <figure class="desktop">
      <img src="https://i.imgur.com/9VW9gHa.png" :alt="titlePage" />
    </figure>
    <figure class="img-decorate">
      <img class="teal" src="https://i.imgur.com/ljsxoed.png" alt="" />
    </figure>
    <div class="project-container">
      <div>
        <h1 class="project-title">{{ titlePage }}</h1>
        <ul class="project-description">
          <p>
            {{ titlePage }} te ayuda a saber en tiempo real el valor de las
            distintas crypto monedas
          </p>
          <li>Fecha: Septiembre 2020</li>
          <li>Responsive Design</li>
          <li>Construído Vue, JavaScript, HTML y CSS</li>
          <li>
            Sitio web:
            <a href="https://cryptoc-exchange.netlify.app/" target="_blank"
              ><em>cryptoc-exchange.netlify.app</em></a
            >
          </li>
        </ul>
      </div>
      <figure class="responsive">
        <img src="https://i.imgur.com/7iA4RGD.png" :alt="titlePage" />
      </figure>
    </div>
    <div class="colors">
      <div class="color-1"><p>#68d391</p></div>
      <div class="color-2"><p>#2f855a</p></div>
      <div class="color-3"><p>#ffa500</p></div>
      <div class="color-4"><p>#718096</p></div>
      <div class="color-5"><p>#e2e8f0</p></div>
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
      titlePage: 'CryptoExchange',
    }
  },
  head: {
    title: 'CryptoExchange',
  },
}
</script>

<style scoped>
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
  background-color: #68d391;
}
.color-2 {
  background-color: #2f855a;
}
.color-3 {
  background-color: #ffa500;
}
.color-4 {
  background-color: #718096;
}
.color-5 {
  background-color: #e2e8f0;
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
