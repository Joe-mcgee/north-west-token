<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card
          class="mx-auto"
          max-width="400"
        >
        <a target="_blank" href="https://cointelegraph.com/explained/erc-20-tokens-explained">
          <v-img
            class="black--text align-end"
            height="200px"
            src="https://en.bitcoinwiki.org/upload/en/images/thumb/4/4a/Erc20.png/400px-Erc20.png"
          >
            <v-card-title>Built with ERC-20</v-card-title>
          </v-img>
        </a>

          <v-card-subtitle class="pb-0">Using the latest contracts from OpenZeppelin</v-card-subtitle>

        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="mx-auto"
          max-width="400"
        >
        <a target="_blank" href="https://metamask.io/">
          <v-img
            class="black--text align-end"
            height="200px"
            src="https://www.ledger.com/wp-content/uploads/2019/06/assets_logo_metamask.jpg"
          >
            <v-card-title>Usable Online with Metamask</v-card-title>
          </v-img>
        </a>

          <v-card-subtitle class="pb-0">Metamask can be a wallet for your Tokens</v-card-subtitle>

        </v-card>
      </v-col>

      <v-col>
        <v-card
          class="mx-auto"
          max-width="400"
        >
        <a target="_blank" href="https://ndax.io">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://bitcoinexchangeguide.com/wp-content/uploads/2018/06/ndax.io_-696x449.jpg"
          >
          <v-card-title>Low on Gas? ETH available at NDAX</v-card-title>
          </v-img>
          </a>
          <v-card-subtitle class="pb-0">Like a car, gas is needed to run the blockhain.</v-card-subtitle>

          <v-card-text class="text--primary">
            <div>Get ETH with e-transfer at NDAX,</div>

            <div>A Calgary based exchange</div>
          </v-card-text>

        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="mx-auto"
          max-width="400"
        >
          <v-img
            class="black--text align-end"
            height="200px"
            src="https://me.eui.eu/gergo-motyovszki/wp-content/uploads/sites/226/2018/08/helicopter-1.jpg"
          >
            <v-card-title>One Touch Token Faucet</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0">Quickly get a Token by pressing a button (below)</v-card-subtitle>

          <v-card-text class="text--primary">
            <div>Limit One Per Address</div>

          </v-card-text>

        </v-card>
      </v-col>
    </v-row>
    <br/>
    <v-row
      align="center"
      justify="center">
        <v-form
          v-model="valid"
        >
          <v-btn x-large class="mr-4" @click='openFaucet'>
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
    </v-row>
  </v-container>
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
