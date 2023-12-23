import { useLocalStorage } from "@vueuse/core";

export const markdown = useLocalStorage("MARKDOWN", "");
