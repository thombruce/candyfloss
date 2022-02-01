<template lang='pug'>
div
  button(@click='donate') Donate {{ value }} Eth
</template>

<script>
export default {
  props: [
    'to',
    'value'
  ],
  computed: {
    wei () {
      return this.$candyfloss.utils.toWei(this.value)
    }
  },
  methods: {
    donate () {
      this.$candyfloss.donate(null, this.to, this.wei)
    }
  }
}
</script>
