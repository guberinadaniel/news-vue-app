<template>
  <div class="navigation container">
    <nav class="news_live_main_menu">
      <ul class="menu-level1">
        <li class="menu-item1">
          <router-link :to="{ name: 'Homepage'}">Home</router-link>
        </li>
        <li class="menu-item1 dropdown"
            v-on="{ mouseover: mouseActive, mouseout: mouseActive}"
            v-bind:class="{ 'on': active, 'off': !active}" >
          <router-link :to="{ name: 'lifestyle'}">Lifestyle</router-link>
          <ul class="menu-level2" v-if="mouseActive.self= true">
            <li class="sub-item menu-sub-item1"
                v-on="{ mouseover: mouseActive2, mouseout: mouseActive2}"
                v-bind:class="{ 'on2': active2, 'off2': !active2}">
              <router-link :to="{ name: 'Health'}">Health</router-link>
              <div class="images-menu-absolute">
                <div class="images-menu" v-for="singleNews in news">
                  <router-link class="health-router" :to="{ name: 'singleNews', params: { id: singleNews.nid[0].value }}">
                    <img :src=singleNews.field_news_ct_image[0].url :alt=singleNews.field_news_ct_image[0].alt>
                    <h3>{{ singleNews.title[0].value }}</h3>
                    </router-link>
                </div>
              </div>
            </li>
            <li class="sub-item menu-sub-item2"
              v-on="{ mouseover: mouseActive3, mouseout: mouseActive3}"
              v-bind:class="{ 'on2': active3, 'off2': !active3}">
              <router-link :to="{ name: 'Travel'}">Travel</router-link>
              <div class="images-menu-absolute">
                <div class="images-menu" v-for="singleNews in news2">
                  <router-link class="health-router" :to="{ name: 'singleNews', params: { id: singleNews.nid[0].value }}">
                    <img :src=singleNews.field_news_ct_image[0].url :alt=singleNews.field_news_ct_image[0].alt>
                    <h3>{{ singleNews.title[0].value }}</h3>
                  </router-link>
                </div>
              </div>
            </li>
            <li class="sub-item menu-sub-item3"
                v-on="{ mouseover: mouseActive4, mouseout: mouseActive4}"
                v-bind:class="{ 'on2': active4, 'off2': !active4}">
              <router-link :to="{ name: 'food'}">Food</router-link>
              <div class="images-menu-absolute">
                <div class="images-menu" v-for="singleNews in news3">
                  <router-link class="health-router" :to="{ name: 'singleNews', params: { id: singleNews.nid[0].value }}">
                    <img :src=singleNews.field_news_ct_image[0].url :alt=singleNews.field_news_ct_image[0].alt>
                    <h3>{{ singleNews.title[0].value }}</h3>
                  </router-link>
                </div>
              </div>
            </li>

          </ul>
        </li>
        <li class="menu-item1">
          <router-link :to="{ name: 'technology'}">Technology</router-link>
        </li>
        <li class="menu-item1">
          <router-link :to="{ name: 'video'}">Video</router-link>
        </li>
        <li class="menu-item1">
          <router-link :to="{ name: 'travel'}">Travel</router-link>
        </li>
        <li class="menu-item1">
          <router-link :to="{ name: 'features'}">Features</router-link>
        </li>
      </ul>
    </nav>
    <div class="news-live-search">
      <form action="" id="search-block-form" method="get">
        <input  v-bind:class="changeStatus" v-model="search" type="text" title="Enter the terms you wish to search for." placeholder="Search...">
      </form>
      <span v-if="available" class="searchClose" v-on:click="available = !available"></span>
      <span v-else class="searchOpen" v-on:click="available = !available"></span>
    </div>
  </div>
</template>



<script>
  import axios from 'axios'

