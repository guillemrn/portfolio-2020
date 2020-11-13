<template>
  <div class="container">
    <div>
      <h1>Trabajemos<br />Juntos</h1>
      <p>
        Tienes algún proyecto en mente, llevemoslo al mundo digital. Me
        encantaría conocerte y que trabajemos juntos.
      </p>
      <button>¡Vamos!</button>
    </div>
    <figure>
      <img src="https://i.imgur.com/ySMr04w.png" alt="" />
    </figure>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--textDark);
  margin: 2rem 2rem;
  padding: 1rem 7rem;
}
.container h1 {
  font-family: var(--titles);
  font-size: 8rem;
  font-weight: 400;
}
.container p {
  font-family: var(--body);
  font-size: 3.6rem;
  font-weight: 400;
}
button {
  background-color: var(--primary-color);
  color: #fff;
  font-family: var(--hero-buttons);
  padding: 2rem 2rem;
  width: 333px;
  font-size: 2.5rem;
  border-radius: 20px;
  border: none;
  outline-color: var(--primary-lighter);
  transition: all 300ms;
}
button:hover {
  background-color: var(--secondary-color);
  cursor: pointer;
}
</style>
