<template>
  <div class="container">
    <h1>News Page</h1>
    <div class="single-news">
      <h1>{{ single[0].title[0].value }}</h1>
      <img :src=single[0].field_news_ct_image[0].url :alt=single[0].field_news_ct_image[0].alt>
      <p v-html=single[0].body[0].value></p>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import moment from 'moment'

  export default {
    props: ['id'],   //props from news
    data() {
      return {
        single: null,
        endpoint: 'http://vuenews.dev.loc/api/news/',
        date: null
      }
    },
    created() {
      this.getNews(this.id);   //props from news
      console.log(this.id);
    },
    computed:{

    },
    methods: {
      getNews(id) {
        axios.get(this.endpoint + id + '/?_format=json')
          .then(res => {
            this.single = res.data;
            console.log(res.data);
          });
      }
    },
    watch: {
      '$route'(){
        this.getNews(this.id);
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
