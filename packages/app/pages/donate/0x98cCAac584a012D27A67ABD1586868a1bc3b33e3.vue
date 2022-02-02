<template lang='pug'>
div
  Donate(
    :address='address'
    :displayName='displayName'
    :message='message'
    :showBalance='showBalance'
    :eth='eth'
  )
</template>

<script>
export default {
  layout: 'headerless',
  data () {
    return {
      displayName: 'Thom Bruce',
      message: 'Hi, I\'m Thom. I\'m a freelance software developer currently tinkering with Web3 (I made this website!) Your donation could help me explore the space more and do even better things with Ethereum in the future!',
      address: '0x98cCAac584a012D27A67ABD1586868a1bc3b33e3',
      showBalance: true,
      eth: '0.005'
    }
  }
}
</script>
