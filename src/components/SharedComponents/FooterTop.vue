<template>
  <div class="footer">
    <div class="footer-top container">
      <div class="footer-top-logo">
        <a href="/">
          <img  src ='../../../src/assets/footer-logo.png'>
        </a>

      </div>
      <div class="footer-top-text">
        <p>Newslive a small river named Duden flows by their place and supplies it with the necessary regelialia. Throw myself down teems with vapour around me, and the meridian sun strikes.</p>
      </div>
      <div class="footer-top-icons">
        <div class="phone-number">
          <a href="tel:%2B%28785%29238-4131">+(785) 238-4131</a>
        </div>
        <div class="email">
          <a href="mailto:editor@example.com">editor@example.com</a>
        </div>
        <div class="link-icons">
          <ul class="linkicons-block">
            <li class="rss">
              <a class="linkicon-item" href="#icon">
                <span class="linkicon__icon fa fa-rss icon"></span>
              </a>
            </li>
            <li class="facebook">
              <a class="linkicon-item" href="https://www.facebook.com/">
                <span class="linkicon__icon fa fa-facebook icon"></span>
              </a>
            </li>
            <li class="twitter">
              <a class="linkicon-item" href="https://twitter.com">
                <span class="linkicon__icon fa fa-twitter icon"></span>
              </a>
            </li>
            <li class="google">
              <a class="linkicon-item" href="https://plus.google.com">
                <span class="linkicon__icon fa fa-google icon"></span>
              </a>
            </li>
            <li class="pinterest">
              <a class="linkicon-item" href="https://www.pinterest.com">
                <span class="linkicon__icon fa fa-pinterest icon"></span>
              </a>
            </li>
            <li class="dribbble">
              <a class="linkicon-item" href="https://dribbble.com">
                <span class="linkicon__icon fa fa-dribbble icon"></span>
              </a>
            </li>
            <li class="vimeo">
              <a class="linkicon-item" href="https://vimeo.com">
                <span class="linkicon__icon fa fa-vimeo icon"></span>
              </a>
            </li>
            <li class="youtube">
              <a class="linkicon-item" href="https://www.youtube.com">
                <span class="linkicon__icon fa fa-youtube icon"></span>
              </a>
            </li>
            <li class="instagram">
              <a class="linkicon-item" href="https://www.instagram.com/">
                <span class="linkicon__icon fa fa-instagram icon"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "footer-top"
    }
</script>

<style lang="scss">
  .footer-top{
    border-bottom: 1px solid #606060;
    padding: 70px 15px 60px;
    overflow: hidden;
    .footer-top-logo{
      display: inline-block;
      width: calc(100% / 4);
      vertical-align: top;
      img{
        max-width: 100%;
      }
    }
    .footer-top-text{
      display: inline-block;
      width: calc(((100% / 4)*2) - 150px);
      p{
        margin: 0;
        font-size: 13px;
        font-family: Open Sans,sans-serif;
        font-weight: normal;
      }
    }
    .footer-top-icons{
      padding-left: 20px;
      vertical-align: top;
      display: inline-block;
      width: calc((100% / 4) + 120px);
      text-align: right;
      .phone-number{
        display: inline-block;
        margin-left: -4px;
        width: calc(100% / 2);
        a{
          font-family: "Open Sans", sans-serif;
          font-weight: normal;
          font-size: 13px;
          color: white;
          text-decoration: none;
          &:before{
            content: '\f095';
            color: white;
            display: inline-block;
            font-family: 'FontAwesome';
            text-rendering: auto;
            text-align: center;
            margin-right: 5px;
          }
        }
      }
      .email{
        display: inline-block;
        margin-left: -4px;
        width: calc(100% / 2);
        a{
          font-family: "Open Sans", sans-serif;
          font-weight: normal;
          font-size: 13px;
          color: white;
          text-decoration: none;
          &:before{
            content: '\f003';
            color: white;
            display: inline-block;
            font-family: 'FontAwesome';
            text-rendering: auto;
            text-align: center;
            margin-right: 5px;
          }
        }
      }
      .link-icons{
        .linkicons-block{
          padding-left: 0;
          li{
            margin: 0 6px 6px 0;
            display: inline-block;
            background-color: #282828;
            transition: .4s ease-in-out;
            list-style-type: none;
            width: 32px;
            height: 32px;
            text-align: center;
            &:hover{
              background-color: #007fef;
            }
          }
          .linkicon-item{
            vertical-align: sub;
            color: white;
          }
        }
      }
    }
  }
</style>
