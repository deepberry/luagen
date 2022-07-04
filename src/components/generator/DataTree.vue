<!--
 * @Author: iRuxu
 * @Date: 2022-07-01 18:12:44
 * @LastEditTime: 2022-07-04 16:02:16
 * @Description:解析器生成的json源码
-->
<template>
    <div class="m-code-json m-code">
        <highlightjs language="json" :code="json" />
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
