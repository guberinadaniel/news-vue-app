<template>
  <div class="full-width">
    <div class="container">
      <div class="curent-date">{{ new Date() | toTime }}</div>
      <div class="login">

      </div>
      <div class="link-icons">

      </div>
    </div>
  </div>

</template>

<script>
  import moment from 'moment'

    export default {
      name: "date-login-section",
      data() {
        return {
          time: new Date(),
        }
      },
      filters: {
        toTime(val) {
          return moment(val).format("MMMM D, YYYY");
        }
      }
    }
</script>

<style lang="scss" scoped>
  .full-width{
    padding: 7px 15px 7px 15px;
    border-bottom: 1px solid #eaebe7;
    color: #666;
  }
  .curent-date{
    color: #666;
    font-size: 13px;
    &:before{
      content: '\f274';
      font-family: 'FontAwesome';
      text-rendering: auto;
      text-align: center;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      display: inline-block;
      margin-right: 2px;
    }
  }
</style>
