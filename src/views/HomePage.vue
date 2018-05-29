<template lang="pug">
.HomePage.container

  .row
    .column.is-mobile-12.is-desktop_s-6.has-offset-desktop_s-3
      h1.is-title.is-text-h2 Home Page

  .row
    .column.is-mobile-12.is-desktop_s-6.has-offset-desktop_s-3
      SearchForm(
        :buttonText='texts.search.buttonText',
        :hasSuggestions='true',
        :labelText='texts.search.labelText',
        :placeholder='texts.search.placeholder',
        :suggestionsTitle='texts.search.suggestionsTitle',
        )
</template>

<script>
import { SearchForm } from '@/components'

export default {
  name: 'HomePage',

  components: {
    SearchForm,
  },

  data () {
    return {
      texts: {
        search: {
          buttonText: 'Search',
          labelText: 'Search for ',
          placeholder: 'Type the city or activity',
          suggestionsTitle: 'Try this searches:',
        },
      },
    }
  },
}
</script>
