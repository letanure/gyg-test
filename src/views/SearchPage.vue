<template lang="pug">
.SearchPage

  .row
    .column.is-mobile-12.is-desktop_s-6.has-offset-desktop_s-3
      h1.is-title.is-text-h2 Search results page

  .row
    .column.is-mobile-12.is-desktop_s-6.has-offset-desktop_s-3
      SearchForm(
        :buttonText='texts.search.buttonText',
        :hasSuggestions='true',
        :labelText='texts.search.labelText',
        :placeholder='texts.search.placeholder',
        :queryTerm='searchTerm',
        :suggestionsTitle='texts.search.suggestionsTitle',
        )

  .row
    .column.is-mobile-12.is-desktop_s-6.has-offset-desktop_s-3
      SearchResults(
        :queryTerm='searchTerm',
      )

</script>
</template>

<script>
import { SearchForm, SearchResults } from '@/components'

export default {
  name: 'SearchPage',

  components: {
    SearchForm,
    SearchResults,
  },

  data () {
    return {
      texts: {
        search: {
          buttonText: 'Search',
          labelText: 'Search for ',
          placeholder: 'Type the city or activity',
          suggestionsTitle: 'Try another search:',
        },
      },
    }
  },

  computed: {
    searchTerm () {
      return this.$route.query.q.replace(/-/g, ' ')
    },
  },
}
</script>
