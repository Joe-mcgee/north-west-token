import * as contractData from '../assets/ERC20.json'

export async function getContract() {
  let addr = null;
  addr = process.env.VUE_APP_CONTRACT_ADDRESS
  const {abi} = contractData.default;
  return new window.web3.eth.Contract(abi, addr);
}

export async function addresses() {
  try {
    return await window.ethereum.enable();
  } catch (e) {
    return e;
  }
}
export async function getCreator() {
  const contract = await getContract()
  return await contract.methods.creator().call()
}

export async function transferFromCreator() {
  const address = await addresses()
  const contract = await getContract()
  const creator = await getCreator()
  try {
    await contract.methods.transferFrom(
      creator,
      address[0],
      window.web3.utils.toWei('1', 'ether')
    ).send({ from: address[0]})
    return true
  } catch (e) {
    return false
  }
}
