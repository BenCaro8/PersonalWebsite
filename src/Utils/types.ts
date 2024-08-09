export const themeColors = [
  '--primary-bg-color',
  '--secondary-bg-color',
  '--primary-accent-color',
  '--secondary-accent-color',
] as const;

type RemovePrefix<S> = S extends `--${infer T}` ? T : never;

export type ThemeColor = RemovePrefix<(typeof themeColors)[number]>;
