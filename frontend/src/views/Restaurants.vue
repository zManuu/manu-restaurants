<template>
  <div>
    <mInput
      placeholder="Name"
      @submit="search"
    />
  </div>
  <h1>{{ test }}</h1>
</template>
<script lang="ts">
import mInput from '@/components/m-input.vue'
import { defineComponent } from 'vue'
import { IUser } from '@shared/SharedTypes'

export default defineComponent({
  components: { mInput },
  data() {
    return {
      test: undefined as IUser | undefined
    }
  },
  methods: {
    async search(val: string) {
      this.test = await this.fetch('GET', `https://jsonplaceholder.typicode.com/todos/${val}`)
    }
  }
})
</script>