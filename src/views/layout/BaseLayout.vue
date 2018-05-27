<template lang="pug">
  div.BaseLayout
    template()
      transition(name='slideUp', mode='out-in', appear)
        router-view.BaseLayout-header(name='header', )

      template()
        main.BaseLayout__column_main.column()
          transition(name='fade', mode='out-in', appear)
            router-view.BaseLayout-main(name='main', )
</template>

<script>
export default {
  name: 'BaseLayout',
}
</script>

<style lang="stylus">
// .BaseLayout

.slideUp-enter-active, .slideUp-leave-active
  transition transform .3s linear
.slideUp-enter, .slideUp-leave-to
  transform translate(0, -60px)

.fade-enter-active, .fade-leave-active
  transition opacity .1s linear
.fade-enter, .fade-leave-to
  opacity 0
</style>
