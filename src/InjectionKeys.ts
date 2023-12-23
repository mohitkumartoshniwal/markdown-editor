import type { InjectionKey, Ref } from "vue";

export const CURSOR_POSITION = Symbol() as InjectionKey<Ref<number>>;