export default {
  name: 'navigation',
  data: function () {
    return {
      endpointHealth: 'http://vuenews.dev.loc/api/news/health4/?_format=json',
      endpointTravel: 'http://vuenews.dev.loc/api/news/travel4/?_format=json',
      endpointFood: 'http://vuenews.dev.loc/api/news/food4/?_format=json',
      available: false,
      search: '',
      active: false,
      active2: false,
      active3: false,
      active4: false,
      news:[],
      news2:[],
      news3:[]
    }
  },
  created() {
    this.getNewsHealth();
    this.getNewsTravel();
    this.getNewsFood();
  },
  computed: {
    changeStatus: function () {
      return {
        available: this.available
      }
    }
  },
  methods: {
    mouseActive: function () {
      this.active = !this.active;
    },
    mouseActive2: function () {
      this.active2 = !this.active2;
    },
    mouseActive3: function () {
      this.active3 = !this.active3;
    },
    mouseActive4: function () {
      this.active4 = !this.active4;
    },
    getNewsHealth() {
      axios.get(this.endpointHealth)
        .then(res => {
          this.news = res.data;
        });
    },
    getNewsTravel() {
      axios.get(this.endpointTravel)
        .then(res => {
          this.news2 = res.data;
        });
    },
    getNewsFood() {
      axios.get(this.endpointFood)
        .then(res => {
          this.news3 = res.data;
        });
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toLowerCase() + value.slice(1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>


   .on2{
      z-index: 100;
      .images-menu-absolute{
        position: absolute;
        z-index: 1000;
        top: 20px;
        right: 20px;
        .images-menu{
          display: inline-block;
          margin-right: 0;
          vertical-align: top;
          .health-router{
            padding: 0 ;
            max-width: 200px;
            margin: 0;
            &:hover{
              opacity: 0.6;
              transition: 0.4s;
              cursor: pointer;
            }
            img{
              display: block;
              max-height: 115px;
              padding: 0;
              width: 100%;
              max-width:200px;
              min-width:200px;
            }
            h3{
              display: block;
              line-height: 24px;
              text-transform: capitalize;
              max-width:200px;
              min-width:200px;
              margin: 0;
              padding: 0;
            }
          }
        }
      }
    }



  .off2{
    .images-menu{
      display: none;
    }
  }
  .navigation {
    position: relative;
    .menu-item1{
      &.dropdown{
        &::after{
          font-family: "FontAwesome";
          content: " \f107";
          color: #fff;
          margin-left: -12px;
        }
      }
      &.on {
        .menu-level2{
          z-index: 10;
          position: absolute;
          border-top: 3px solid #007fef;
          list-style-type: none;
          display: block;
          top: 60px;
          left: 0;
          right: 0;
          background-color: #272727;
          height: 220px;
          .sub-item{
            a {
              &:hover{
                color: #007fef;
            }
            }
          }
        }
      }
      &.off {
        .menu-level2{
          display: none;
        }
      }
    }
  }
  .navigation {
    background-color: #272727;
    border-bottom: 4px solid #007fef ;
    .news_live_main_menu {
      display: inline-block;
      width: 70%;
      margin-right: -4px;
      text-align: left;
      .menu-level1 {
        list-style-type: none;
        padding: 0;
        margin: 0;
        .menu-item1 {
          color: #fff;
          display: inline-block;
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          margin: 0;
          &:hover{
            background-color: #007fef;
            outline: 0;
            transition: 0.4s;
          }
          a {
            text-decoration: none;
            display: inline-block;
            color: #fff;
            padding: 0 13px;
            line-height: 60px;
            font-size: 13px;
            font-weight: 700;
            text-transform: uppercase;
            margin: 0;
            position: relative;
            &:visited {
              color: white;
            }
          }
        }
      }
    }
    .news-live-search{
      position: relative;
      display: inline-block;
      width: 30%;
      margin-right: -4px;
      text-align: right;
      #search-block-form {
        display: inline-block;
        margin-right: 20px;
        input {
          display: none;
        }
        input.available{
          display: block;
          color: #a3a3a3;;
          background-color: black;
          border: none;
          border-left: 1px solid white;
          padding: 8px;
        }
      }
      .searchClose {
        position: absolute;
        right: 35px;
        top: 6px;
        display: inline-block;
        margin-right: -4px;
        &:after{
          content: "\f00d";
          font-family: FontAwesome;
          color: white;
        }
        &:hover {
          cursor: pointer;
        }
      }
      .searchOpen {
        position: absolute;
        right: 35px;
        top: 2px;
        display: inline-block;
        margin-right: -4px;
        &:after{
          content: "\f002";
          font-family: FontAwesome;
          color: white;
        }
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
</style>
