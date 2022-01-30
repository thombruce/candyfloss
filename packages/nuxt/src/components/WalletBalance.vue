<template lang='pug'>
span {{ balance }}
</template>

<script>
export default {
  props: {
    address: String,
    httpProvider: String
  },
  data () {
    return {
      balance: null
    }
  },
  mounted () {
    this.initCandyFloss()
    this.fetchBalance()
  },
  methods: {
    initCandyFloss () {
      this.$candyfloss.init(this.httpProvider)
    },
    async fetchBalance () {
      this.balance = await this.$candyfloss.getBalance(this.address)
    }
  }
}
</script>
