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

  donate (from = this.eth.defaultAccount, to = this.address, value) {
    this.connectWallet(
      () => { this.sendTransaction(from, to, value) }
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

  sendTransaction (from = this.eth.defaultAccount, to = this.address, value) {
    this.eth.sendTransaction({
      from: from,
      to: to,
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
