<template>
  <div class="container">
    <h1>Video Page</h1>
    <div v-for="singleNews in news">
      <h1>{{ singleNews.title[0].value }}</h1>
      <img :src=singleNews.field_news_ct_image[0].url :alt=singleNews.field_news_ct_image[0].alt>
      <p></p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      news: [],
      endpoint: 'http://vuenews.dev.loc/api/news/?_format=json'
    }
  },
  created() {
    this.getNews();
  },
  methods: {
    getNews() {
      axios.get(this.endpoint)
        .then(res => {
          this.news = res.data;
          console.log(res);
        });
    }
  }
}


</script>

<style scoped>

</style>
