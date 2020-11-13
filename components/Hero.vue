<template>
  <div class="container">
    <div class="hero-title">
      <h1>Soy Guillermo Moreno<br />diseñador UI y <br />Desarrollador web</h1>
      <button>Conoce mi trabajo</button>
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
  bottom: 15rem;
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
  font-family: var(--hero-buttons);
  color: var(--textDark);
  font-size: 5.5rem;
  font-weight: 400;
}
button {
  background-color: var(--primary-color);
  color: #fff;
  font-family: var(--hero-buttons);
  padding: 2rem 6rem;
  font-size: 2.5rem;
  border-radius: 20px;
  border: none;
  outline-color: var(--primary-lighter);
  transition: all 300ms;
  width: fit-content;
}
button:hover {
  background-color: var(--secondary-color);
  cursor: pointer;
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
