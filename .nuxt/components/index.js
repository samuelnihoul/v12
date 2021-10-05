export { default as AppBar } from '../..\\components\\global\\AppBar.vue'
export { default as Cart } from '../..\\components\\global\\Cart.vue'
export { default as MyFooter } from '../..\\components\\global\\MyFooter.vue'
export { default as Jumbotron } from '../..\\components\\Jumbotron.vue'
export { default as CardBlack } from '../..\\components\\card\\black.vue'
export { default as CardHelp } from '../..\\components\\card\\Help.vue'
export { default as CardProject } from '../..\\components\\card\\Project.vue'
export { default as GridProjects } from '../..\\components\\grid\\Projects.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
