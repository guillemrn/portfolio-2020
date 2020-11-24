<template>
  <div>
    <navigation />
    <div class="container">
      <figure>
        <img src="https://i.imgur.com/T3A8Bii.png" alt="Guillermo Moreno" />
        <div>
          <h1>{{ $t('title') }}</h1>
          <p>
            {{ $t('who1') }}
            <br />
            {{ $t('who2') }}
            <br />
            {{ $t('who3') }}
            <br />
            {{ $t('who4') }}
          </p>
        </div>
      </figure>
      <figure class="rectangle">
        <img src="https://i.imgur.com/iAbxhMQ.png" alt="" />
      </figure>
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
    title: '¿Quién soy?',
  },
}
</script>

<style scoped>
.rectangle {
  /* background-color: var(--darkTheme); */
  width: 90%;
  height: 50%;
  position: absolute;
  z-index: 0;
  top: 50%;
  margin: 0;
  display: flex;
  justify-content: flex-end;
}
h1 {
  font-size: 6.7rem;
  font-family: ink-free;
  transform: rotate(-3.95deg);
  color: var(--textDark);
}
p {
  font-size: 2.4rem;
  font-family: ink-free;
  transform: rotate(-3.95deg);
  color: var(--textDark);
  font-weight: bold;
}
figure {
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
figure img {
  position: relative;
  z-index: 1;
}
@media screen and (max-width: 1440px) {
}

@media screen and (max-width: 1024px) {
}

@media screen and (max-width: 768px) {
  figure {
    align-items: center;
    flex-flow: column;
  }
  figure img {
    width: 100%;
  }
  .rectangle {
    width: 30%;
    top: 60%;
    right: 0;
  }
}

@media screen and (max-width: 576px) {
  .rectangle {
    display: none;
  }
  h1 {
    font-size: 6rem;
  }
}

@media screen and (max-width: 480px) {
  h1 {
    font-size: 5rem;
  }
  p {
    font-size: 2rem;
  }
}

@media screen and (max-width: 426px) {
  h1 {
    font-size: 4rem;
  }
  p {
    font-size: 1.8rem;
  }
}

@media screen and (max-width: 376px) {
  h1 {
    font-size: 3rem;
  }
  p {
    font-size: 1.5rem;
  }
}

@media screen and (max-width: 320px) {
}
</style>

<i18n lang="yaml">
en:
  title: 'Who am I?'
  who1: "Hello, I'm Guillermo! Designer & Developer. I live in Guadalajara, México."
  who2: 'I love learning things, it has become part of my life, thanks
    to that I came to the world of technology and discovered that
    I love creating digital products.'
  who3: 'Something more common in my life is that I like pets,
    reading, playing video games, and I love watching series.'
  who4:
    'I have knowledge in different areas. On platforms with Shopify and WordPress.
    In development with HTML, CSS, JavaScript, Nuxt JS and Linux. And in design with
    Adobe (Illustrator, Photoshop, XD) and Figma.'
es:
  title: '¿Quién Soy?'
  who1: 'Hola, Soy Guillermo! Diseñador y Desarrollador. Vivo en Guadalajara, México.'
  who2: 'Me encanta aprender cosas, se ha
    hecho parte de mi vida, gracias a eso llegue al mundo de la
    tecnología y descubrí que amo crear productos dígitales.'
  who3: 'Algo más cotidiano de mi vida es que me gustan las mascotas, leer,
    jugar videojuegos, y me encanta ver series.'
  who4: 'Tengo conocimientos en diferentes áreas. En plataformas con
    Shopify y WordPress. En desarrollo con HTML, CSS, JavaScript,
    NuxtJS y Linux. Y en diseño con Adobe (Illustrator, Photoshop, XD) y Figma.'
</i18n>
