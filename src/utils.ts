import { TAGS } from "./types";

type TAG_ENTRY = {
  surround?: boolean;
  start?: boolean;
  add?: boolean;
  with?: string;
  body?: string;
};

export const TAGS_MAP: Record<TAGS, TAG_ENTRY> = {
  [TAGS.BOLD]: {
    surround: true,
    with: `**`,
  },
  [TAGS.ITALIC]: {
    surround: true,
    with: `*`,
  },
  [TAGS.UNDERLINE]: {
    surround: true,
    with: `++`,
  },
  [TAGS.STRIKETHROUGH]: {
    surround: true,
    with: `~~`,
  },
  [TAGS.HIGHLIGHT]: {
    surround: true,
    with: `==`,
  },
  [TAGS.SUBSCRIPT]: {
    surround: true,
    with: `~`,
  },
  [TAGS.SUPERSCRIPT]: {
    surround: true,
    with: `^`,
  },
  [TAGS.H1]: {
    start: true,
    with: `# `,
  },
  [TAGS.H2]: {
    start: true,
    with: `## `,
  },
  [TAGS.H3]: {
    start: true,
    with: `### `,
  },
  [TAGS.H4]: {
    start: true,
    with: `#### `,
  },
  [TAGS.H5]: {
    start: true,
    with: `##### `,
  },
  [TAGS.H6]: {
    start: true,
    with: `###### `,
  },
  [TAGS.BLOCKQUOTE]: {
    start: true,
    with: `> `,
  },
  [TAGS.LINK]: {
    add: true,
    body: `[title](https://www.example.com)`,
  },
  [TAGS.IMAGE]: {
    add: true,
    body: `![alt text](image.jpg)`,
  },
  [TAGS.TABLE]: {
    add: true,
    body: `
| Header | Header |
| ----------- | ----------- |
| Content | Content |
`,
  },
  [TAGS.FENCED_CODE_BLOCK]: {
    add: true,
    body: `
    \`\`\`language

    \`\`\``,
  },
};

export const markdownInfo =
  "# Markdown Guide\n\n> For more check out the [CheatSheet](https://www.markdownguide.org/cheat-sheet/)\n\n**bold**\n\n*italic*\n\n# h1 \n## h2 \n### h3 \n#### h4 \n##### h5 \n###### h6 \n\n++Underline++ \n\n~~Strikethrough~~\n\n==Highlight==\n\nsuper x^2^\n\nsub H~2~0\n\n\n> quote 1\n>> quote 2\n>>> quote 3\n\n[Text](https://www.example.com)\n\n![Text](https://source.unsplash.com/a-group-of-trees-standing-in-the-snow-K9I-xm7-LpA)\n\n```javascript\nconsole.log('Hello World')\n```\n\n| Header1 | Header2 | Header3 |\n| ---  | --- | ---- |\n| Content1 | Content2 | Content 3|\n\n\n";

export function replaceHighlightedText({
  markdown,
  cursorPosition,
  tag,
  highlightedText,
}: {
  markdown: string;
  cursorPosition: number;
  tag: TAGS;
  highlightedText: string;
}) {
  let tagEntry = TAGS_MAP[tag];
  let replacedText = "";

  if (tagEntry.surround) {
    replacedText = `${tagEntry.with}${highlightedText}${tagEntry.with}`;
  } else if (tagEntry.start) {
    replacedText = `${tagEntry.with}${highlightedText}`;
  }

  return (
    markdown.slice(0, cursorPosition) +
    replacedText +
    markdown.slice(cursorPosition + highlightedText.length)
  );
}

export function addTags({
  markdown,
  cursorPosition,
  tag,
}: {
  markdown: string;
  cursorPosition: number;
  tag: TAGS;
}) {
  let startContent = markdown.slice(0, cursorPosition);
  let endContent = markdown.slice(cursorPosition);
  let text = "";
  let tagEntry = TAGS_MAP[tag];
  if (tagEntry.surround) {
    text = `${tagEntry.with}${tag}${tagEntry.with}`;
  } else if (tagEntry.start) {
    text = `${tagEntry.with}${tag}`;
  } else if (tagEntry.add) {
    text = `${tagEntry.body}`;
  }

  return startContent + text + endContent;
}
