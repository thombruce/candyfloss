<template lang='pug'>
div
  form
    div
      label Name
      br
      input(type='text' v-model='displayName')
    div
      label Message
      br
      textarea(v-model='message')
    div
      label Address
      br
      input(type='text' v-model='address' required)
    div
      label Display Balance
      br
      input(type='checkbox' v-model='showBalance')
    div
      label Default Amount
      br
      input(type='number' min='0' step='.0005' v-model='defaultEth')

    div(v-if='previewLink')
      NuxtLink(:to='previewLink') Create

    div(v-if='asString')
      h3 Your Custom URL
      div {{ asString }}
</template>

<script>
export default {
  data () {
    return {
      displayName: null,
      message: null,
      address: null,
      showBalance: false,
      defaultEth: null
    }
  },
  computed: {
    previewLink () {
      let query = {}
      if (this.displayName) query.n = this.displayName
      if (this.message) query.m = this.message
      if (this.showBalance) query.b = 1
      if (this.defaultEth) query.e = this.defaultEth
      
      if (this.address) return { name: 'donate-address', params: { address: this.address }, query: query }
    },
    asString () {
      if (this.previewLink) return process.env.baseUrl + this.$router.resolve(this.previewLink).href
    }
  }
}
</script>
