/// <reference types="vite/client" />

declare module '~build/time' {
  export const getTime: number;
}

declare const BUILD_TIME: number