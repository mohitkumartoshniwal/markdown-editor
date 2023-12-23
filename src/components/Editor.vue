<template>
  <textarea
    ref="textarea"
    spellcheck="false"
    class="w-full h-full resize-none pl-4 pt-2 outline-none dark:bg-gray-900 dark:text-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900"
    v-model="markdown"
    @input="setCursorPosition"
    @click="setCursorPosition"
  ></textarea>
</template>
<script setup lang="ts">
import { markdown } from "@/store/markdown";
import { ref } from "vue";

let textarea = ref<HTMLTextAreaElement>();

let emit = defineEmits<(e: "cursor-change", position: number) => void>();

function setCursorPosition() {
  if (textarea.value) {
    let position = textarea.value.selectionStart;
    emit("cursor-change", position);
  }
}
</script>
