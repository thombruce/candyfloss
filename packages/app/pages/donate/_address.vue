<template lang='pug'>
Donate(
  :displayName='displayName'
  :message='message'
  :address='address'
  :showBalance='showBalance'
  :eth='eth'
)
</template>

<script>
export default {
  layout: 'headerless',
  data () {
    return {
      displayName: this.$route.query.n,
      message: this.$route.query.m,
      address: this.$route.params.address,
      showBalance: this.$route.query.b,
      eth: this.$route.query.e || ''
    }
  }
}
</script>
