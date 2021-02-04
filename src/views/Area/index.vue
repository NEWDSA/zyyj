<template>
    <div class="l_container">
        <AperEachGroup/>
        <ProEachDistHenQ/>
        <PropEachDistMacau/>
        <!-- <TranCustmStatis/> -->
    </div>
</template>

<script>
import AperEachGroup from '@/components/AperEachGroup'//引入全区各组
import ProEachDistHenQ from '@/components/ProEachDistHenQ'//引入横琴
import PropEachDistMacau from '@/components/PropEachDistMacau'//引入澳门
import TranCustmStatis from '@/components/TranCustmStatis'//引入成交客户统计
export default {
    data() {
        return {
            key: value
        }
    },
    components: {
        AperEachGroup,
        ProEachDistHenQ,
        PropEachDistMacau,
        // TranCustmStatis
    },
}
</script>

<style lang="scss" scoped>
    .l_container{
       display: flex;
       flex-direction: column;
    //    justify-content: center;
       width: 100%;
       height: 100%;
    }
</style>