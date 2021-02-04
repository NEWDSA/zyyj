<template>
  <div id="Henqing_area"></div>
</template>

<script>
export default {
  data() {
    return {
      heqData: [
        { name: "横琴一区", value: "65", color: "#5470c6" },
        { name: "横琴二区", value: "25", color: "#91cc75" },
        { name: "横琴三区", value: "20", color: "#fac858" },
      ],
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      let title = {
        text: "横琴各区占比",
        subtext: "总计（万元）：28373",
        left: "center",
      };
      var Mock = require("mockjs");
      var Random = Mock.Random;
      var heqDatas = [];
      for (var i = 0; i < 3; i++) {
        let obj = {
          name: Random.ctitle(3),
          value: Random.integer(0, 100),
          color: Random.hex(),
        };
        heqDatas.push(obj);
      }
      var Charts = document.getElementById("Henqing_area");
      // this.$ChartUtils.createCircle(Charts, this.heqData, title);
      this.$ChartUtils.createCircle(Charts, heqDatas, title);
    },
  },
};
</script>
<style lang="scss" scoped>
#Henqing_area {
  width: 400px;
  height: 400px;
  // box-sizing: border-box;
  // border: 1px solid yellow;
}
</style>