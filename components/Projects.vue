<template>
  <div class="container menu" data-animation="bonus">
    <nuxt-link to="/projects" class="title">{{ $t('projects') }}</nuxt-link>
    <div class="projects">
      <figure class="man">
        <img src="https://i.imgur.com/QCThjnM.png" alt="Man" />
      </figure>

      <div class="project-img">
        <nuxt-link to="/projects/FerreteriaBravo" class="project">
          <img
            class="img-hover"
            src="https://i.imgur.com/VV0yNX6.png"
            alt="FerreBravo"
          />
          <div class="overlay">
            <figure class="img-project">
              <img
                src="https://i.imgur.com/ILKivel.png"
                alt="FerreBravo logo"
              />
            </figure>
          </div>
        </nuxt-link>

        <nuxt-link to="/projects/Raypal" class="project">
          <img
            class="img-hover"
            src="https://i.imgur.com/dhezHmX.png"
            alt="Raypal"
          />
          <div class="overlay">
            <figure class="img-project">
              <img src="https://i.imgur.com/2w42Duw.png" alt="Raypal logo" />
            </figure>
          </div>
        </nuxt-link>
      </div>
      <figure class="half-cirlce">
        <img src="https://i.imgur.com/EK0mNhf.png" alt="" />
      </figure>
      <figure class="lines">
        <img src="https://i.imgur.com/IWHmhmD.png" alt="" />
      </figure>
    </div>
  </div>
</template>

<style scoped>
.man img {
  position: relative;
  z-index: 1;
  /* padding-left: 8rem; */
  top: 7rem;
  /* transform: scale(1.3); */
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
  transition: all 300ms;
}
.projects {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.project-img img {
  margin: 1rem;
}

.lines {
  position: absolute;
  left: 0;
}
.half-cirlce {
  position: absolute;
  top: 118%;
  padding-left: 8rem;
  right: 0;
  z-index: 0;
}
.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.img-project img {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  transition: 0.5s ease;
}
.project-img {
  display: flex;
  position: relative;
  z-index: 1;
}
.project {
  position: relative;
  width: 100%;
}
.img-hover {
  transition: all 300ms;
  border-radius: 24px;
}

.project:hover .img-hover {
  transform: scale(1.03);
  box-shadow: 4px 4px 10px rgb(70, 69, 69);
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
  /* left: 30rem; */
  width: 90%;
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
.mmm {
  color: var(--darkTheme);
}
@media screen and (max-width: 1440px) {
  .half-cirlce {
    top: 168%;
  }
  .half-cirlce img {
    width: 50rem;
  }
  .project-img img {
    width: 30rem;
  }
}

@media screen and (max-width: 1024px) {
  .container {
    margin-top: 10rem;
  }
  .title {
    font-size: 10rem;
    padding-left: initial;
    text-align: center;
  }
  .project-img {
    flex-flow: column;
  }
  .project-img img {
    width: 25rem;
  }
  .img-project img {
    left: 45%;
  }
  .man img {
    width: 40rem;
  }
}

@media screen and (max-width: 768px) {
  .container {
    margin-top: 10rem;
  }
  .title {
    font-size: 10rem;
    padding-left: initial;
    text-align: center;
  }
  .project-img {
    flex-flow: column;
  }
  .half-cirlce {
    display: none;
  }
  .project-img img {
    width: 25rem;
  }
  .img-project img {
    left: 45%;
  }
  .man img {
    width: 40rem;
  }
}

@media screen and (max-width: 576px) {
  .title {
    font-size: 8rem;
  }
  .project-img {
    /* flex-flow: initial; */
  }
  .projects {
    flex-flow: column;
  }
  .project-img img {
    width: initial;
  }
  .container {
    display: flex;
    flex-flow: column;
  }
  .man img[data-v-3a2ed856] {
    top: 0rem;
  }
}

@media screen and (max-width: 480px) {
  .title {
    font-size: 6rem;
  }
  .project-img img {
    width: 30rem;
  }
}

@media screen and (max-width: 426px) {
  .title {
    font-size: 4rem;
  }
  .man img {
    width: 30rem;
  }
  .project-img img {
    width: 25rem;
  }
}

@media screen and (max-width: 376px) {
}

@media screen and (max-width: 320px) {
}
</style>

<i18n lang="yaml">
en:
  projects: 'Projects'
es:
  projects: 'Proyectos'
</i18n>
