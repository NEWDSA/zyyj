<template>
  <div id="Trans_statist"></div>
</template>

<script>
export default {
  data() {
    return {
      MyData: [{ name: "澳门", value: "335" },{name:"内地",value:"335"},{name:"香港",value:"1048"}],
      MyDates: [{gender:"女",value:"30"},{gender:"男",value:"70"}],
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
      var Charts = document.getElementById("Trans_statist");
      this.$ChartUtils.createMultiplePie(Charts, this.MyData, title);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>