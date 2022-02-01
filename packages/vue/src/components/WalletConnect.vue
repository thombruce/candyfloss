<template lang='pug'>
div
  button(@click='connectWallet')
    span(v-if='connected') Connected: {{ defaultAccount }}
    span(v-else) Connect Wallet
</template>

<script>
export default {
  computed: {
    connected () {
      return this.$candyfloss.connected
    },
    defaultAccount () {
      return this.$candyfloss.eth.defaultAccount
    }
  },
  methods: {
    connectWallet () {
      this.$candyfloss.connectWallet()
    }
  }
}
</script>
