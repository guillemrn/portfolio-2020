<template>
  <div>
    <ul>
      <li v-for="color of colors" :key="color">
        <component
          :is="`icon-${color}`"
          :class="getClasses(color)"
          @click="$colorMode.preference = color"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import IconLight from '@/assets/icons/light.svg?inline'
import IconDark from '@/assets/icons/dark.svg?inline'
export default {
  components: {
    IconLight,
    IconDark,
  },
  data() {
    return {
      colors: ['light', 'dark'],
    }
  },
  methods: {
    getClasses(color) {
      if (this.$colorMode.unknown) {
        return {}
      }
      return {
        preferred: color === this.$colorMode.preference,
        selected: color === this.$colorMode.value,
      }
    },
  },
}
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
ul li {
  display: inline-block;
  padding: 5px;
}
p {
  margin: 0;
  padding-top: 5px;
  padding-bottom: 20px;
}
.feather {
  position: relative;
  top: 0px;
  cursor: pointer;
  padding: 7px;
  margin: 0;
  border-radius: 5px;
  transition: all 0.1s ease;
  background-color: var(--lightTheme);
  border: 2px solid var(--primary-color);
  width: 3.5rem;
  height: 3.5rem;
  color: var(--primary-color);
}
.feather:hover {
  top: -3px;
}
.feather.preferred {
  border-color: var(--primary-color);
  top: -3px;
}
.feather.selected {
  color: var(--darkTheme);
}
</style>
