<template>
  <div
    class="px-2 py-1 dark:border-gray-300 border-2 flex items-center gap-2"
  >
    <input
      v-model="value"
      :placeholder="placeholder"
      class="bg-inherit text-black outline-none"
    >
    <fa
      v-tooltip="'Klicke, um zu speichern.'"
      icon="check"
      class="cursor-pointer outline-none"
      @click="submit"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        placeholder: { required: false, type: String, default: '???' }
    },
    emits: ['submit'],
    data() {
        return {
            value: undefined
        }
    },
    methods: {
        submit() {
            this.$emit('submit', this.value)
        }
    }
})
</script>