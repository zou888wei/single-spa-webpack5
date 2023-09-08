// 全局参数定义 ，export {};不可缺少
export {}

declare global {
  interface Window {
    singleSpaNavigate: unknown | undefined;
  }
}
