<template lang="pug">
  div.BaseLayout
    template()
      transition(name='slideUp', mode='out-in', appear)
        router-view.BaseLayout__header(name='header', )

    .columns()
      template()
        main.BaseLayout__column_main.column()
          transition(name='fade', mode='out-in', appear)
            router-view.section.BaseLayout__main(name='main', )
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
