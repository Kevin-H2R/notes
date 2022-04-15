<template>
  <v-app>
    <v-main>
      <home-page/>
    </v-main>
  </v-app>
</template>

<script>
import HomePage from '@/components/HomePage'
// import HomePage from './components/HomePage.vue';
export default {
  name: 'App',

  components: {
    HomePage
  },

  data: () => ({
    //
  }),
};
</script>
