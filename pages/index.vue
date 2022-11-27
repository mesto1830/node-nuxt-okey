<template>
  <div class="page">
    <header class="header">
      <div class="header-left">
        <span class="logo"><img src="../assets/img/logo.jpg" width="40px;" height="40px"></span>
        <h2 class="title">Okey 101 Bedava Çip</h2>
      </div>
      <nuxt-link to="/admin" class="header-right" exact-active-class="navbar-active">
        <h3>Admin</h3>
      </nuxt-link>
    </header>
    <div class="content">
      <section class="content-left">
        <div><img src="../assets/img/icon0.png"></div>
      </section>
      <section class="content-right">
        <div class="cr-top">
          <div class="cr-img"><img src="../assets/img/icon1.jpg"></div>
          <div class="cr-img"><img src="../assets/img/icon2.png"></div>
          <div class="cr-img"><img src="../assets/img/icon3.jpg"></div>
        </div>
        <div class="navbar cr-bottom">
          <nuxt-link to="/register" class="navbar-links" exact-active-class="navbar-active">
            Bedava Çip İçin Giriş Yapınız
          </nuxt-link>
        </div>
      </section>
    </div>
    <footer class="footer">
        <img src="~/assets/img/18.png" />
        Sistemimizi 18 yaşından büyükler ve yurtdışında ikamet edenler kullanabilirler...!
    </footer>
  </div>
</template>

<script>
export default {
  name: 'index',
  mounted () {
   
  }
}
</script>