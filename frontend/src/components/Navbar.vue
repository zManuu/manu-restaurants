<template>
  <div class="flex justify-start gap-5 w-screen bg-gray-200 p-5 text-xl border-b-gray-300 border-b-2 text-gray-800">
    <router-link
      v-for="(item, index) in items"
      :key="index"
      :to="item.url"
      class="hover:text-blue-500 transition"
    >
      <fa :icon="item.icon" />
      {{ item.text }}
    </router-link>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {
            items: [
                { url: '/', text: 'Home', icon: 'house' },
                { url: '/restaurants', text: 'Restaurants', icon: 'spoon' }
            ]
        }
    }
})
</script>