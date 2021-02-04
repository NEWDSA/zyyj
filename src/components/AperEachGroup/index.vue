<template>
  <div class="my_container">
    <div id="myCharts"></div>
    <div id="Charts"></div>
  </div>
</template>

<script>
export default {
  name: "echarts",
  data() {
    return {
      msg: "Welcome to ...",
      typeData: {
        DATE: ["HMA","HMB","HMC","HMD","HMJ","HMI","HMW","HM6","HM8","HMZ"],
        VALUE: [1568, 1692, 2107, 1908, 1537, 2060, 1593, 1762, 2090, 1842],
      },
      typeOther: {
        DATE: ["M.R", "M.M", "M.D", "M.B", "M.A"],
        VALUE: [9266, 9466, 9400, 9575, 2788],
      },
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      let title = {
        text: "全年各组业绩（万元）",
        subtext: "公司全年总业绩:12345",
        left: "center",
      };
      var chartDom = document.getElementById("myCharts"); //获取document 对象
      var Charts = document.getElementById("Charts");
      this.$ChartUtils.createCrossBar(
        chartDom,
        this.typeData.DATE,
        this.typeData.VALUE,
        1,
        "",
        title
      );

      this.$ChartUtils.createCrossBar(
        Charts,
        this.typeOther.DATE,
        this.typeOther.VALUE,
        2,
        ""
      );
    },
  },
};
</script>

<style lang="scss" scoped>
   .my_container{
      width: 5px;
      #myCharts{
        width: 500px;
        height: 400px;
        // border: 1px solid blue;
        // box-sizing: border-box;
      }
      #Charts{
        width: 500px;
        height: 400px;
        // border: 1px solid gold;
        // box-sizing: border-box;
      }
   }
</style>