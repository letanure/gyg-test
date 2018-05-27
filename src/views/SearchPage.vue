<template lang="pug">
.SearchPage

  SearchForm(
    :buttonText='texts.search.buttonText',
    :labelText='texts.search.labelText',
    :placeholder='texts.search.placeholder',
    )

</script>
</template>

<script>
import { SearchForm } from '@/components'

export default {
  name: 'SearchPage',

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
        },
      },
    }
  },
}
</script>
