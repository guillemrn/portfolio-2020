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
