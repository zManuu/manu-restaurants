<template>
  <div
    v-if="show"
    class="absolute z-50 top-0 left-0 w-screen h-screen select-none flex justify-center items-center bg-black bg-opacity-50 fadein"
  >
    <div
      class="spin"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
      show: { required: true, type: Boolean }
  }
})
</script>