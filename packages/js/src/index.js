const Web3 = require('web3')

class CandyFloss extends Web3 {
  constructor (provider) {
    super(Web3.givenProvider || provider)
  }

  async getBalance (address) {
    const wei = await this.eth.getBalance(address)
    return this.utils.fromWei(wei)
  }
}

module.exports = CandyFloss
