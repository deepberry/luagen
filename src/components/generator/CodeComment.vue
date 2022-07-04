<!--
 * @Author: iRuxu
 * @Date: 2022-07-01 18:12:44
 * @LastEditTime: 2022-07-04 22:54:13
 * @Description:代码注释与索引表
-->
<template>
    <div class="m-code-comment m-code">
        <div class="u-comment">{{ comment }}</div>
    </div>
</template>

<script>
export default {
    name: "CodeComment",
    computed: {
        comment: function () {
            return this.$store.state.comment;
        },
    },
};
</script>

<style lang="less">
.m-code-comment {
    .u-comment {
        .fz(12px,1.6);
        color: #666;
        white-space: pre-line;
    }
}
</style>
