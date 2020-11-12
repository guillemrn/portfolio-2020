<template>
  <div>
    <navigation />
    <hero />
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
  background-color: theme('colors.lightTheme');
}
</style>
