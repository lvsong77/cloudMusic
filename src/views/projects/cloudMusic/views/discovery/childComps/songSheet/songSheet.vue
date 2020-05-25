<template>
  <div class="songSheet">
    <van-nav-bar :border="false">
      <template #left>
        <i class="iconfont icon-back" @click="back"></i>
        <span class="fontw">歌单广场</span>
      </template>
    </van-nav-bar>
    <van-tabs v-model="active" sticky  title-active-color="#ee0a24">
      <van-tab v-for="(item,index) in tags" :key="index" :title="item.name">
        
        <!-- <Recommend></Recommend> -->
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Recommend from "./child/Recommend"
  export default({
    data(){
      return{
        active:1,
        tags:[
          {
            name: "推荐",
            content: Recommend
          },
          {
            name: "官方",
            content: "官方",
          },
          {
            name: "精品",
            content:"精品",
          },
          {
            name: "欧美",
            content: "欧美",
          },
          {
            name: "摇滚",
            content: "摇滚",
          }
        ]
      }
    },
    components:{
      Recommend
    },
    mounted(){
      this.gettags()
    },
    methods:{
      back(){//返回
        this.$router.go(-1)
      },
      gettags(){//获取用户歌单
        let prams = {uid: 1708344300}
        this.$request.getuserSongSheet(prams)
        .then( res => {
          console.log(res)
        })
      }
    }
  })
</script>

<style lang="less" scoped>
/deep/ .van-nav-bar{
  background-color: rgba(255, 255, 255, 0.5);
}
  .iconfont{
    font-size: 1.4rem;
    margin-right: 10px;
  }
  .fontw{
    font-weight: bold;
  }
</style>