<template>
  <div class="wrapper">
    <video id="test" class="video-js vjs-default-skin vjs-big-play-centered"></video>
  </div>
</template>
<script>
export default {
  components:{},
  props:{},
  data(){
    return {
      player:null,
    }
  },
  watch:{

  },
  computed:{},
  created(){},
  mounted(){
    this.createvideoFun()
  },
  destroyed(){
    this.player.dispose()
  },
  methods:{
    createvideoFun(){
      let _self = this;
      hwplayerloaded(() => {
        _self.player = new HWPlayer("test", {
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
        // 使用事件监听
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