<!--
 * @Author: iRuxu
 * @Date: 2022-07-01 18:12:44
 * @LastEditTime: 2022-07-04 16:02:06
 * @Description:代码注释与索引表
-->
<template>
    <div class="m-code-comment m-code">
        <highlightjs language="lua" :code="comment" />
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
