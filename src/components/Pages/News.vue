<template>
  <div class="container">
    <h1>News Page</h1>
    <div v-for="singleNews in news">
      <router-link :to="{ name: 'singleNews', params: { id: singleNews.nid[0].value }}"><h1>{{ singleNews.title[0].value }}</h1></router-link>
      <img :src=singleNews.field_news_ct_image[0].url :alt=singleNews.field_news_ct_image[0].alt>
      <div class="posted-by">{{ singleNews.uid[0].url}} <span class="crated-on">{{ singleNews.created[0].value | toTime }}</span></div>
      <p v-html="singleNews.body[0].value"></p>
      <div class="tags-rating">
        <div class="tags"></div>
        <div class="rating"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import moment from 'moment'


  export default {
    data() {
      return {
        news: [],
        endpoint: 'http://vuenews.dev.loc/api/news/?_format=json',
        date: null
      }
    },
    created() {
      this.getNews();
    },
    computed:{

    },
    methods: {
      getNews() {
        axios.get(this.endpoint)
          .then(res => {
            this.news = res.data;
            console.log(res);
          });
      }
    },
    filters: {
      toTime(val) {
        return moment(val).format("MMM Do YY");
      }
    }
  }


</script>

<style scoped>

</style>
