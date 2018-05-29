<template lang="pug">
  nav.MainHeader.navbar.is-dark(role='navigation', aria-label='main navigation', )
    .navbar-section
      router-link(:to='{ name: "HomePage" }',)
        | Home
      router-link(:to='{ name: "SearchPage", query: { q: "Tickets" }}', )
        | Search Results for Tickets
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
    color #fff
    margin 0 5px
    line-height 50px

</style>
