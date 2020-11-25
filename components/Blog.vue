<template>
  <div class="menu" data-animation="bonus">
    <h1>
      <a class="title" href="https://blog.memobrown.com" target="_blank"
        >Blog</a
      >
    </h1>
    <div class="blog-container">
      <figure class="man-reading slide">
        <img src="https://i.imgur.com/6IIRlAv.png" alt="man reading" />
      </figure>
      <figure>
        <img class="circle" src="https://i.imgur.com/4Hd72f0.png" alt="" />
      </figure>
      <div class="cards">
        <a
          class="card1"
          href="https://blog.memobrown.com/rick-sanchez-css.html"
        >
          <h3>{{ $t('rick') }}</h3>
          <p class="small">
            {{ $t('text') }}
          </p>
          <div class="go-corner" href="#">
            <div class="go-arrow">→</div>
          </div>
        </a>

        <a
          class="card1"
          href="https://blog.memobrown.com/recomendaciones-cuarentena.html"
        >
          <h3>{{ $t('recomm') }}</h3>
          <p class="small">
            {{ $t('movies') }}
          </p>
          <div class="go-corner" href="#">
            <div class="go-arrow">→</div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.man-reading {
  padding-left: 4rem;
}
.man-reading {
  animation-duration: 2.3s;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
}

@keyframes slide {
  0% {
    transform: translateY(5px);
  }
  50% {
    transform: translateY(15px);
  }
  100% {
    transform: translateY(5px);
  }
}
.slide {
  animation-name: slide;
  animation-duration: 2s;
}
.circle {
  position: absolute;
  top: 360%;
  transform: scale(1.3);
}
.title {
  font-size: 14rem;
  font-family: var(--titles);
  color: var(--textDark);
  text-align: end;
  padding-left: 12.3rem;
  font-weight: 400;
  margin: 0;
  text-decoration: none;
  width: fit-content;
  cursor: pointer;
  transition: all 300ms;
}
.blog-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
h3 {
  color: var(--textLight);
  font-size: 3rem;
  line-height: 24px;
  font-weight: 700;
  margin-bottom: 4px;
}

p {
  font-size: 2rem;
  font-weight: 400;
  line-height: 20px;
  color: var(--textLight);
}
.go-corner {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 40px;
  height: 40px;
  overflow: hidden;
  top: 0;
  right: 0;
  background-color: var(--lightTheme);
  border-radius: 0 4px 0 32px;
}

.go-arrow {
  margin-top: -4px;
  margin-right: -4px;
  color: var(--textDark);
  font-size: 2.5rem;
  font-weight: bold;
  font-family: var(--titles);
}
.cards {
  align-self: flex-start;
}

.card1 {
  display: block;
  position: relative;
  width: 60rem;
  height: 20rem;
  background-color: var(--darkTheme);
  border-radius: 20px;
  padding: 32px 24px;
  margin: 12px;
  text-decoration: none;
  z-index: 0;
  overflow: hidden;
  border: 2px solid var(--darkTheme);
  margin-right: 20rem;
  font-family: var(--body);
}
.card1:before {
  content: '';
  position: absolute;
  z-index: -1;
  top: -16px;
  right: -16px;
  background: var(--lightTheme);
  height: 32px;
  width: 32px;
  border-radius: 32px;
  transform: scale(1);
  transform-origin: 50% 50%;
  transition: transform 0.25s ease-out;
}

.card1:hover:before {
  transform: scale(40);
}
.card1:hover h3 {
  transition: all 0.3s ease-out;
  color: var(--textDark);
}
.card1:hover p {
  transition: all 0.3s ease-out;
  color: var(--textDark);
}
.title:hover {
  color: var(--primary-lighter);
}
.menu .title {
  position: relative;
}

.menu .title::before {
  content: '';
  position: absolute;
  bottom: 0;
  width: 80%;
  height: 2px;
  background: linear-gradient(to right, #ffa5ad, #b3dfdf, #ffa5ad);
  z-index: 1;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.8s ease-in-out;
  height: 15px;
  border-radius: 20px;
}

.menu .title:hover::before {
  transform: scaleX(1);
}
.menu[data-animation='bonus'] .title::before {
  transform-origin: right;
}

.menu[data-animation='bonus'] .title:hover::before {
  transform-origin: left;
  transform: scaleX(1);
  transition-timing-function: cubic-bezier(0.2, 1, 0.82, 0.94);
}
a {
  text-decoration: none;
}
@media screen and (max-width: 1440px) {
  .title {
    padding-left: 0;
    font-size: 10rem;
  }
  .circle {
    display: none;
  }
  .man-reading img {
    width: 120%;
  }
  .card1 {
    margin-right: 0;
    width: 45rem;
  }
  .cards {
    align-self: initial;
  }
}

@media screen and (max-width: 1024px) {
  .title {
    padding-left: 0;
    font-size: 10rem;
  }
  .circle {
    transform: scale(1);
  }
  .man-reading img {
    width: 120%;
  }
  .card1 {
    margin-right: 0;
    width: 45rem;
  }
  .cards {
    align-self: initial;
  }
}

@media screen and (max-width: 768px) {
  .menu {
    display: flex;
    flex-flow: column;
    align-items: center;
  }
  .title {
    padding-left: 0;
    font-size: 10rem;
  }
  .blog-container {
    flex-flow: column;
  }
  .circle {
    display: none;
  }
  .man-reading img {
    width: 100%;
  }
  .card1 {
    margin-right: 0;
  }
  .cards {
    align-self: initial;
  }
}

@media screen and (max-width: 576px) {
  .card1 {
    width: 50rem;
  }
}

@media screen and (max-width: 480px) {
  .card1 {
    width: 40rem;
  }
  .card1 h3 {
    font-size: 2.5rem;
  }
  p {
    font-size: 1.8rem;
  }
  .title {
    font-size: 8rem;
  }
}

@media screen and (max-width: 426px) {
  .card1 {
    width: 38rem;
  }
  .card1 h3 {
    font-size: 2.4rem;
  }
  p {
    font-size: 1.7rem;
  }
  .title {
    font-size: 8rem;
  }
}

@media screen and (max-width: 376px) {
  .card1 {
    width: 30rem;
    height: 18rem;
  }
  .card1 h3 {
    margin-top: 0;
  }
  p {
    font-size: 1.6rem;
  }
  .title {
    font-size: 6rem;
  }
}

@media screen and (max-width: 320px) {
}
</style>

<i18n lang="yaml">
en:
  rick: 'How to draw Rick Sanchez in pure CSS'
  text: 'A few months ago surfing the Internet I
    discovered that you can create drawings only with CSS,
    and I was surprised. I found works of art ...'
  recomm: '25 recommendations to see this quarantine 📽'
  movies: 'Bored this quarantine? Here are some recommendations to see ...'
es:
  rick: 'Como dibujar a Rick Sanchez en puro CSS'
  text: 'Hace unos meses navegando por internet descubrí
    que se pueden crear dibujos con solo CSS, y quede
    maravillado. Encontre obras de arte...'
  recomm: '25 recomendaciones para ver esta cuarentena 📽'
  movies: '¿Aburrido esta cuarentena? Aquí hay algunas recomendaciones para ver ...'
</i18n>
