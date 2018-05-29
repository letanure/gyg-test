<template lang="pug">
.SearchResults(@mouseleave="toggleAutocomplete(false)")
  .row
    .column
      h2
        span Your searched for !{' '}
        b.is-bold {{ queryTerm }} !{' '}
        span and we found !{' '}
        b.is-bold {{ toursList.length }} !{' '}
        span results:
  .row
    .column.is-mobile-12
      ol.list-tours
        li.list-tours--item
          .row.tour-card
            .column.is-mobile-10.tour-card--title()
            .column.is-mobile-1.tour-card--price.
              Price
            .column.is-mobile-1.tour-card--rating.
              Rating
        template(v-for='tour in toursList', )
          li.list-tours--item
            .row.tour-card(:class='{"is-hilight": tour.isSpecialOffer}')
              .column.is-mobile-10.tour-card--title(v-html='tour.hilighted').
              .column.is-mobile-1.tour-card--price.
                {{ tour.currency }} {{ tour.price }}
              .column.is-mobile-1.tour-card--rating.
                {{ tour.rating }}
</template>

<script>
export default {
  name: 'SearchResults',

  components: {
  },

  props: {
    queryTerm: {
      default: '',
      required: false,
      type: String,
    },
  },

  computed: {
    toursList () {
      return this.$store.getters['search/search'](this.queryTerm)
    },
  },

  methods: {
    toggleAutocomplete (showAutocomplete) {
      this.showAutocomplete = showAutocomplete
    },
  },
}
</script>

<style lang="stylus">
// .SearchResults
.list-tours
  display block

  &--item
    display block

</style>
