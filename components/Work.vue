<template>
  <div id="work" class="container">
    <div>
      <h1>{{ $t('work') }}</h1>
      <p>
        {{ $t('p') }}
      </p>
      <a href="mailto:contatc@memobrown.com">
        <button>{{ $t('cta') }}</button>
      </a>
    </div>
    <figure class="">
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
  color: rgba(255, 255, 255, 0.9) !important;
  font-family: var(--body);
  font-weight: 700;
  padding: 2rem 2rem;
  width: 333px;
  font-size: 2.5rem;
  border-radius: 20px;
  border: none;
  outline-color: var(--primary-lighter);
  transition: all 0.2s ease;
}
button a {
  color: rgba(255, 255, 255, 0.9) !important;
  text-decoration: none;
}
button:hover {
  background-color: var(--primary-color);
  cursor: pointer;
  color: rgba(255, 255, 255, 1) !important;
  box-shadow: 0 4px 16px rgba(255, 75, 92, 1);
  transition: all 0.2s ease;
  text-shadow: 1px 1px 6px #fff;
}
@media screen and (max-width: 1440px) {
}

@media screen and (max-width: 1024px) {
}

@media screen and (max-width: 768px) {
  .container {
    flex-flow: column;
    margin-top: 10rem;
  }
  .container div {
    text-align: center;
  }
  figure img {
    width: 100%;
  }
  button {
    margin: initial;
  }
}

@media screen and (max-width: 576px) {
  .container[data-v-f3610f28] {
    padding: 1rem 1rem;
  }
  .container h1 {
    font-size: 6rem;
  }
  .container p {
    font-size: 3rem;
  }
}

@media screen and (max-width: 480px) {
  .container h1 {
    font-size: 5rem;
  }
  .container p {
    font-size: 2.5rem;
  }
}

@media screen and (max-width: 426px) {
}

@media screen and (max-width: 376px) {
  .container h1 {
    font-size: 4rem;
  }
  .container p {
    font-size: 2rem;
  }
  button {
    width: 260px;
  }
}

@media screen and (max-width: 320px) {
}
</style>

<i18n lang="yaml">
en:
  work: "Let's Work Together"
  p: "You have a project in mind, let's take it to the digital world. I would love to meet you and work together."
  cta: "Let's Go!"
es:
  work: 'Trabajemos Juntos'
  p: 'Tienes un proyecto en mente, llevémoslo al mundo digital. Me encantaría conocerte y trabajar juntos.'
  cta: '¡Vamos!'
</i18n>
