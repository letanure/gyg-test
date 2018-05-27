<template lang="pug">
.SearchForm
  form(role="search", )

    label
      span.
        {{ labelText }}

      input(type='search', :ariaLabel='labelText', :placeholder='placeholder', )

    ButtonUi(type='submit', :text='buttonText', )

  script(type='application/ld+json').
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      "url": "https://www.example.com/",
      "potentialAction": [
        {
          "@type": "SearchAction",
          "target": "https://query.example.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      ]
    }
</template>

<script>
import { ButtonUi } from '@/components/ui'


export default {
  name: 'SearchForm',

  components: {
    ButtonUi,
  },

  props: {
    buttonText: {
      default: 'Search',
      required: true,
      type: String,
    },

    labelText: {
      default: '',
      required: true,
      type: String,
    },

    placeholder: {
      default: '',
      required: true,
      type: String,
    },

  }
}
</script>

<style lang="stylus">
// .SearchForm
</style>
