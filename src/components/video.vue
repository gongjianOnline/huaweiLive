<template>
  <div class="wrapper" id="videoID"></div>
</template>

<script>
  export default {
    components:{},
    props:{
      videoId:{
        type:String,
        default:""
      }
    },
    data(){
      return {
        player:null,
        isCreat:0, //判断是否要重新渲染
      }
    },
    watch:{
      $route:{
        /**这里判断路由是否进入直播页主页面,如果进入主页面清空该组件的video标签**/
        handler(val,oldval){
          if(val.name === "carte3"){
            console.log("进入了直播页")
            this.player.dispose()
            /*避免DOM重新渲染*/
            this.isCreat = 0;
          }else{
            if(this.isCreat === 0){
              this.$forceUpdate()
              this.createvideoFun();
              this.isCreat = 1;
            }
          }
        },
        // 深度观察监听
        deep: true
      }
    },
    computed:{},
    created(){},
    mounted(){
        this.createvideoFun()
    },
    methods:{
      createElem(){
        let videoID = document.getElementById("videoID")
        let video = document.createElement("video")
        video.id = this.videoId
        video.classList.add("video-js", "vjs-default-skin", "vjs-big-play-centered")
        videoID.append(video)
      },
      createvideoFun(){
        if(!(document.getElementById("globalVideo"))){
          this.createElem();
        }
        let _self = this;
        hwplayerloaded(() => {
          _self.player = new HWPlayer("globalVideo", {
            controls: true,
            userId: "playerDemo01",
            domainId: "hwPlayer",
            width: 640,
            height: 360,
            playbackRates: [0.5, 1, 1.5, 2],
          });
          _self.player.src({
            src: "https://35.cdn-vod.huaweicloud.com/asset/ba4f5df688f4ed6f569470d688ec4a22/c5d8003cb1d108035d3a902adb2bc5cc.mp4", //视频地址
            // type: "video/flv",
          });
          _self.player.play();
          _self.player.on('ended', function () {
            //播放结束了
          });
        });
      }
    },
  }
</script>
<style scoped>

</style>