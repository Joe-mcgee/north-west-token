<template>
  <v-container class="ma-0 pa-0">
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
    <v-row class="text-center">

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          A Western Separation Protest Cryptocurrency
        </h1>

      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          New to Ethereum?
        </h2>

        <v-row justify="center">
          <a
            v-for="(next, i) in newToEthereum"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Western Separatism Links
        </h2>

        <v-row justify="center">
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          About
        </h2>

        <v-row justify="center">
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({

      slides: [
       'In protest of the federalist imperialism subjected upon Western Canadians by foreign economic, ideological and political interests',
        'I hereby decree upon the Ethereum Blockchain the Token of the Northwest (TNW). A cryptocurrency for a strong and free Western Canada',
        '11.09 Million units have been created and made available here for the purposes of facilitating symbolic super-soveriegn economic activity.', 
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
