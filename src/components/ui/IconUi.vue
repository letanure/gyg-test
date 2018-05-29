<template lang="pug">
  span.IconUi.icon
    i.fa(:class='classes')
</template>

<script>
export default {
  name: 'IconUi',
  props: {
    color: {
      default: 'default',
      type: String,
      required: false,
      validator (option) {
        const options = [
          'default',
          'white',
          'black',
          'light',
          'dark',
          'primary',
          'info',
          'success',
          'warning',
          'danger',
          'black-bis',
          'black-ter',
          'grey-darker',
          'grey-dark',
          'grey',
          'grey-light',
          'grey-lighter',
          'white-ter',
          'white-bis',
        ]
        return options.includes(option)
      },
    },

    type: {
      default: '',
      type: String,
      required: true,
    },

    size: {
      default: 'default',
      type: String,
      required: false,
      validator (option) {
        const options = [
          'default',
          'large',
          'medium',
          'small',
        ]
        return options.includes(option)
      },
    },
  },
  computed: {
    classes () {
      const classes = [`is-${this.size}`, `has-text-${this.color}`, `fa-${this.type}`]
      return [...new Set(classes)]
    },
  },
}
</script>

<style lang="stylus">
// .IconUi
</style>
