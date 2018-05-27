<template lang="pug">
  nav.MainHeader(role='navigation', aria-label='main navigation', )
    router-link(:to='{ name: "HomePage" }',)
      | Home
    router-link(:to='{ name: "SearchPage", query: { q: "Anything" }}', )
      | Search

</template>

<script>
export default {
  name: 'MainHeader',
}
</script>

<style lang="stylus">
.MainHeader
  border-bottom 1px solid gray
  height 50px

  a
    display inline-block

</style>
