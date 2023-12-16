import './style.css'
import type { App } from 'vue'
import * as components from './components'

const createPlugin = (options?: any): any => {
  return (app: App) => {
    console.log('installing the plugin with the options(?):', options)
    // globally register directives / components / properties here
    for (const key in components) {
      app.component(key, components[key as keyof typeof components])
    }
  }
}
export * from './components'
export { createPlugin }
