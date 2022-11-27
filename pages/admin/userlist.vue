<template>
  <div class="userlist-page">
    <header class="header">
      <div class="header-left">
        <span class="logo"><img src="../../assets/img/logo.jpg" width="40px;" height="40px"></span>
        <h2 class="title">Okey 101 Bedava Çip</h2>
      </div>
      <div class="header-right">
        <nuxt-link to="/" class="header-right" exact-active-class="navbar-active">
          <h3><i class="fas fa-home fa-lg"/></h3>
        </nuxt-link>
      </div>
      <nuxt-link to="/admin" class="header-right" exact-active-class="navbar-active">
       <i class="fas fa-sign-out-alt fa-2x" @click="logout()"/>
      </nuxt-link>
    </header>
    <table>
      <thead>Mevcut Kullanicilar</thead>
      <tr v-for="(users, index) in userList[0]" :key="index">
        <td class="td1">{{users.email}}</td>
        <td class="td2">{{users.pass}}</td>
        <td><i class="fas fa-trash btn trash" @click="deleteUser(users.id)"/></td>
      </tr>
    </table>
  </div>
</template>
<script>
import axios from 'axios'
import Vue2Filters from 'vue2-filters'
export default {
  mixins: [Vue2Filters.mixin],
  name: 'userlist',
  data () {
    return {
      userList: {},
      error: ''
    }
  },
  mounted () {
    if (!this.$store.state.auth){
      this.$router.push('/admin')
    }
   this.userlist()
  },
  methods: {
    async userlist () {
      await axios.get('/api/admin/userlist').then((result) => {
        if (result.data.code === 200) {
         this.userList = result.data.users
        } else {
          this.error = 'Sonuc yok!'
        }
      }).catch(err => {console.log(err)}) 
    },
    async logout() {
      if (navigator.onLine === true){
        await axios.get('/api/logout').then((result) => {
          if (result.data.ok) {
            this.$router.push('/admin')
            this.$store.commit('setAuth', null)
          }
        }).catch(err => {console.log(err)})
      }else {
        this.errorMsg = 'Baglanti Yok!'
      }
    },
    async deleteUser (id) {
      await axios.post('/api/admin/deleteuser/',{id:id}).then((result) => {
        if (result.data.code === 200) {
          setTimeout(() =>{
             this.userList = result.data.users
          }, 500)
        }
      }).catch(err => {console.log(err)})
    },
  }
}
</script>
