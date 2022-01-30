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
      web3: null,
      wei: null
    }
  },
  computed: {
    balance () {
      if (this.wei) return this.web3.utils.fromWei(this.wei)
    }
  },
  mounted () {
    this.initWeb3()
    this.fetchBalance()
  },
  methods: {
    initWeb3 () {
      this.web3 = new this.$Web3(this.$Web3.givenProvider || this.httpProvider)
    },
    async fetchBalance () {
      this.wei = await this.web3.eth.getBalance(this.address)
    }
  }
}
</script>
