<template>
    <div class="join-with-us">
      <h2>Join with Us</h2>
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
  .field-item{
    margin-bottom: 20px;
    position: relative;
    height: 100%;
    color: white;
    .field-item-settings{
      padding: 15px;
      .linkicon__icon{
        background-color: rgba(0, 0, 0, 0.2);
        margin-right: 10px;
        padding: 10px;
        width: 48px;
        height: 48px;
        text-align: center;
        font-size: 24px;
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
