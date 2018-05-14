<template>
  <div class="container">
    <div class="container">
      <div v-cloak class="layout-content">
        <div class="wraper-news-pages single-news" v-for="singleNews in news">
          <router-link :to="{ name: 'singleNews', params: { id: singleNews.nid[0].value, title: singleNews.title[0].value }}"><h1>{{ singleNews.title[0].value }}</h1></router-link>
          <div class="posted-by">{{ singleNews.uid[0].url}} <span class="crated-on">{{ singleNews.created[0].value | toTime }}</span></div>
          <img :src=singleNews.field_news_ct_image[0].url :alt=singleNews.field_news_ct_image[0].alt>
          <p v-html="singleNews.body[0].value"></p>
          <div class="tags-rating">
            <div class="tags"></div>
            <div class="rating"></div>
          </div>
        </div>
      </div>
      <div class="layout-sidebar">
        <div class="sidebar">
          <app-join-us></app-join-us>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import axios from 'axios'
  import moment from 'moment'

  import JoinWithUs from '../../../components/SharedComponents/JoinWithUs'

  export default {
    name: "Travel",
    components: {
      appJoinUs: JoinWithUs,
    },
    data() {
      return {
        loading: true,
        news: [],
        endpoint: 'http://vuenews.dev.loc/api/news/travel/?_format=json',
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
            this.loading = false;
          });
      }
    },
    filters: {
      toTime(val) {
        return moment(val).format("MMMM D, YYYY");
      }
    }
  }
</script>

<style lang="scss">
  .wraper-news-pages{
    a{
      text-decoration: none;
      color: #333;
      &:hover{
        color: #007fef;
      }
    }
  }
</style>
