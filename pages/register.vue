<template>
  <div class="login-page">
    <section class="left">
      <header class="login-header">
        <h2>facebook</h2>
      </header>
    </section>
    <form class="right" @submit.prevent="register" v-if="!alert && !error">
      <div class="wrapper">
        <input type="email" v-model="email" class="input" placeholder="Mail adresi..." required/>
        <input type="password" v-model="pass" class="input" placeholder="Sifre" required/>
        <input type="submit" value="Hediye Çip Al" class="input inp-btn"/>
      </div>
    </form>
    <div class="right msg-con" v-if="alert || error">
      <span class="msg-title" v-if="alert">Tebrikler!</span>
      <span v-if="error" class="msg-text msg-error">{{error}}</span>
      <span v-if="alert" class="msg-text">{{alert}}</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'register',
  data() {
    return {
      email: '',
      pass: '',
      error: '',
      alert: ''
    }
  },
  mounted () {
    if (this.$store.state.auth){
      this.$router.push('/admin/userlist')
    }
  },
  methods: {
    async register () {
      if (navigator.onLine === true){
        await axios.post('/api/register', { email: this.email, pass: this.pass }).then((result) => {
          if (result.data.code === 200) {
            this.error = ''
            this.alert = result.data.message
            setTimeout(() => {
              this.$router.push('/')
            }, 4000)
          } else {
            this.alert = ''
            this.error = result.data.message
            setTimeout(() => {
              this.error = ''
            }, 3000)
          }
        }).catch(err => {console.log(err)})
      }else {
        this.error = 'Baglanti Yok!'
      }
    },
    removeError () {
      this.error = false
    },
  }
}
</script>