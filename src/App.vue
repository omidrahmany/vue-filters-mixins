<template>
  <v-app>
    <v-main>
      <app-root />
    </v-main>
  </v-app>
</template>

<script>

import AppRoot from "@/components/Root";
export default {
  name: 'App',

  components: {
    AppRoot
  },

  data: () => ({
    //
  }),
};
</script>
