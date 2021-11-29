<template>
  <div>
    {{ pageName }} page
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {

    const pageName = 'main';

    return {
      pageName
    };
  },
});
</script>
