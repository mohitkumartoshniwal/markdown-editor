<template>
  <div
    class="prose h-full border-t border-gray-200 overflow-y-auto max-w-none dark:bg-gray-900 dark:prose-invert dark:border-gray-700"
    v-html="markdownIt.render(markdown)"
  ></div>
</template>
<script setup lang="ts">
import MarkdownIt from "markdown-it";
import MarkdownItAnchor from "markdown-it-anchor";
import MarkdownItHighlightjs from "markdown-it-highlightjs";
// @ts-ignore
import { full as emoji } from "markdown-it-emoji";

// @ts-ignore
import MarkdownItSub from "markdown-it-sub";

// @ts-ignore
import MarkdownItSup from "markdown-it-sup";

// @ts-ignore
import MarkdownItDeflist from "markdown-it-deflist";

// @ts-ignore
import MarkdownItAbbr from "markdown-it-abbr";

// @ts-ignore
import MarkdownItFootnote from "markdown-it-footnote";

// @ts-ignore
import MarkdownItIns from "markdown-it-ins";

// @ts-ignore
import MarkdownItTaskLists from "markdown-it-task-lists";

// @ts-ignore
import MarkdownItMark from "markdown-it-mark";

// markdown-it-katex-external https://www.npmjs.com/package/markdown-it-katex-external
// markdown-it-container https://www.npmjs.com/package/markdown-it-container
// markdown-it-images-preview https://www.npmjs.com/package/markdown-it-images-preview

import { markdown } from "@/store/markdown";

const markdownIt = new MarkdownIt()
  .use(MarkdownItAbbr)
  .use(MarkdownItAnchor)
  .use(MarkdownItHighlightjs)
  .use(emoji)
  .use(MarkdownItSub)
  .use(MarkdownItSup)
  .use(MarkdownItDeflist)
  .use(MarkdownItAbbr)
  .use(MarkdownItFootnote)
  .use(MarkdownItIns)
  .use(MarkdownItTaskLists)
  .use(MarkdownItMark);
</script>
