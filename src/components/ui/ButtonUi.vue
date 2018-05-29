<template lang="pug">
  button.ButtonUi.button(
    :class='classes',
    :type='type',
    ref='button',
    )
      span.button__text(v-if='text').
        {{ text }}
      slot
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
      default: 'default',
      type: String,
      required: false,
      validator (option) {
        const options = [
          'default',
          'green',
          'blue',
          'purple',
          'red',
          'black',
          'orange',
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
