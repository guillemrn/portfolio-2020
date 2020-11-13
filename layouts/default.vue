<template>
  <div>
    <navigation />
    <hero />
    <projects />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
export default {
  components: {
    Navigation,
  },
}
</script>
<style>
body {
  background-color: var(--lightTheme);
}
</style>
