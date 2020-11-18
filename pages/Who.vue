<template>
  <div>
    <navigation />
    <div class="container">
      <figure>
        <img src="https://i.imgur.com/T3A8Bii.png" alt="Guillermo Moreno" />
        <div>
          <h1>¿Quièn Soy?</h1>
          <p>
            Vivo en Guadalajara, México. Me dedico al desarrollo web (Frontend
            developer). Estoy aquí para ayudarte a desarrollar tu idea ya mismo!
            ya mismo! Me encantará trabajar contigo.
          </p>
        </div>
      </figure>
      <div class="rectangle">
        <img src="https://i.imgur.com/fdvibda.png" alt="" />
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
    title: '¿Quién soy?',
  },
}
</script>

<style scoped>
.rectangle {
  background-color: var(--darkTheme);
  width: 100%;
  height: 50%;
  position: absolute;
  z-index: 0;
  top: 70%;
  margin: 0;
  display: flex;
  justify-content: flex-end;
}
h1 {
  font-size: 6.7rem;
  font-family: ink-free;
  transform: rotate(-3.95deg);
}
p {
  font-size: 2.4rem;
  font-family: ink-free;
  transform: rotate(-3.95deg);
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
</style>
