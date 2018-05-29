<template lang="pug">
.SearchForm(@mouseleave="toggleAutocomplete(false)")
  form(role="search", @submit.prevent="handleSubmit")

    .row
      .column.is-mobile-7.is-tablet-9
        label
          span.label.
            {{ labelText }}
          input.input(
            :ariaLabel='labelText',
            :placeholder='placeholder',
            @focus='toggleAutocomplete(true)',
            autocomplete='off'
            type='search',
            v-model.trim='searchTerm',
          )
        template(v-if='showAutocomplete && allToursTitles', )
          InputAutocompleteUI(
            :list='allToursTitles',
            :hilightTerm='searchTerm',
            v-on:select='setSearchTerm',
            )

      .column.is-mobile-5.is-tablet-3
        ButtonUi(type='submit', :text='buttonText', ref='buttonComponent' )

    template(v-if='hasSuggestions')
      .row
        .column.is-mobile-12.is-tablet-9
          .suggestions-area
            h6.suggestions-title.is-size--small.
              {{ suggestionsTitle }}
            ul.suggestions-list
              template(v-for='term in mainTerms.slice(0, hintsQuantity)')
                li.suggestions-item(@click='setSearchTerm(term.key)', )
                  span.tag.
                    {{ term.key }}

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
import { mapGetters } from 'vuex'
import { ButtonUi, InputAutocompleteUI } from '@/components/ui'

export default {
  name: 'SearchForm',

  components: {
    ButtonUi,
    InputAutocompleteUI,
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

    hasSuggestions: {
      default: false,
      required: false,
      type: Boolean,
    },

    hintsQuantity: {
      default: 8,
      required: false,
      type: Number,
    },

    placeholder: {
      default: '',
      required: true,
      type: String,
    },

    queryTerm: {
      default: '',
      required: false,
      type: String,
    },

    suggestionsTitle: {
      default: 'Search for this words:',
      required: false,
      type: String,
    },
  },

  data () {
    return {
      searchTerm: '',
      showAutocomplete: false,
    }
  },

  computed: {
    ...mapGetters('search', [
      'allToursTitles',
      'mainTerms',
    ]),
  },

  mounted () {
    this.searchTerm = this.queryTerm
  },

  methods: {
    toggleAutocomplete (showAutocomplete) {
      this.showAutocomplete = showAutocomplete
    },

    handleSubmit () {
      this.$router.push({
        name: 'SearchPage',
        query: {
          q: this.searchTerm.replace(/\s/g, '-'),
        },
      })
    },

    setSearchTerm (searchTerm) {
      this.searchTerm = searchTerm
      this.$nextTick(() => {
        this.$refs.buttonComponent.$refs.button.focus()
        this.toggleAutocomplete(false)
      })
    },
  },
}
</script>

<style lang="stylus">
.SearchForm
  border 1px solid gray
  padding 20px
  +mobile()
    padding 20px 0

  .label
    display none

.suggestions

  &-area
    text-align center
    +above('tablet')
      text-align left

  &-title
    display block
    margin-bottom 8px

  &-list
    list-style none

  &-item
    display inline-block
    margin-right 4px
    cursor pointer
    margin-bottom 4px

    // +above('mobile')
</style>
