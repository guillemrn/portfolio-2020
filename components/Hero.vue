<template>
  <div class="container">
    <div class="hero-title">
      <h1>{{ $t('title') }}</h1>
      <nuxt-link to="/projects" class="button">{{ $t('know') }}</nuxt-link>
    </div>
    <div>
      <div class="designBox"></div>
      <figure class="boy">
        <img src="https://i.imgur.com/VZZoC1O.png" alt="Boy on a computer" />
      </figure>
      <figure class="diamond">
        <img src="https://i.imgur.com/Qjt8s2v.png" alt="" />
      </figure>
      <figure class="red-circle">
        <img src="https://i.imgur.com/LMNeZPB.png" alt="" />
      </figure>
      <figure class="dark-circle">
        <img src="https://i.imgur.com/GYl9AzW.png" alt="" />
      </figure>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.boy img {
  position: relative;
  z-index: 1;
  bottom: 22rem;
  transform: scale(1.1);
}
.designBox {
  width: 40%;
  height: 100vh;
  background-color: var(--darkTheme);
  position: absolute;
  top: 0;
  right: 0;
}
.hero-title {
  display: flex;
  flex-flow: column;
  align-self: start;
  margin-top: 15rem;
}
h1 {
  font-family: var(--body);
  color: var(--textDark);
  font-size: 5.5rem;
  font-weight: 700;
}
.button {
  background-color: var(--primary-color);
  font-family: var(--body);
  padding: 2rem 6rem;
  font-size: 2.5rem;
  border-radius: 20px;
  border: none;
  transition: all 0.2s ease;
  width: fit-content;
  font-weight: 700;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.9) !important;
}
.button:hover {
  background-color: var(--primary-color);
  cursor: pointer;
  color: rgba(255, 255, 255, 1) !important;
  box-shadow: 0 4px 16px rgba(255, 75, 92, 1);
  transition: all 0.2s ease;
  text-shadow: 1px 1px 6px #fff;
}
.diamond,
.red-circle,
.dark-circle {
  position: absolute;
}
.diamond {
  top: 10%;
  left: 20%;
}
.red-circle {
  right: 0;
  top: 40%;
}
.dark-circle {
  left: 0;
  top: 80%;
}
</style>

<i18n lang="yaml">
en:
  know: 'Know my work'
  title: "I'm Guillermo Moreno UI Designer and Frontend developer"
es:
  hello: 'Conoce mi trabajo'
  title: 'Soy Guillermo Moreno diseñador UI y Desarrollador web'
</i18n>
