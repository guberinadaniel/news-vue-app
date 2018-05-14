<template>
  <div class="container">
    <div class="layout-content">
      <div class="single-news content">
        <div class="taxonomy-term">{{ single2[0].field_news_ct_taxonomy_terms }}</div>
        <!--{{single2[0].field_news_ct_taxonomy_terms = "Health"}}-->
        <!--{{single2[0].field_news_ct_taxonomy_terms = "Travel"}}-->
        <!--{{single2[0].field_news_ct_taxonomy_terms = "Food"}}-->
        <h1>{{ single[0].title[0].value }}</h1>
        <div class="posted-by">{{ single2[0].uid}} <span class="crated-on">{{ single[0].created[0].value | toTime }}</span></div>
        <img :src=single[0].field_news_ct_image[0].url :alt=single[0].field_news_ct_image[0].alt>
        <p v-html=single[0].body[0].value></p>
        <div class="tags-rating">
          <div class="tags"><span class="tags-span">Tags: </span><span class="tag-span">{{single2[0].field_tagss}}</span></div>
          <div class="rating">
            <span class="rating-span">Rating: </span>
            <star-rating v-model="rating"
                         v-bind:max-rating="5"
                         inactive-color="#D3D3D3"
                         active-color="#D7D43F"
                         text-class="hidden"
                         v-bind:star-size="15">
            </star-rating>
          </div>
        </div>
      </div>
    </div>
    <div class="layout-sidebar">
      <div class="sidebar">
        <app-join-us></app-join-us>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import moment from 'moment'
  import StarRating from 'vue-star-rating'

  import JoinWithUs from '../../components/SharedComponents/JoinWithUs'

  export default {
    props: ['id'],   //props from news
    components: {
      appJoinUs: JoinWithUs,
      StarRating
    },
    data() {
      return {
        single: null,
        single2: null,
        endpoint: 'http://vuenews.dev.loc/api/news/',
        endpoint2: 'http://vuenews.dev.loc/api/news2/',
        date: null,
        rating: '',
      }
    },
    created() {
      this.getNews(this.id);
      this.getNews2(this.id);//props from news
      // console.log(this.id);
    },
    computed:{

    },
    methods: {
      getNews(id) {
        axios.get(this.endpoint + id + '/?_format=json')
          .then(res => {
            this.single = res.data;
            this.rating = res.data[0].field_news_ct_rating[0].rating;
            if (this.rating === 20) {
              this.rating = 1;
            } else if (this.rating === 40) {
              this.rating = 2;
            } else if (this.rating === 60) {
              this.rating = 3;
            } else if (this.rating === 80) {
              this.rating = 4;
            } else if (this.rating === 100) {
              this.rating = 5;
            }

            console.log(res.data[0].field_news_ct_rating[0].rating);
          });
      },
      getNews2(id) {
        axios.get(this.endpoint2 + id + '/?_format=json')
          .then(res => {
            this.single2 = res.data;
            // console.log(res.data);
          });
      }
    },
    watch: {
      '$route'(){
        this.getNews(this.id);
        this.getNews2(this.id);
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
  .taxonomy-term{
    display: inline-block;
    font-size: 10px;
    background-color: #007fef;
    color: white;
    padding: 0 8px;
    text-transform: uppercase;
    margin: 16px 0;
    line-height: 20px;
    font-family: Open Sans,sans-serif;
  }
  .tags-rating{
    padding: 20px 0;
    .tags{
      display: inline-block;
      width: 50%;
      .tags-span{
        font-weight: bold;
        background-color: black;
        color: white;
        padding: 5px;
        margin-right: 5px;
      }
      .tag-span{
        padding: 2px 6px;
        border: 1px solid #D3D3D3;
      }


    }
    .rating{
      display: inline-block;
      width: 50%;
      margin-left: -4px;
      text-align: right;
      span{
        font-weight: bold;
      }
      .vue-star-rating{
        display: inline-block;
      }
    }
  }
  .hidden {
    display: none;
  }
  .posted-by{
    margin-bottom: 15px;
    font-size: 12px;
    text-transform: capitalize;
    .crated-on{
      color: #a3a3a3;
      &:before{
        content: '\f017';
        font-family: 'FontAwesome';
        text-rendering: auto;
        text-align: center;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin-right: 5px;
        margin-left: 5px;
      }
    }
  }

</style>

