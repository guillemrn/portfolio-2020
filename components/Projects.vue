<template>
  <div class="container">
    <nuxt-link to="/projects" class="title">Proyectos</nuxt-link>
    <div class="projects">
      <figure class="man">
        <img src="https://i.imgur.com/o0XvBOn.png" alt="Man" />
      </figure>

      <div class="project-img">
        <nuxt-link to="/projects/FerreteriaBravo" class="project">
          <img src="https://i.imgur.com/VV0yNX6.png" alt="FerreBravo" />
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
          <img src="https://i.imgur.com/dhezHmX.png" alt="Raypal" />
          <div class="overlay">
            <figure class="img-project">
              <img src="https://i.imgur.com/IFGuDwg.png" alt="Raypal logo" />
            </figure>
          </div>
        </nuxt-link>
      </div>

      <div class="rectangle"></div>
      <figure class="red-circle">
        <img src="https://i.imgur.com/uF3mB3u.png" alt="" />
      </figure>
      <figure class="half-cirlce">
        <img src="https://i.imgur.com/t0XAQAC.png" alt="" />
      </figure>
      <figure class="lines">
        <img src="https://i.imgur.com/IWHmhmD.png" alt="" />
      </figure>
    </div>
  </div>
</template>

<style scoped>
.rectangle {
  width: 15%;
  height: 100vh;
  background-color: var(--darkTheme);
  position: absolute;
  top: 100%;
  left: 0;
}
.man img {
  position: relative;
  z-index: 1;
  left: -15rem;
  top: 10rem;
  transform: scale(1.1);
}
.title {
  font-size: 14rem;
  font-family: var(--titles);
  color: var(--textDark);
  text-align: end;
  padding-left: 30rem;
  font-weight: 400;
  margin: 0;
  text-decoration: none;
}
.projects {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.project-img img {
  margin: 1rem;
}
.red-circle,
.half-cirlce,
.lines {
  position: absolute;
  left: 0;
}
.red-circle {
  top: 105%;
}
.half-cirlce {
  top: 118%;
  padding-left: 8rem;
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
}
.project {
  position: relative;
  width: 100%;
  transition: all 300ms;
}
.project:hover {
  transform: scale(1.03);
}
</style>
