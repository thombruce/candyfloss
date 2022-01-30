import Web3 from 'web3'

class CandyFloss {
  constructor () {
    this.web3 = null
  }

  init (provider) {
    this.web3 = new Web3(Web3.givenProvider || provider)
  }

  async getBalance (address) {
    const wei = await this.web3.eth.getBalance(address)
    return this.web3.utils.fromWei(wei)
  }
}

export default CandyFloss
