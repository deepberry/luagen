<!--
 * @Author: iRuxu
 * @Date: 2022-06-27 15:50:00
 * @LastEditTime: 2022-06-27 18:53:27
 * @Description: 头部
-->
<template>
    <header class="m-header">
        <h1 class="m-header-title">
            <img
                class="u-logo"
                src="../../../node_modules/@deepberry/common/img/logo.svg"
                svg-inline
                alt="LUA脚本生成器"
            />
            <span class="u-title">LuaGen</span>
            <header-version />
        </h1>
        <div class="m-header-meta">
            <a href="" class="u-help">说明文档</a>
            <a href="" class="u-github">Github仓库</a>
        </div>
    </header>
</template>

<script>
import HeaderVersion from "./HeaderVersion.vue";
export default {
    name: "CommonHeader",
    components: {
        HeaderVersion,
    },
};
</script>

<style scoped lang="less">
@import "../../assets/css/header.less";
</style>
