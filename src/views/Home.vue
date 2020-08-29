<template>
  <div class="wrapper">
    <el-container>
      <el-header>华为直播</el-header>
      <el-container class="el-container">
        <el-aside width="200px">
          <div @click="skipFun('carte1')">菜单一</div>
          <div @click="skipFun('carte2')">菜单二</div>
          <div @click="skipFun('carte3')">直播</div>
        </el-aside>
        <el-main>
          <div class="video-contaniner"> 
            <Video></Video>
          </div>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Video from "../components/video"
export default {
  
  name: 'Home',
  components: {
   Video
  },
  watch:{},
  computed:{},
  created(){},
  mounted(){},
  methods:{
    skipFun(params){
      this.$router.push({
        name:params
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.wrapper,
.el-container{
  height: 100%;
}
.video-contaniner{
  position: absolute;
  right: 0;
  bottom: 10px;
}


.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    div{
      line-height: 50px;
      border: 1px solid red;
      margin-top: 2px;
      cursor: pointer;
    }
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    position: relative;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

</style>