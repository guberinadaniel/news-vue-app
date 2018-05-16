<template>
  <div class="container">
    <div class="container">
      <div v-cloak class="layout-content">
        <h1 class="health">Health <span class="pages-counter">({{pagesCounter}} items)</span></h1>
        <div class="wraper-news-pages single-news" v-for="singleNews in news">
          <router-link :to="{ name: 'singleNews', params: { id: singleNews.nid[0].value,  title: singleNews.title[0].value }}">
          <div class="summary-health">
            <div class="summary-image-wraper">
              <img class="summary-img" :src=singleNews.field_news_ct_image[0].url :alt=singleNews.field_news_ct_image[0].alt>
            </div>
            <div class="summary-body-wraper">
              <h2>{{ singleNews.title[0].value }}</h2>
              <div class="posted-by">{{ singleNews.uid[0].url}} <span class="crated-on">{{ singleNews.created[0].value | toTime }}</span></div>
              <p v-html="bodyTextTrimed" ></p>
            </div>
          </div>
          </router-link>
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
      name: "health",
      components: {
        appJoinUs: JoinWithUs,
      },
      data() {
        return {
          loading: true,
          news: [],
          endpoint: 'http://vuenews.dev.loc/api/news/health/?_format=json',
          date: null,
          bodyTextTrimed:'',
          pagesCounter:'',
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
              this.bodyTextTrimed = res.data[0].body[0].value.substr(0, 150) + '...';
              this.pagesCounter = res.data.length;
            });
        },
      },
      filters: {
        toTime(val) {
          return moment(val).format("MMMM D, YYYY");
        }
      }
    }
</script>

<style lang="scss">
  .health{
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
    position: relative;
    font-size: 30px;
    padding-bottom: 13px;
    margin-top: 24px;
    margin-bottom: 40px;
    border-radius: 3px;
    font-weight: 500;
    font-family: Roboto,sans-serif;
    &:before{
      content: '';
      position: absolute;
      background-color: #1c1c1c;
      width: 80px;
      height: 2px;
      left: 0;
      bottom: -2px;
    }
    &:after{
      position: absolute;
      content: " ";
      width: auto;
      height: auto;
      bottom: -13px;
      left: 15px;
      border-width: 6px;
      border-style: solid;
      border-color: #1c1c1c transparent transparent transparent;
    }
    .pages-counter{
      font-size: 20px;
      color: gray;
    }
  }
  .summary-health{
    margin: 20px 0;
    .summary-image-wraper{
      display: inline-block;
      width: 40%;
      .summary-img{
        max-height: 175px;
        max-width: 300px;
        width: 100%;
      }
    }
    .summary-body-wraper{
      display: inline-block;
      width: 55%;
      margin-left: -4px;
      vertical-align: top;
      padding-left: 20px;
      h2{
        margin: 5px 0;
      }
      p{
        margin-top: 15px;
      }
    }
  }
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
