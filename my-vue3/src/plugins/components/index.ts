
import { defineAsyncComponent } from 'vue'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Test = defineAsyncComponent(() => import('my_components_vue3/VTest'))

export const plugins = {
  install(app: { component: (arg0: string, arg1: unknown) => void }) {
    app.component('VTest', Test)
  }
}
