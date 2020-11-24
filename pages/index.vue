<template>
  <div>
    <navigation />
    <hero />
    <projects />
    <work />
    <!-- <blog /> -->
    <Footer />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
export default {
  components: {
    Navigation,
    Footer,
  },
}
</script>
<style>
body {
  background-color: var(--lightTheme);
}
</style>
