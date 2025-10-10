/// <reference types="vite/client" />

declare module 'get-contrast' {
  interface ContrastOptions {
    ignoreAlpha?: boolean;
  }

  interface ContrastModule {
    ratio(color1: string, color2: string, options?: ContrastOptions): number;
    score(color1: string, color2: string, options?: ContrastOptions): string;
    isAccessible(color1: string, color2: string, options?: ContrastOptions): boolean;
  }

  const contrast: ContrastModule;
  export = contrast;
}
