<script setup lang="ts">
import { CURSOR_POSITION } from "@/InjectionKeys";
import { markdown } from "@/store/markdown";
import { TAGS } from "@/types";
import {
  markdownInfo,
  TAGS_MAP,
  replaceHighlightedText,
  addTags,
} from "@/utils";
import { useToggle, useDark, useTextSelection } from "@vueuse/core";
import { inject, type Ref } from "vue";

const isDark = useDark();

const toggleDark = useToggle(isDark);

let { text } = useTextSelection();

let cursorPosition = inject(CURSOR_POSITION) as Ref<number>;

function onClick(tag: TAGS) {
  if (text.value && markdown.value.includes(text.value)) {
    if (TAGS_MAP[tag].add) return;

    markdown.value = replaceHighlightedText({
      markdown: markdown.value,
      cursorPosition: cursorPosition.value,
      highlightedText: text.value,
      tag,
    });
  } else {
    markdown.value = addTags({
      markdown: markdown.value,
      cursorPosition: cursorPosition.value,
      tag,
    });
  }
}
</script>

<template>
  <div class="flex gap-2 py-2 overflow-auto dark:bg-gray-900">
    <button
      class="hover:bg-gray-200 rounded dark:hover:bg-green-400"
      @click="onClick(TAGS.BOLD)"
    >
      <i-mdi-format-bold class="text-xl text-gray-500 dark:text-white" />
    </button>
    <button
      class="hover:bg-gray-200 rounded dark:hover:bg-green-400"
      @click="onClick(TAGS.ITALIC)"
    >
      <i-mdi-format-italic class="text-xl text-gray-500 dark:text-white" />
    </button>
    <button
      class="hover:bg-gray-200 rounded dark:hover:bg-green-400"
      @click="onClick(TAGS.H1)"
    >
      <i-mdi-format-header-1 class="text-xl text-gray-500 dark:text-white" />
    </button>
    <button
      class="hover:bg-gray-200 rounded dark:hover:bg-green-400"
      @click="onClick(TAGS.H2)"
    >
      <i-mdi-format-header-2 class="text-xl text-gray-500 dark:text-white" />
    </button>
    <button
      class="hover:bg-gray-200 rounded dark:hover:bg-green-400"
      @click="onClick(TAGS.H3)"
    >
      <i-mdi-format-header-3 class="text-xl text-gray-500 dark:text-white" />
    </button>
    <button
      class="hover:bg-gray-200 rounded dark:hover:bg-green-400"
      @click="onClick(TAGS.H4)"
    >
      <i-mdi-format-header-4 class="text-xl text-gray-500 dark:text-white" />
    </button>
    <button
      class="hover:bg-gray-200 rounded dark:hover:bg-green-400"
      @click="onClick(TAGS.H5)"
    >
      <i-mdi-format-header-5 class="text-xl text-gray-500 dark:text-white" />
    </button>
    <button
      class="hover:bg-gray-200 rounded dark:hover:bg-green-400"
      @click="onClick(TAGS.H6)"
    >
      <i-mdi-format-header-6 class="text-xl text-gray-500 dark:text-white" />
    </button>
    <button class="hover:bg-gray-200 rounded dark:hover:bg-green-400">
      <i-mdi-format-underline
        class="text-xl text-gray-500 dark:text-white"
        @click="onClick(TAGS.UNDERLINE)"
      />
    </button>

    <button class="hover:bg-gray-200 rounded dark:hover:bg-green-400">
      <i-mdi-format-strikethrough-variant
        class="text-xl text-gray-500 dark:text-white"
        @click="onClick(TAGS.STRIKETHROUGH)"
      />
    </button>
    <button class="hover:bg-gray-200 rounded dark:hover:bg-green-400">
      <i-mdi-bookmark
        class="text-xl text-gray-500 dark:text-white"
        @click="onClick(TAGS.HIGHLIGHT)"
      />
    </button>

    <button class="hover:bg-gray-200 rounded dark:hover:bg-green-400">
      <i-mdi-format-subscript
        class="text-xl text-gray-500 dark:text-white"
        @click="onClick(TAGS.SUBSCRIPT)"
      />
    </button>
    <button class="hover:bg-gray-200 rounded dark:hover:bg-green-400">
      <i-mdi-format-superscript
        class="text-xl text-gray-500 dark:text-white"
        @click="onClick(TAGS.SUPERSCRIPT)"
      />
    </button>
    <button class="hover:bg-gray-200 rounded dark:hover:bg-green-400">
      <i-mdi-format-quote-open
        class="text-xl text-gray-500 dark:text-white"
        @click="onClick(TAGS.BLOCKQUOTE)"
      />
    </button>
    <button class="hover:bg-gray-200 rounded dark:hover:bg-green-400">
      <i-mdi-link-variant
        class="text-xl text-gray-500 dark:text-white"
        @click="onClick(TAGS.LINK)"
      />
    </button>
    <button class="hover:bg-gray-200 rounded dark:hover:bg-green-400">
      <i-mdi-file-image-outline
        class="text-xl text-gray-500 dark:text-white"
        @click="onClick(TAGS.IMAGE)"
      />
    </button>
    <button class="hover:bg-gray-200 rounded dark:hover:bg-green-400">
      <i-mdi-xml
        class="text-xl text-gray-500 dark:text-white"
        @click="onClick(TAGS.FENCED_CODE_BLOCK)"
      />
    </button>
    <button class="hover:bg-gray-200 rounded dark:hover:bg-green-400">
      <i-mdi-table-large
        class="text-xl text-gray-500 dark:text-white"
        @click="onClick(TAGS.TABLE)"
      />
    </button>

    <button
      class="hover:bg-gray-200 rounded dark:hover:bg-green-400 ml-auto"
      @click="markdown = markdownInfo"
    >
      <i-mdi-information-variant-circle-outline
        class="text-xl text-gray-500 dark:text-white"
      />
    </button>

    <button
      class="hover:bg-gray-200 rounded dark:hover:bg-green-400"
      @click="markdown = ''"
    >
      <i-mdi-delete-outline class="text-xl text-gray-500 dark:text-white" />
    </button>

    <button
      class="hover:bg-gray-200 rounded dark:hover:bg-green-400"
      @click="toggleDark()"
    >
      <i-mdi-white-balance-sunny
        v-if="isDark"
        class="text-xl text-gray-500 dark:text-white"
      />
      <i-mdi-weather-night
        v-else
        class="text-xl text-gray-500 dark:text-white"
      />
    </button>
  </div>
</template>
