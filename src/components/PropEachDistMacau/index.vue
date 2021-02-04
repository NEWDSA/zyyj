<template>
  <div id="Macau_area"></div>
</template>

<script>
export default {
  data() {
    return {
      MacauData: [
        { name: "路氹区", value: "25", color: "#fc8452" },
        { name: "东方明珠区", value: "30", color: "#3ba272" },
        { name: "澳门区", value: "30", color: "#ee6666" },
        { name: "工商铺区", value: "30", color: "#73c0de" },
      ]
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      let title = {
        text: "澳门各区占比",
        subtext: "总计（万元）：4848",
        left: "center",
      };
      var Charts = document.getElementById("Macau_area");
      this.$ChartUtils.createCircle(Charts, this.MacauData, title);
    },
  },
};
</script>

<style lang="scss" scoped>
    #Macau_area{
        width: 400px;
        height: 400px;
        // box-sizing: border-box;
        // border: 1px solid yellow;
    }
</style>