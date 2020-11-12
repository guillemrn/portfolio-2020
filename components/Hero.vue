<template>
  <div class="flex justify-between">
    <div class="flex items-center flex-col">
      <h1 class="text-6xl text-left text-textDark">
        Soy Guillermo Moreno<br />diseñador UI y <br />Desarrollador web
      </h1>
      <button
        class="bg-primary hover:bg-primary-lighter text-white font-bold text-4xl py-4 px-4 rounded-2xl"
      >
        Conoce mi trabajo
      </button>
    </div>
    <div>
      <div class="designBox absolute z-0 inset-y-0 right-0"></div>
      <figure class="absolute z-10 bottom-0 img-boy">
        <img src="https://i.imgur.com/VZZoC1O.png" alt="Boy on a computer" />
      </figure>
      <!-- <figure>
        <img src="https://i.imgur.com/Qjt8s2v.png" alt="" />
      </figure>
      <figure>
        <img src="https://i.imgur.com/LMNeZPB.png" alt="" />
      </figure>
      <figure>
        <img src="https://i.imgur.com/GYl9AzW.png" alt="" />
      </figure> -->
    </div>
  </div>
</template>

<style scoped>
.designBox {
  width: 40%;
  height: 100vh;
  background-color: var(--darkTheme);
  position: absolute;
  top: 0;
  right: 0;
}
h1 {
  font-family: var(--hero-buttons);
}
.img-boy {
  right: 10%;
}
</style>
