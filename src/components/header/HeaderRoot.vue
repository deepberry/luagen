<!--
 * @Author: iRuxu
 * @Date: 2022-06-27 15:50:00
 * @LastEditTime: 2022-06-30 11:59:51
 * @Description: 头部
-->
<template>
    <header class="m-header">
        <h1 class="m-header-title">
            <img class="u-logo" src="@/assets/img/luagen.svg" alt="LUA脚本生成器" />
            <span class="u-title">LuaGen</span>
            <header-version />
        </h1>
        <div class="m-header-meta">
            <a href="https://github.com/deepberry/luagen/blob/master/README.md" class="u-help" target="_blank"
                ><img src="@/assets/img/help.svg" alt="Help" /><span>使用帮助</span></a
            >
            <a href="https://github.com/deepberry/luagen/blob/master/Dev.md" class="u-dev" target="_blank"
                ><img src="@/assets/img/github.svg" alt="Help" /><span>开发文档</span></a
            >
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
