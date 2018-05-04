<template>
  <div class="navigation container">
    <nav class="news_live_main_menu">
      <ul class="menu-level1">
        <li class="menu-item1">
          <router-link :to="{ name: 'Homepage'}">Home</router-link>
        </li>
        <li class="menu-item1">
          <router-link :to="{ name: 'lifestyle'}">Lifestyle</router-link>
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
export default {
  name: 'navigation',
  data: function () {
    return {
      available: false,
      search: '',
    }
  },
  computed: {
    changeStatus: function () {
      return {
        available: this.available
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
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
