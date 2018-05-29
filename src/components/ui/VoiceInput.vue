<template lang="pug">
span.VoiceInput(@mouseleave="toggleAutocomplete(false)")
  ButtonUi(type='button', :text='buttonText', layout='default', @click.native='handleClick', )
    IconUi(type='microphone')
</template>

<script>
import ButtonUi from '@/components/ui/ButtonUi'
import IconUi from '@/components/ui/IconUi'

export default {
  name: 'VoiceInput',

  components: {
    ButtonUi,
    IconUi,
  },

  data () {
    return {
      recognition: null,
      active: false,
      finalTranscript: '',
      interimTranscript: '',
    }
  },

  computed: {
    buttonText () {
      return this.active ? 'Stop listening' : 'Search by voice'
    },
  },

  mounted () {
    // eslint-disable-next-line
    this.recognition = new webkitSpeechRecognition()
    this.recognition.continuous = true
    this.recognition.lang = 'en-US'
    this.recognition.interimResults = true
  },

  methods: {
    handleClick () {
      if (this.active) {
        this.stopSpeechRecognition()
      } else {
        this.startSpeechRecognition()
      }
    },

    stopSpeechRecognition () {
      this.recognition.stop()
      this.active = false
    },

    startSpeechRecognition () {
      this.recognition.start()
      this.recognition.onstart = this.onStart
      this.recognition.onresult = this.onResult
      this.recognition.onerror = this.onError
      this.recognition.onend = this.onEnd
    },

    onStart () {
      console.log('onStart')
      this.active = true
    },

    onResult (event) {
      if (typeof (event.results) === 'undefined') {
        this.recognition.onend = null
        this.recognition.stop()
        return
      }
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          this.finalTranscript += event.results[i][0].transcript
          this.$emit('speech', this.finalTranscript)
        } else {
          this.interimTranscript += event.results[i][0].transcript
        }
      }
    },

    onError (event) {
      console.log('onError', event)
    },

    onEnd () {
      console.log('onEnd')
      this.active = false
    },
  },
}
</script>

<style lang="stylus">
.VoiceInput
  .button__text
    display none
</style>
