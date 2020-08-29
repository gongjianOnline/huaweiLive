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

    }
  },
  watch:{},
  computed:{},
  created(){},
  mounted(){
    this.createVideoFun()
  },
  methods:{
    createVideoFun(){
       hwplayerloaded(()=>{
        var player = new HWPlayer('test', {
            controls: true,
            userId: 'playerDemo01',
            domainId: 'hwPlayer',
            width: 640,
            height: 360,
            playbackRates: [.5, 1, 1.5, 2]
        });
        player.src("https://35.cdn-vod.huaweicloud.com/asset/ba4f5df688f4ed6f569470d688ec4a22/c5d8003cb1d108035d3a902adb2bc5cc.mp4");
    }); 
    }
  },
}
</script>
<style scoped>

</style>