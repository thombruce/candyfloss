<template lang='pug'>
div
  button(@click='donate') Donate .005 Eth
</template>

<script>
export default {
  methods: {
    donate () {
      this.$candyfloss.donate('5000000000000000')
    }
  }
}
</script>
