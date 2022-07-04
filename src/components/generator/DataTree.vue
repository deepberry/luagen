<!--
 * @Author: iRuxu
 * @Date: 2022-07-01 18:12:44
 * @LastEditTime: 2022-07-04 22:55:50
 * @Description:解析器生成的json源码
-->
<template>
    <div class="m-code-json m-code">
        {{ json }}
    </div>
</template>

<script>
export default {
    name: "DataTree",
    computed: {
        json: function () {
            return this.$store.state.json;
        },
    },
};
</script>
<style lang="less">
.m-code-json {
    .fz(12px,1.6);
    color: #666;
}
</style>
