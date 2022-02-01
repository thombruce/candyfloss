<template lang='pug'>
div
  form(@submit.prevent='create()')
    RockBandFormInput.my-3(
      v-model='displayName'
      id='displayName'
      label='Name'
      placeholder='John Doe'
    )
    RockBandFormTextarea.my-3(
      v-model='message'
      id='message'
      label='Message'
      placeholder='Hello, World!'
      info='Add a short message to your donate page.'
    )
    RockBandFormInput.my-3(
      v-model='address'
      id='address'
      label='Address'
      placeholder='0x0000000000000000000000000000000000000000'
    )
    RockBandFormCheckbox.my-3(
      v-model='showBalance'
      id='showBalance'
      label='Display Balance'
      info='Show your wallet\'s current balance on the donate page.'
    )
    RockBandFormInput.my-3(
      v-model='defaultEth'
      id='defaultAmount'
      label='Default Amount'
      placeholder='0.00'
      type='number'
      min='0'
      step='any'
    )
      template(#prefix)
        RockBandSimpleIcon(icon='ethereum')

    div(v-if='previewLink')
      button.my-3(type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500")
        | Create

    div(v-if='asString')
      h3 Your Custom URL
      div {{ asString }}
</template>

<script>
export default {
  data () {
    return {
      displayName: '',
      message: '',
      address: '',
      showBalance: false,
      defaultEth: ''
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
    },
    create () {
      this.$router.push(this.previewLink)
    }
  }
}
</script>
