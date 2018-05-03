<template>
  <div id="app">
    <app-head-logo></app-head-logo>
    <app-nav></app-nav>
    <app-breadcrumbs class="container"></app-breadcrumbs>
    <router-view />
  </div>
</template>

<script>

  import Navigation from './components/SharedComponents/Navigation';
  import HeaderLogo from './components/SharedComponents/HeaderLogo';


export default  {         //name: 'App'
  name: 'App',
  components: {
    appNav: Navigation,
    appHeadLogo: HeaderLogo
  }

}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
  .breadcrumbs-container{
    padding: 20px 0 0 0;
      li {
        font-size: 14px;
        padding-right: 10px;
        display: inline-block;
        list-style-type: none;
        &::before{
          content: "\f105";
          font-family: 'FontAwesome';
          padding: 0 8px;
          color: #ccc;
          text-align: center;
        }
        a {
          text-decoration: none;
          color: #007fef;
          &:hover{
            color: black;
          }
        }
        &:first-child {
          &::before{
            content: none;
          }
        }
        &:last-child {
          a{
            color: grey;
          }
        }
      }
  }
</style>
