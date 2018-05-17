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
          <div class="hot-cat-wraper">
            <h4>All news</h4><span class="counter">({{allPagesCounter}})</span>
          </div>
        </router-link>
        <router-link :to="{ name: 'Health'}">
          <div class="hot-cat-wraper">
            <h4>Health</h4><span class="counter">({{healthPagesCounter}})</span>
          </div>
        </router-link>
        <router-link :to="{ name: 'Travel'}">
          <div class="hot-cat-wraper">
            <h4>Travel</h4><span class="counter">({{travelPagesCounter}})</span>
          </div>
        </router-link>
        <router-link :to="{ name: 'food'}">
          <div class="hot-cat-wraper">
            <h4>Food</h4><span class="counter">({{foodPagesCounter}})</span>
          </div>
        </router-link>
      </div>
      <div class="popular-news">
        <h3>Popular News</h3>
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
      <div class="tags-counter-section">
        <h3>Tags</h3>
        <p>Google<span class="tag-counter">{{googlePagesCounter}}</span></p>
        <p>Apple <span class="tag-counter">{{applePagesCounter}}</span></p>
        <p>News <span class="tag-counter">{{newsPagesCounter}}</span></p>
        <p>Audio <span class="tag-counter">{{audioPagesCounter}}</span></p>
        <p>Computing <span class="tag-counter">{{computingPagesCounter}}</span></p>
        <p>Food <span class="tag-counter">{{foodtagPagesCounter}}</span></p>
        <p>Internet <span class="tag-counter">{{internetPagesCounter}}</span></p>
        <p>Health <span class="tag-counter">{{healthtagPagesCounter}}</span></p>
        <p>Security <span class="tag-counter">{{securityPagesCounter}}</span></p>
      </div>
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

        endTagApple:'http://vuenews.dev.loc/api/tags/apple/?_format=json',
        endTagAudio:'http://vuenews.dev.loc/api/tags/audio/?_format=json',
        endTagComputing:'http://vuenews.dev.loc/api/tags/audio/?_format=json',
        endTagFood:'http://vuenews.dev.loc/api/tags/food/?_format=json',
        endTagGoogle:'http://vuenews.dev.loc/api/tags/google/?_format=json',
        endTagHealth:'http://vuenews.dev.loc/api/tags/health/?_format=json',
        endTagInternet:'http://vuenews.dev.loc/api/tags/internet/?_format=json',
        endTagLifestyle:'',
        endTagNews:'http://vuenews.dev.loc/api/tags/news/?_format=json',
        endTagSecurity:'http://vuenews.dev.loc/api/tags/security/?_format=json',
        endTagStatus:'',
        endTagTech:'',
        endTagTravel:'',
        endTagVideo:'',

        date: null,
        allPagesCounter: 0,
        healthPagesCounter: 0,
        travelPagesCounter: 0,
        foodPagesCounter: 0,
        googlePagesCounter: 0,
        applePagesCounter: 0,
        newsPagesCounter: 0,
        audioPagesCounter: 0,
        computingPagesCounter: 0,
        healthtagPagesCounter: 0,
        foodtagPagesCounter: 0,
        internetPagesCounter: 0,
        securityPagesCounter: 0,
      }
    },
    created() {
      this.getNews();
      this.getNewsHealth();
      this.getNewsTravel();
      this.getNewsFood();
      this.getNewsGoogle();
      this.getNewsApple();
      this.getNewsNews();
      this.getNewsAudio();
      this.getNewsComputing();
      this.getNewsTagHealth();
      this.getNewsTagFood();
      this.getNewsTagInternet();
      this.getNewsSecurity();
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
      },
      getNewsGoogle() {
        axios.get(this.endTagGoogle)
          .then(res => {
            this.googlePagesCounter = res.data.length;
          });
      },
      getNewsApple() {
        axios.get(this.endTagApple)
          .then(res => {
            this.applePagesCounter = res.data.length;
          });
      },
      getNewsNews() {
        axios.get(this.endTagNews)
          .then(res => {
            this.newsPagesCounter = res.data.length;
          });
      },
      getNewsAudio() {
        axios.get(this.endTagAudio)
          .then(res => {
            this.audioPagesCounter = res.data.length;
          });
      },
      getNewsComputing() {
        axios.get(this.endTagComputing)
          .then(res => {
            this.computingPagesCounter = res.data.length;
          });
      },
      getNewsTagHealth() {
        axios.get(this.endTagHealth)
          .then(res => {
            this.healthtagPagesCounter = res.data.length;
          });
      },
      getNewsTagFood() {
        axios.get(this.endTagFood)
          .then(res => {
            this.foodtagPagesCounter = res.data.length;
          });
      },
      getNewsTagInternet() {
        axios.get(this.endTagInternet)
          .then(res => {
            this.internetPagesCounter = res.data.length;
          });
      },
      getNewsSecurity() {
        axios.get(this.endTagSecurity)
          .then(res => {
            this.securityPagesCounter = res.data.length;
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

<style scoped lang="scss">
  .footer-middle{
    padding: 35px 0;
    a{
      text-decoration: none;
      color: white;
      outline: none;
      &:hover{
        color: #007fef;
      }
    }
  }
  .trending-now, .popular-news{
    box-sizing: border-box;

    vertical-align: top;
    width: 25%;
    display: inline-block;
    margin-left: -4px;
    .tn-image-title-date{
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
          padding:0 7px;
          margin: 0;
          font-weight: normal;
          font-size: 14px;
        }
        .posted-on{
          padding:0 7px;
          font-size: 12px;
          margin-top: 4px;
          color: #a3a3a3;
          font-weight: 400;
        }
      }

    }
  }
  .hot-categories{
    box-sizing: border-box;
    padding:0 15px;
    vertical-align: top;
    width: 25%;
    display: inline-block;
    margin-left: -4px;
    h4{
      display: inline-block;
      width: 50%;
    }
    .counter{
      display: inline-block;
      margin-left: -4px;
      width: 50%;
      text-align: right;
    }
  }
  .tags-counter-section{
    box-sizing: border-box;
    vertical-align: top;
    width: 25%;
    display: inline-block;
    margin-left: -4px;
    p{
      display: inline-block;
      margin: 5px;
      color: white;
      border: 1px solid rgba(255, 255, 255, 0.1);
      font-size: 12px;
      padding: 2px 8px;
      .tag-counter{
        padding: 5px 7px;
        margin-left: 6px;
        background-color: rgba(0, 0, 0, 0.50);
        font-size: 10px;
        width: 20px;
        height: 20px;
        border-radius: 100%;
      }
    }
  }


</style>
