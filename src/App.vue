<script setup lang="ts">
import { provide, ref } from "vue";
import { CURSOR_POSITION } from "./InjectionKeys";
import { Splitpanes, Pane } from "splitpanes";
import "splitpanes/dist/splitpanes.css";

const cursorPosition = ref(0);

provide(CURSOR_POSITION, cursorPosition);

function onCursorChange(position: number) {
  cursorPosition.value = position;
}
</script>

<template>
  <EditorControls />
  <Splitpanes class="w-full !h-[calc(100vh-theme(spacing.10))]">
    <Pane min-size="5">
      <Editor class="dark:bg-gray-900" @cursor-change="onCursorChange" />
    </Pane>
    <Pane min-size="5">
      <Preview class="dark:bg-gray-900" />
    </Pane>
  </Splitpanes>
</template>
<style>
.splitpanes--vertical > .splitpanes__splitter {
  width: 0.5rem;
  background: gray;
}
</style>
