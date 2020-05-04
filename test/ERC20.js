const ERC20 = artifacts.require("ERC20")
const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:9545'))
contract("ERC20", async (accounts) => {
  let instance
  
  beforeEach("setup contract for each test", async () => {
    instance =await ERC20.deployed(accounts[0])
  })

  it("should return name", async () => {
    let name = await instance.name.call();
    assert.equal("Token of the Northwest", name)
  })

  it("should mint 11 million tokens to me", async () => {
    let totalSupply = await instance.totalSupply.call()
    assert.equal(web3.utils.fromWei(totalSupply), 11090000)
  })

  it("a user should be able to grab a token from creator", async () => {
    let transferFrom = await instance.transferFrom.sendTransaction(
      accounts[0],
      accounts[1],
      web3.utils.toWei('1', 'ether'),
      { from: accounts[1] }
    )
    let balanceOne = await instance.balanceOf.call(accounts[1])
    console.log(web3.utils.fromWei(balanceOne), 1)
  })

  it("the same address cannot grab another token", async () => {
    try {

      let transferFrom = await instance.transferFrom.sendTransaction(
        accounts[0],
        accounts[1],
        web3.utils.toWei('1', 'ether'),
        { from: accounts[1] }
      )

      assert.fail('no error occured')
    } catch (e) {
    }
  })

  it('should stop the creator from transfering tokens', async () => {
    try {

      let transfer = await instance.transferFrom.sendTransaction(
        accounts[0],
        accounts[2],
        web3.utils.toWei('2', 'ether'),
        {from: accounts[0]}
      )
      assert.fail('no error occured')
    } catch (e) {

    }
  })


})
