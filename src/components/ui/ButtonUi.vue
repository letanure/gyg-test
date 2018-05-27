<template lang="pug">
  component.ButtonUi(
    :class='classes',
    :href='typeHref',
    :is='tag',
    :target='typeTarget',
    :to='typeTo',
    :type='typeButton',
    )
      span.button__text(v-if='text').
        {{ text }}
      span.button__icon(v-if='icon')
        IconUi(:type='icon')
</template>

<script>
import IconUi from '@/components/ui/elements/IconUi/IconUi'

export default {
  name: 'ButtonUi',

  components: {
    IconUi,
  },

  props: {
    href: {
      default: '#',
      type: String,
      required: false,
    },

    icon: {
      default: null,
      type: String,
      required: false,
    },

    layout: {
      default: 'primary',
      type: String,
      required: false,
      validator (option) {
        const options = [
          'primary',
          'secondary',
          'outline',
          'text',
        ]
        return options.includes(option)
      },
    },

    size: {
      default: 'regular',
      type: String,
      required: false,
      validator (option) {
        const options = [
          'regular',
          'small',
          'large',
        ]
        return options.includes(option)
      },
    },

    tag: {
      default: 'a',
      type: String,
      required: false,
      validator (option) {
        const options = [
          'a',
          'button',
          'router-link',
          'span',
        ]
        return options.includes(option)
      },
    },

    target: {
      default: '_self',
      type: String,
      required: false,
      validator (option) {
        const options = [
          '_blank',
          '_parent',
          '_self',
          '_top',
        ]
        return options.includes(option)
      },
    },

    text: {
      default: null,
      type: String,
      required: false,
    },

  },

  computed: {
    classes () {
      const classes = [
        `is-${this.size}`,
        `is-${this.layout}`,
      ]
      return [...new Set(classes)]
    },

    typeButton () {
      let typeButton = false
      if (this.tag === 'button') {
        typeButton = this.tag
      }
      return typeButton
    },

    typeHref () {
      let typeHref = false
      if (this.tag === 'a') {
        typeHref = this.href
      }
      return typeHref
    },

    typeTarget () {
      let typeTarget = false
      if (this.tag === 'a') {
        typeTarget = this.target
      }
      return typeTarget
    },

    typeTo () {
      let typeTo = false
      if (this.tag === 'router-link') {
        typeTo = this.href
      }
      return typeTo
    },
  },
}
</script>

<style lang="stylus">
// .ButtonUi
</style>
