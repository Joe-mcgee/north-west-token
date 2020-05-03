<template>
  <v-form
    v-model="valid"
  >
    <v-btn class="mr-4" @click='openFaucet'>
      <v-progress-circular
        v-if="mining"
        intdeterminate
        color="amber">
      </v-progress-circular>
      <p v-if="!valid && !mining">
      Metamask not found</p>
      <p v-if="valid && !mining">Get a Token</p>
      <p v-if="!valid && !mining">Metamask not found</p>
    </v-btn>
    <v-snackbar
      :color="snackbar.color"
      v-model="snackbar.show"
      top
    >
    {{snackbar.message}}
    </v-snackbar>
  </v-form>
</template>
<script>
import * as ERC20Service from '../shared/ERC20Service'
import Web3 from 'web3'
export default {
  name: 'Faucet',
  data: () => ({
    valid: false,
    mining: false,
    snackbar: {
      show: false,
      message: null,
      colour: null,
    }
  }),
  async created() {
    let hasWeb3 = await this.addWeb3()
    if (hasWeb3) {
      this.valid = true;
    }
  },
  beforeDestroy() {
    window.removeEventListener('load', () => '', false)
  },
  methods: {
    addWeb3() {
      return new Promise((res) => { 
        window.addEventListener('load', () => {
          if (typeof web3 !== 'undefined') {
            console.log('Web3 injection browser: OK.')
            window.web3 = new Web3(window.web3.currentProvider)
            res(true)
          } else {
            console.log('Web3 injection fail: do you have metamask installed?')
            window.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
            res(false)
          }
        })
      })
    },
    async openFaucet() {
      this.mining = true
      this.$vueEventBus.$emit('faucet-opened')
      const transferFrom = await ERC20Service.transferFromCreator()
      console.log(transferFrom)
      this.$vueEventBus.$emit('facet-closed', {status: transferFrom})
      if (transferFrom) {
        this.snackbar.color = 'green'
        this.snackbar.message = 'success!'
        this.snackbar.show = true
      } else {
        this.snackbar.color = 'red'
        this.snackbar.message = 'Failed to recieve funds, have you already claimed your token?'
        this.snackbar.show = true
      }
      this.mining = false
    }
  }
}
</script>
