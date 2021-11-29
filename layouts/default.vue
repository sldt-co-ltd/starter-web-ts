<template>
  <div>
    <main>
      <nuxt />
    </main>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from '@nuxtjs/composition-api'

  export default defineComponent({
    setup() {
      return {}
    },
  })
</script>

<style lang="scss" scoped>
  main {
    margin: 0 auto;
    max-width: 640px;
  }
</style>
