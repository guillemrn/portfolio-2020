<template>
  <div class="container">
    <div>
      <p>{{ $t('memobrown') }}</p>
    </div>
    <figure class="hand">
      <a href="#header">
        <img src="https://i.imgur.com/qNBCXXf.png" alt="Hand" />
      </a>
    </figure>
    <div class="social">
      <a
        class="social-icon"
        href="https://twitter.com/MemoBrown_"
        target="_blank"
      >
        <div class="icon-twitter"></div>
      </a>
      <a
        class="social-icon"
        href="https://dribbble.com/MemoBrown"
        target="_blank"
      >
        <div class="icon-dribbble"></div>
      </a>
      <a
        class="social-icon"
        href="https://www.behance.net/MemoBrown"
        target="_blank"
      >
        <div class="icon-behance"></div>
      </a>
      <a
        class="social-icon"
        href="https://github.com/MemoBrown"
        target="_blank"
      >
        <div class="icon-github"></div>
      </a>
      <a
        class="social-icon"
        href="https://www.instagram.com/MemoBrown_/"
        target="_blank"
      >
        <div class="icon-instagram"></div>
      </a>
      <a class="social-icon" href="mailto:contatc@memobrown.com">
        <div class="icon-mail"></div>
      </a>
    </div>
    <div class="page-options">
      <ColorModePicker />
      <nuxt-link
        v-for="locale in availableLocales"
        :key="locale.code"
        class="locale-lang"
        :to="switchLocalePath(locale.code)"
        ><img src="https://i.imgur.com/OKICklz.png" alt="Icon Translate"
      /></nuxt-link>
    </div>
  </div>
</template>

<script>
import ColorModePicker from '@/components/ColorModePicker'

export default {
  components: {
    ColorModePicker,
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
p {
  font-size: 2.4rem;
  font-family: var(--titles);
  color: var(--primary-color);
  font-weight: 400;
}
.hand {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
}
.hand img {
  width: 22rem;
  height: auto;
}
.social {
  display: flex;
}
.social-icon {
  color: var(--primary-color);
  text-decoration: none;
  font-size: 5rem;
  margin: 1rem;
  transition: 300ms;
}
.social-icon:hover {
  color: var(--primary-lighter);
}
.locale-lang {
  font-family: var(--body);
  text-decoration: none;
  color: var(--textDark);
  text-align: center;
}
.locale-lang img {
  width: 3.5rem;
  height: 3.5rem;
  position: relative;
  top: 0;
  transition: all 0.1s ease;
}
.locale-lang img:hover {
  top: -3px;
}
.page-options {
  position: absolute;
  margin-top: 15rem;
  right: 0;
  padding: 3rem;
  display: flex;
  align-items: center;
  margin-right: 10rem;
}
@media screen and (max-width: 1440px) {
}

@media screen and (max-width: 1024px) {
}

@media screen and (max-width: 768px) {
  .container {
    flex-flow: column;
  }
  .page-options[data-v-0d2d6594] {
    position: initial;
    margin-top: initial;
    right: initial;
    padding: 3rem;
    display: flex;
    align-items: center;
    margin-right: initial;
  }
}

@media screen and (max-width: 576px) {
}

@media screen and (max-width: 480px) {
  .hand img {
    width: 15rem;
  }
  p {
    font-size: 1.8rem;
  }
  .social-icon {
    font-size: 4rem;
  }
}

@media screen and (max-width: 426px) {
}

@media screen and (max-width: 376px) {
  p {
    font-size: 1.5rem;
  }
  .social-icon {
    font-size: 2.5rem;
  }
  .hand img {
    width: 12rem;
  }
}

@media screen and (max-width: 320px) {
  p {
    font-size: 1.2rem;
  }
}
</style>

<i18n lang="yaml">
en:
  memobrown: 'Code & Design By MemoBrown'
es:
  memobrown: 'Código y Diseño por MemoBrown'
</i18n>
