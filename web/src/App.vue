<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      :src="require('./assets/borialis.jpg')"
      prominent
    >
    <v-container>
      <v-row
        justify='center'
        align='center'
        xs=12
        sm=12
        md=12
        lg=12
        xl=12>
        <v-col
          xs=1
          sm=2
          md=2
          lg=1
          xl=1>
        <v-avatar
           size="80"
          >
          <v-img
           src='./assets/magestic-bison.jpg'/>

        </v-avatar>
        </v-col>
      <v-col
        xs=11
        sm=10
        md=10
        lg=11
        xl=11>
        <v-toolbar-title v-if="windowWidth > 784"
        class="display-2"
        >The Token of the Northwest</v-toolbar-title>
        <v-toolbar-title v-else
        class="headline">
          The Token of the Northwest
        </v-toolbar-title>
      </v-col>
      </v-row>
    </v-container>


    </v-app-bar>

    <v-content>
      <HelloWorld/>
      <Faucet/>
    </v-content>

  <v-footer
    dark
  >
    <v-row
      justify="center"
    >
      <v-col
        v-for="(footer, i) in footers"
        :key="i"
      >
      <a target="_blank" :href="footer.link"><v-icon>{{footer.mdi}}</v-icon></a>
      <p>{{footer.text}}</p>
      
      </v-col>
      <v-col>
        Use however you want licence 2020
      </v-col>
    </v-row>
  </v-footer>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    windowWidth: window.innerWidth,
    footers: [
      {
        mdi: 'mdi-github',
        link: 'https://github.com/Joe-mcgee/north-west-token',
        text: 'This project is not-for-profit, opensource and needs your help!'
      }
    ]

  }),
  mounted() {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
  },
  onDestroy() {
    window.removeEventListener('resize')
  }

};
</script>
