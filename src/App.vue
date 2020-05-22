<template>
  <div id="app">
    <main-nav-bar v-if="showNavBar"/>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <music-play-bar v-show="showPlayBar"/>
  </div>
</template>

<script>
  import MainNavBar from 'components/content/mainNavBar/MainNavBar'
  import MusicPlayBar from 'components/content/musicPlayBar/MusicPlayBar'

  import { getLoginStatus } from 'network/cloudMusic'

  export default {
    name: 'App',
    components: {
      MainNavBar,
      MusicPlayBar
    },
    created() {
      getLoginStatus().then(res => {
        let path
        if (res !== undefined) {
          if (res.code === 200) {
            path = '/discovery'
          } else {
            path = '/login'
          }
        } else {
          path = '/login'
        }
        this.$router.push(path)
      })
    },
    computed: {
      showNavBar() {
        let path = this.$route.fullPath
        let mainPages = ['/mine', '/discovery', '/village', '/video']
        for (const item of mainPages) {
          if (path === item) {
            return true
          }
        }
        return false
      },
      showPlayBar() {
        if (this.$store.getters.currentMusic.id) {
          return true
        } else {
          return false
        }
      }
    },
  }
</script>

<style scoped>
  @import "assets/css/base.css";
</style>
