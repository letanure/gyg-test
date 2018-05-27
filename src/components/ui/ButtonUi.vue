<template lang="pug">
  button.ButtonUi(
    :class='classes',
    :type='type',
    )
      span.button__text(v-if='text').
        {{ text }}
</template>

<script>

export default {
  name: 'ButtonUi',

  props: {

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

    text: {
      default: null,
      type: String,
      required: false,
    },

    type: {
      default: 'button',
      type: String,
      required: false,
      validator (option) {
        const options = [
          'submit',
          'button',
        ]
        return options.includes(option)
      },
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
  },
}
</script>

<style lang="stylus">
// .ButtonUi
</style>
