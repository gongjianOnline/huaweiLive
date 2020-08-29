hwplayerloaded(() => {
    var player = new HWPlayer("pagesVideo", {
      controls: true,
      userId: "playerDemo01",
      domainId: "hwPlayer",
      width: 640,
      height: 360,
      playbackRates: [0.5, 1, 1.5, 2],
    });
    player.src(
      "https://35.cdn-vod.huaweicloud.com/asset/ba4f5df688f4ed6f569470d688ec4a22/c5d8003cb1d108035d3a902adb2bc5cc.mp4"
    );
});