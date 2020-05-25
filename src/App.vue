<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
      <!--<main-tab-bar v-if="$route.meta.showTab"/> -->
    <!-- <login></login> -->
  </div>
</template>

<script>

  export default {
    name: 'App',
    mounted(){
      // this.isLogin()
    },
    methods:{
      isLogin(){
        // this.$request.getLoginStatus().then( res => {
        //   console.log(res)
        //   if(res){
        //   }else{
        //     this.$router.replace('/projects/cloud_music/login')
        //   }
        // })
      }
    }
  }
</script>

<style scoped>
  @import "assets/css/base.css";
</style>
