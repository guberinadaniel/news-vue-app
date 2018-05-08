<template>
    <div class="join-with-us">
      <h2 class="join-us">Join with Us</h2>
      <div class="link-icons-sidebar">
        <div class="field-item rss">
          <div class="field-item-settings">
            <a href="#icon">
              <span class="linkicon__icon fa fa-rss icon"></span>
              <div class="linkicon-text">
                <div class="rss">RSS</div>
                <div class="like">Subscribe on News</div>
              </div>
            </a>
          </div>
        </div>
        <div class="field-item facebook">
          <div class="field-item-settings">
            <a href="https://www.twitter.com">
              <span class="linkicon__icon fa fa-facebook icon"></span>
              <div class="linkicon-text">
                <div class="facebook">Facebook</div>
                <div class="like">Like us on Facebook</div>
              </div>
            </a>
          </div>
        </div>
        <div class="field-item twitter">
          <div class="field-item-settings">
            <a href="https://www.twitter.com">
              <span class="linkicon__icon fa fa-twitter icon"></span>
              <div class="linkicon-text">
                <div class="twitter">Twitter</div>
                <div class="like">Like us on Twitter</div>
              </div>
            </a>
          </div>
        </div>
        <div class="field-item google">
          <div class="field-item-settings">
            <a href="https://www.google.com">
              <span class="linkicon__icon fa fa-google icon"></span>
              <div class="linkicon-text">
                <div class="google">Google</div>
                <div class="like">Like us on Google</div>
              </div>
            </a>
          </div>
        </div>
        <div class="field-item youtube">
          <div class="field-item-settings">
            <a href="https://www.youtube.com">
              <span class="linkicon__icon fa fa-youtube icon"></span>
              <div class="linkicon-text">
                <div class="youtube">Youtube</div>
                <div class="like">Like us on Youtube</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "join-with-us"
    }
</script>

<style lang="scss">
  .join-us{
    position: relative;
    line-height: 38px;
    padding: 0;
    margin: 2px 0 38px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
    &::before{
      content: '';
      position: absolute;
      background: #1c1c1c;
      width: 80px;
      height: 2px;
      left: 0;
      bottom: -2px;
    }
    &::after{
      position: absolute;
      content: " ";
      width: auto;
      height: auto;
      bottom: -13px;
      left: 15px;
      border-width: 6px;
      border-style: solid;
      border-color: #1c1c1c transparent transparent transparent;
    }
  }
  .field-item{
    margin-bottom: 20px;
    position: relative;
    height: 100%;
    color: white;
    .field-item-settings{
      padding: 12px;
      a{
        text-decoration: none;
        color: white;
      }
      .linkicon__icon{
        display: inline-block;
        background-color: rgba(0, 0, 0, 0.2);
        margin-right: 10px;
        padding: 10px;
        width: 28px;
        height: 28px;
        text-align: center;
        font-size: 24px;
      }
      .linkicon-text{
        display: inline-block;
        vertical-align: bottom;
      }
    }
  }
  .rss{
    background-color: #FA9B39;
  }
  .facebook{
    background-color: #3B5998;
  }
  .twitter{
    background-color: #00aced;
  }
  .google{
    background-color: #c53942;
  }
  .youtube{
    background-color: #dd4b39;
  }
</style>
