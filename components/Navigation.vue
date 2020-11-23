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
    <menu />
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
</style>
