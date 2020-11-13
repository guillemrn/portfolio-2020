<template>
  <div class="container">
    <figure>
      <nuxt-link to="/"
        ><img src="https://i.imgur.com/dwTDVmu.png" alt="Logo MemoBrown"
      /></nuxt-link>
    </figure>
    <figure class="menu">
      <img src="https://i.imgur.com/vLLi05z.png" alt="Menu" />
    </figure>
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
</style>
