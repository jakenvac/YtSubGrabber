export {};

declare global {
  interface Window {
    // deno-lint-ignore no-explicit-any
    ytInitialData: any;
    wrappedJSObject: Window;
  }
}
