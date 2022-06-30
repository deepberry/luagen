<!--
 * @Author: iRuxu
 * @Date: 2022-06-27 15:29:53
 * @LastEditTime: 2022-06-30 11:40:25
 * @Description:
-->
<template>
    <CommonHeader />
    <router-view :name="version" />
</template>

<script>
import CommonHeader from "@/components/header/HeaderRoot.vue";
export default {
    name: "App",
    props: [],
    components: {
        CommonHeader,
    },
    data: function () {
        return {};
    },
    computed: {
        version: function () {
            return this.$store.state.version || "v1";
        },
    },
    watch: {},
    methods: {},
    created: function () {},
    mounted: function () {},
};
</script>

<style lang="less">
@import "@/assets/css/app.less";
</style>
