<template>
  <div class="container">
    <div class="layout-content">
      <div class="single-news content">
        <h1>{{ single[0].title[0].value }}</h1>
        <div class="posted-by">{{ single[0].uid[0].url}} <span class="crated-on">{{ single[0].created[0].value | toTime }}</span></div>
        <img :src=single[0].field_news_ct_image[0].url :alt=single[0].field_news_ct_image[0].alt>
        <p v-html=single[0].body[0].value></p>
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

  import JoinWithUs from '../../components/SharedComponents/JoinWithUs'

  export default {
    props: ['id'],   //props from news
    components: {
      appJoinUs: JoinWithUs,
    },
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
        return moment(val).format("MMMM D, YYYY");
      }
    }
  }


</script>

<style lang="scss">
  .single-news{
    padding-right: 25px;
  }
  .sidebar{
    padding-left: 25px;
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
