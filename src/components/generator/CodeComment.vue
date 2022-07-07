<!--
 * @Author: iRuxu
 * @Date: 2022-07-01 18:12:44
 * @LastEditTime: 2022-07-07 13:25:23
 * @Description:代码注释与索引表
-->
<template>
    <div class="m-code-comment m-code">
        <div class="u-comment">{{ comment }}</div>
        <div class="u-table">
            {{ table }}
        </div>
    </div>
</template>

<script>
export default {
    name: "CodeComment",
    computed: {
        comment: function () {
            return this.$store.state.comment;
        },
        table: function () {
            return this.$store.state.table;
        },
    },
};
</script>

<style lang="less">
.m-code-comment {
    .u-comment,
    .u-table {
        .fz(12px,1.6);
        color: #666;
    }
    .u-comment {
        white-space: pre-line;
    }
    .u-table {
        .mt(20px);
    }
}
</style>
