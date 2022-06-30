<!--
 * @Author: iRuxu
 * @Date: 2022-06-27 15:29:53
 * @LastEditTime: 2022-06-30 15:07:23
 * @Description:
-->
<template>
    <CommonHeader />
    <router-view />
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
    computed: {},
    watch: {},
    methods: {},
    created: function () {},
    mounted: function () {},
};
</script>

<style lang="less">
@import "@/assets/css/app.less";
</style>
