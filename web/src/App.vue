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
    </v-content>
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
    windowWidth: window.innerWidth
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
