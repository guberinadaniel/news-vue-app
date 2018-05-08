<template>
  <div class="container">
    <div v-cloak class="layout-content">
      <h1>Lifestyles Content ---> To Be Done</h1>
    </div>
    <div class="layout-sidebar">
      <div class="sidebar">
        <app-join-us></app-join-us>
      </div>
    </div>
  </div>
</template>

<script>

  import JoinWithUs from '../../../components/SharedComponents/JoinWithUs'

  export default {
    components: {
      appJoinUs: JoinWithUs,
    },
  }


</script>

<style >

</style>
