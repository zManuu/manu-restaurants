<template>
  <navbar v-once />
  <loading :show="$store.state.fetching" />
  <div
    class="w-screen h-screen bg-gray-100 text-black flex justify-center items-center"
  >
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import navbar from './components/Navbar.vue'
import loading from './components/Loading.vue'

export default defineComponent({
  components: { navbar, loading },
})
</script>
<style>
body {
  overflow: hidden;
}
</style>