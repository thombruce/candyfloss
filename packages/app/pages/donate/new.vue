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
      input(type='text' v-model='address')
    div
      label Default Amount
      br
      input(type='number' min='0' step='.0005' v-model='defaultEth')

    div
      button(@click='create') Create
</template>

<script>
export default {
  data () {
    return {
      displayName: '',
      message: '',
      address: '',
      defaultEth: ''
    }
  },
  methods: {
    create () {
      this.$router.push({ path: this.address, query: { n: this.displayName, m: this.message, e: this.defaultEth }})
    }
  }
}
</script>
