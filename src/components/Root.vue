<template>
  <v-container>
    <v-card flat class="py-4 px-4" style="text-align: center">
      <v-row>
        <v-col cols="12">
          <h2> Filters & Mixins</h2>
          <hr>
          <p>{{ text | toUppercase | toLowercase }}</p>

          <v-text-field v-model="filteredText" label="filter" outlined class="pt-3"></v-text-field>
          <ul>
            <!--            <li v-for="(fruit,index) in fruits | filteredArray2" :key="index">{{ fruit }}</li>-->
            <li v-for="(fruit,index) in filteredArray" :key="index">{{ fruit }}</li>
          </ul>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import {fruitMixin} from "@/assets/mixins/fruitMixin"

export default {
  name: "appRoot",
  data: () => {
    return {
      text: "HELLO there!",
    }
  },
  mixins: [fruitMixin],
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    },
  },
}
</script>

<style scoped>

</style>
