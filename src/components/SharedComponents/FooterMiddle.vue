<template>
  <div class="footer">
    <div class="footer-middle container">
      <div class="trending-now">
        <h3>Trending Now</h3>
        <div class="tn-image-title-date" v-for="singleNews in news">
          <router-link :to="{ name: 'singleNews', params: { id: singleNews.nid[0].value,  title: singleNews.title[0].value }}">
            <div class="footer-middle-image">
              <img  :src=singleNews.field_news_ct_image[0].url :alt=singleNews.field_news_ct_image[0].alt>
            </div>
            <div class="title-date">
              <h4>{{ singleNews.title[0].value.substr(0, 50) + "..." }}</h4>
              <div class="posted-on">{{ singleNews.created[0].value | toTime }}</div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="hot-categories">
        <h3>Hot Categories</h3>
        <router-link :to="{ name: 'News'}">
          <h4>All news <span class="counter">({{allPagesCounter}})</span></h4>
        </router-link>
        <router-link :to="{ name: 'Health'}">
          <h4>Health <span class="counter">({{healthPagesCounter}})</span></h4>
        </router-link>
        <router-link :to="{ name: 'Travel'}">
          <h4>Travel<span class="counter">({{travelPagesCounter}})</span></h4>
        </router-link>
        <router-link :to="{ name: 'food'}">
          <h4>Food <span class="counter">({{foodPagesCounter}})</span></h4>
        </router-link>
      </div>
      <div class="popular-news"></div>
      <div class="tags-counter-section"></div>
    </div>
  </div>
</template>

<script>

  import axios from 'axios'
  import moment from 'moment'

  export default {
    name: "footer-middle",
    data() {
      return {
        loading: true,
        news: [],
        endpoint: 'http://vuenews.dev.loc/api/news/?_format=json',
        endpointHealth: 'http://vuenews.dev.loc/api/news/health/?_format=json',
        endpointTravel: 'http://vuenews.dev.loc/api/news/travel/?_format=json',
        endpointFood: 'http://vuenews.dev.loc/api/news/food/?_format=json',
        date: null,
        allPagesCounter: 0,
        healthPagesCounter: 0,
        travelPagesCounter: 0,
        foodPagesCounter: 0,
      }
    },
    created() {
      this.getNews();
      this.getNewsHealth();
      this.getNewsTravel();
      this.getNewsFood();
    },
    methods: {
      getNews() {
        axios.get(this.endpoint)
          .then(res => {
            this.news = res.data.slice(Math.max(res.data.length - 3, 0));
            this.allPagesCounter = res.data.length;
          });
      },
      getNewsHealth() {
        axios.get(this.endpointHealth)
          .then(res => {
            this.healthPagesCounter = res.data.length;
          });
      },
      getNewsTravel() {
        axios.get(this.endpointTravel)
          .then(res => {
            this.travelPagesCounter = res.data.length;
          });
      },
      getNewsFood() {
        axios.get(this.endpointFood)
          .then(res => {
            this.foodPagesCounter = res.data.length;
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

<style scoped lang="scss">
  .footer-middle{
    padding: 35px 0;
    a{
      text-decoration: none;
      color: white;
      &:hover{
        color: #007fef;
      }
    }
  }
  .trending-now{
    .tn-image-title-date{
      max-width: 25%;
      padding: 8px 0;
      .footer-middle-image{
        display: inline-block;
        img{
          width: 90px;
          height: 70px;
        }
      }
      .title-date{
        vertical-align: top;
        display: inline-block;
        margin-left: -4px;
        max-width: 200px;
        width: 100%;
        h4{
          padding-left: 15px;
          margin: 0;
          font-weight: normal;
          font-size: 14px;
        }
        .posted-on{
          padding-left: 15px;
          font-size: 12px;
          margin-top: 4px;
          color: #a3a3a3;
          font-weight: 400;
        }
      }

    }
  }
  .hot-categories{
    h4{
      .counter{
        padding-left: 100px;
      }
    }
  }


</style>
