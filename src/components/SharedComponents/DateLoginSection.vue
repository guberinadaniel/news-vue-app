<template>
  <div class="container">
    <div class="curent-date">{{ new Date() | toTime }}</div>
    <div class="login">

    </div>
    <div class="link-icons">
      
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

<style scoped>

</style>
