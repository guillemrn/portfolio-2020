<template>
  <div class="container">
    <div>
      <p>Code & Design By MemoBrown</p>
    </div>
    <figure class="hand">
      <a href="#header">
        <img src="https://i.imgur.com/qNBCXXf.png" alt="Hand" />
      </a>
    </figure>
    <div class="social">
      <a
        class="social-icon"
        href="https://twitter.com/MemoBrown_"
        target="_blank"
      >
        <div class="icon-twitter"></div>
      </a>
      <a
        class="social-icon"
        href="https://dribbble.com/MemoBrown"
        target="_blank"
      >
        <div class="icon-dribbble"></div>
      </a>
      <a
        class="social-icon"
        href="https://www.behance.net/MemoBrown"
        target="_blank"
      >
        <div class="icon-behance"></div>
      </a>
      <a
        class="social-icon"
        href="https://github.com/MemoBrown"
        target="_blank"
      >
        <div class="icon-github"></div>
      </a>
      <a
        class="social-icon"
        href="https://www.instagram.com/MemoBrown_/"
        target="_blank"
      >
        <div class="icon-instagram"></div>
      </a>
      <a class="social-icon" href="mailto:contatc@memobrown.com">
        <div class="icon-mail"></div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
p {
  font-size: 2.4rem;
  font-family: var(--titles);
  color: var(--primary-color);
  font-weight: 400;
}
.hand img {
  width: 22rem;
  height: auto;
}
.social {
  display: flex;
}
.social-icon {
  color: var(--primary-color);
  text-decoration: none;
  font-size: 5rem;
  margin: 1rem;
  transition: 300ms;
}
.social-icon:hover {
  color: var(--primary-lighter);
}
</style>
