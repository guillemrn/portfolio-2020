<template>
  <div id="header" class="container">
    <figure>
      <nuxt-link to="/"
        ><img
          class="logo"
          src="https://i.imgur.com/dsX64J3.png"
          alt="Logo MemoBrown"
      /></nuxt-link>
    </figure>
    <div class="menu-wrap">
      <input type="checkbox" class="toggler" />
      <div class="hamburger"><div></div></div>
      <div class="menu">
        <div>
          <div>
            <ul>
              <li>
                <nuxt-link to="/">{{ $t('home') }}</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/projects">{{ $t('projects') }}</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/who">{{ $t('who') }}</nuxt-link>
              </li>
              <!-- <li>
                <nuxt-link to="#work">{{ $t('contact') }}</nuxt-link>
              </li> -->
              <li>
                <a href="https://blog.memobrown.com" target="_blank">{{
                  $t('blog')
                }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.menu {
  position: relative;
  z-index: 1;
}
.logo {
  width: 130px;
  height: auto;
}
/* MENU STYLES */
.menu-wrap {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10;
  margin: 2rem 4rem;
}

.menu-wrap .toggler {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 11;
  cursor: pointer;
  width: 50px;
  height: 50px;
  opacity: 0;
}

.menu-wrap .hamburger {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  width: 50px;
  height: 50px;
  padding: 1rem;
  background: var(--lightTheme);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Hamburger Line */
.menu-wrap .hamburger > div {
  position: relative;
  flex: none;
  width: 100%;
  height: 4px;
  background: var(--textDark);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
  border-radius: 20px;
}

/* Hamburger Lines - Top & Bottom */
.menu-wrap .hamburger > div::before,
.menu-wrap .hamburger > div::after {
  content: '';
  position: absolute;
  z-index: 10;
  top: -10px;
  width: 100%;
  height: 4px;
  background: inherit;
  border-radius: 20px;
}

/* Moves Line Down */
.menu-wrap .hamburger > div::after {
  top: 10px;
}

/* Toggler Animation */
.menu-wrap .toggler:checked + .hamburger > div {
  transform: rotate(135deg);
}

/* Turns Lines Into X */
.menu-wrap .toggler:checked + .hamburger > div:before,
.menu-wrap .toggler:checked + .hamburger > div:after {
  top: 0;
  transform: rotate(90deg);
}

/* Rotate On Hover When Checked */
.menu-wrap .toggler:checked:hover + .hamburger > div {
  transform: rotate(225deg);
}

/* Show Menu */
.menu-wrap .toggler:checked ~ .menu {
  visibility: visible;
}

.menu-wrap .toggler:checked ~ .menu > div {
  transform: scale(1);
  transition-duration: 0.75s;
}

.menu-wrap .toggler:checked ~ .menu > div > div {
  opacity: 1;
  transition: opacity 0.4s ease 0.4s;
}

.menu-wrap .menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  visibility: hidden;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu-wrap .menu > div {
  background: var(--darkTheme);
  border-radius: 50%;
  width: 200vw;
  height: 200vw;
  display: flex;
  flex: none;
  align-items: center;
  justify-content: center;
  transform: scale(0);
  transition: all 0.4s ease;
}

.menu-wrap .menu > div > div {
  text-align: center;
  max-width: 90vw;
  max-height: 100vh;
  opacity: 0;
}

.menu-wrap .menu > div > div > ul > li {
  list-style: none;
  color: var(--textLight);
  font-size: 4rem;
  padding: 1rem;
  font-family: var(--body);
  transition: all 300ms;
  text-transform: uppercase;
}

.menu-wrap .menu > div > div > ul > li:hover {
  color: var(--primary-lighter);
  text-decoration: line-through;
}

.menu-wrap .menu > div > div > ul > li > a {
  color: inherit;
  text-decoration: none;
  transition: color 0.4s ease;
}
</style>

<i18n lang="yaml">
en:
  home: 'Home'
  projects: 'Projects'
  who: 'Who?'
  contact: 'Contact'
  blog: 'Blog'
es:
  projects: 'Proyectos'
  home: 'Inicio'
  who: '¿Quién Soy?'
  contact: 'Contacto'
  blog: 'Blog'
</i18n>
