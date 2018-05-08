<template>
  <div id="app">
    <app-Date></app-Date>
    <app-head-logo></app-head-logo>
    <app-nav></app-nav>
    <app-breadcrumbs class="container"></app-breadcrumbs>
    <router-view />
    <app-footer-top></app-footer-top>
    <app-footer-bottom></app-footer-bottom>
  </div>
</template>

<script>
  import DateLogin from './components/SharedComponents/DateLoginSection';
  import Navigation from './components/SharedComponents/Navigation';
  import HeaderLogo from './components/SharedComponents/HeaderLogo';
  import FooterTop from './components/SharedComponents/FooterTop';
  import FooterBottom from './components/SharedComponents/FooterBottom';

export default  {         //name: 'App'
  name: 'App',
  components: {
    appDate: DateLogin,
    appNav: Navigation,
    appHeadLogo: HeaderLogo,
    appFooterTop: FooterTop,
    appFooterBottom: FooterBottom
  }

}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

//%%%%%%%%% LAYOUT %%%%%%%%%
body{
  margin: 0;
}
.container{
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
}
.layout-content{
  width: calc((100% / 3)*2);
  display: inline-block;
  img{
    max-width: 100%;
    width: 100%;
  }
}
.layout-sidebar{
  margin-left: -4px;
  width: calc(100% / 3);
  display: inline-block;
  vertical-align: top;
}
.sidebar{
  padding-left: 25px;
}
.single-news{
  padding-right: 25px;
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
.footer{
  background-color: #191a1d;
  color: white;
}
//%%%%%%%%% FONTS %%%%%%%%%
  h1{
    font-size: 29px;
    margin: 15px 0;
  }
  body{
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    color: #333;
    font-size: 14px;
    line-height: 24px;
  }
//%%%%%%%%% COMPONENTS %%%%%%%%%
  blockquote{
    position: relative;
    background: #f7f7f7;
    padding: 45px 50px 30px;
    border: 0;
    margin: 40px 0;
    text-align: center;
    &:before{
      font-family: 'FontAwesome';
      text-rendering: auto;
      text-align: center;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      position: absolute;
      content: '\f10e';
      font-size: 24px;
      padding: 8px 15px;
      top: 5px;
      left: 50%;
      margin-left: -44px;
      color: #007fef;
    }
  }
</style>
