<template lang="pug">
  .InputAutocompleteUI.autocomplete()
    transition-group(name='list', tag='ol', ).autocomplete-list
      li.autocomplete-item(
        v-for='(item, index) in listHilighted'
        v-html='item.hilighted',
        @click='selectItem(item.original)',
        v-bind:key='index',
        )
</template>

<script>
import { levenshteinDistance } from '@/helpers/'

export default {
  name: 'InputAutocompleteUI',

  props: {

    list: {
      default: () => [],
      type: Array,
      required: true,
    },

    hilightTerm: {
      default: 'Tour',
      type: String,
      required: false,
    },

    maxItems: {
      default: 5,
      type: Number,
      required: false,
    },
  },

  computed: {
    listHilighted () {
      const words = this.hilightTerm.split(' ')
      return this.list
        .filter((item) => {
          return levenshteinDistance(item, this.hilightTerm) < item.length
        })
        .sort((itemA, itemB) => {
          return levenshteinDistance(itemA, this.hilightTerm) - levenshteinDistance(itemB, this.hilightTerm)
        })
        .splice(0, this.maxItems)
        .map((item) => {
          let hilightedItem = item
          words.forEach((word) => {
            const searchRegex = new RegExp('(' + word + ')', 'ig')
            hilightedItem = hilightedItem.replace(searchRegex, `<b class='is-fake-bold'>$1</b>`)
          })
          return {
            original: item,
            hilighted: hilightedItem,
          }
        })
    },

    classes () {
      const classes = [
        `is-${this.size}`,
        `is-${this.layout}`,
      ]
      return [...new Set(classes)]
    },
  },

  methods: {
    selectItem (text) {
      this.$emit('select', text)
    },
  },
}
</script>

<style lang="stylus">
// .InputAutocompleteUI
.list-item
  display inline-block
  margin-right 10px

.list-enter-active, .list-leave-active
  transition all .4s

.list-enter, .list-leave-to
  opacity 0
  // transform translateY(30px)
</style>
