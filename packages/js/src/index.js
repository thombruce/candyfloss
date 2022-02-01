const Web3 = require('web3')

class CandyFloss extends Web3 {
  constructor (options) {
    super(Web3.givenProvider || options.provider)

    this.address = options.address

    this.connected = false
    this.accounts = []

    this.getAccounts()
  }

  async getBalance (address) {
    const wei = await this.eth.getBalance(address)
    return this.utils.fromWei(wei)
  }

  donate (value) {
    this.connectWallet(
      () => { this.sendTransaction(value) }
    )
  }

  connectWallet (callback) {
    this.eth.requestAccounts().then(
      (accounts) => {
        this.accounts = accounts
        this.eth.defaultAccount = accounts[0]
        if (this.accounts.length) this.connected = true
      }
    ).then(
      () => { callback() }
    )
  }

  sendTransaction (value) {
    this.eth.sendTransaction({
      to: this.address,
      value: value
    })
    .then((receipt) => {})
  }

  getAccounts () {
    this.eth.getAccounts().then(
      (accounts) => {
        this.accounts = accounts
        this.eth.defaultAccount = accounts[0]
        if (this.accounts.length) this.connected = true
      }
    )
  }
}

module.exports = CandyFloss
