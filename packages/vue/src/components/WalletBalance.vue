<template lang='pug'>
span {{ balance }}
</template>

<script>
export default {
  props: {
    address: String
  },
  data () {
    return {
      balance: null
    }
  },
  created () {
    this.fetchBalance()
  },
  methods: {
    async fetchBalance () {
      this.balance = await this.$candyfloss.getBalance(this.address)
    }
  }
}
</script>
