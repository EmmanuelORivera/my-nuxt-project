export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('focus', {
    mounted(el) {
      el.focus()
    },
    getSSRProps(binding, vnode) {
      return {}
    },
  })
  return {
    provide: {
      sayHello: (msg: string) => `Hello ${msg}`,
    },
  }
})
