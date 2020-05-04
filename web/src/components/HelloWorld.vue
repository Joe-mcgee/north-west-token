<template>
  <v-container class="ma-0 pa-0">
    
    <v-row
      width="100%"
      style="padding-bottom:15%; padding-top:15%;"
      id="title-background"
      justify="center"
      align="center"
      class="text-center">
      <v-col
        class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          A Western Separatism Protest Cryptocurrency
        </h1>
      </v-col>
    </v-row>
    <v-carousel
      width="100%"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
        :src="require('../assets/Old-Parchment-Textures.jpg')"
        >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
            <div class="display-1 font-italic" style="width:80%; text-align: center">{{slide}}</div>
            </v-row>
      </v-carousel-item>
    </v-carousel>
    <Faucet/>
  </v-container>
</template>

<script>
  import Faucet from './Faucet'
  export default {
    components: {
      Faucet
    },
    name: 'HelloWorld',

    data: () => ({

      slides: [
       'In protest of the federalist imperialism subjected upon Western Canadians by foreign economic, ideological and political interests',
        'I hereby decree upon the Ethereum Blockchain the Token of the Northwest (TotNW). A cryptocurrency for a Strong and Free Western Canada',
        '11.09 Million units have been created and made available here for the purposes of facilitating symbolic super-sovereign economic activity.', 
        'Every person experiencing disillusionment with their representation in parliament is encouraged to take several of these from the faucet below and create symbolic transactions with like minded individuals',
        'so go ahead, sell your garden produce to your neighbour with TNW, offer to tip a good social media post, enjoy a moment of economic freedom with each other from whatever forces are driving Ottawa'

      ],

      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      newToEthereum: [
        {
          text: 'Get Connected with Metamask',
          href: 'https://metamask.io/download.html',
        },
        {
          text: 'Obtain some Ethereum from Calgary based National Digital Asset Exchange',
          href: 'https://ndax.io/',
        },
        {
          text: 'use your new eth and metamask to get TNW',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    }),
  }
</script>
<style>
#title-background {
  background-image: url('../assets/Battle_of_Fish_Creek.jpg');
  background-size: cover;
}
</style>
