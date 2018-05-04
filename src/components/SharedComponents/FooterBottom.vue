<template>
  <div class="footer">
    <div class="footer-bottom">
      <div class="copyright-links container">
        <div class="copyright">
          <p>© 2017 Newslive. All Rights Reserved. Replicated in Vue2&Drupal8 by Daniel</p>
        </div>
        <div class="footer-links">
          <nav id="nav-footer-bottom">
            <ul class="menu">
              <li class="menu-item">
                <a href="/terms">Site Terms</a>
              </li>
              <li class="menu-item">
                <a href="/privacy">Privacy</a>
              </li>
              <li class="menu-item">
                <a href="/advertisement">Advertisement</a>
              </li>
              <li class="menu-item">
                <a href="/cookie-policy">Cookie Policy</a>
              </li>
              <li class="menu-item">
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "footer-bottom"
    }
</script>

<style lang="scss">
  .footer-bottom{
    font-size: 13px;
    padding: 20px 0;
    overflow: hidden;
    background-color: #007fef;
    .copyright{
      display: inline-block;
      margin-left: -4px;
      width: calc(100% / 2);
      p {
        margin: 0;
      }
    }
    .footer-links{
      display: inline-block;
      margin-left: -4px;
      width: calc(100% / 2);
      .menu{
        padding-left: 0;
        margin: 0;
        text-align: right;
        .menu-item{
          padding-left: 20px;
          display: inline-block;
          margin-left: -4px;
          a{
            text-decoration: none;
            color: white;
          }
        }
      }
    }
  }
</style>
