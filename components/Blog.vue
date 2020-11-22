<template>
  <div class="menu" data-animation="bonus">
    <a href="https://blog.memobrown.com" target="_blank">
      <h1 class="title">Blog</h1>
    </a>
    <div class="blog-container">
      <figure class="man-reading slide">
        <img src="https://i.imgur.com/6IIRlAv.png" alt="man reading" />
      </figure>
      <figure>
        <img class="circle" src="https://i.imgur.com/SB4WlF6.png" alt="" />
      </figure>
      <div class="cards">
        <a class="card1" href="#">
          <h3>Como dibujar a Rick Sanchez en puro CSS</h3>
          <p class="small">
            Hace unos meses navegando por internet descubrí que se pueden crear
            dibujos con solo CSS, y quede maravillado. Encontre obras de arte...
          </p>
          <div class="go-corner" href="#">
            <div class="go-arrow">→</div>
          </div>
        </a>

        <a class="card1" href="#">
          <h3>25 Recomendaciones para ver en esta cuarentena 📽</h3>
          <p class="small">
            En esta cuarentena que muchos están en casa y ya no saben que hacer,
            te quiero dar 25 opciones para que veas y calmes ese aburrimiento...
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
  width: 32px;
  height: 32px;
  overflow: hidden;
  top: 0;
  right: 0;
  background-color: var(--lightTheme);
  border-radius: 0 4px 0 32px;
}

.go-arrow {
  margin-top: -4px;
  margin-right: -4px;
  color: var(--secondary-color);
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
  background-color: var(--secondary-color);
  border-radius: 4px;
  padding: 32px 24px;
  margin: 12px;
  text-decoration: none;
  z-index: 0;
  overflow: hidden;
  border: 2px solid var(--secondary-color);
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
  color: var(--secondary-color);
}
.card1:hover p {
  transition: all 0.3s ease-out;
  color: var(--secondary-color);
}
.title:hover {
  background: -webkit-linear-gradient(#1a3b34, #b3dfdf);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: transform 0.8s ease-in-out;
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
</style>
