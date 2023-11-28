<!--
 * @Author: iRuxu
 * @Date: 2022-06-30 16:59:28
 * @LastEditTime: 2022-07-01 18:33:14
 * @Description:文件信息
-->
<template>
    <div class="m-file-info">
        <div class="u-info">
            <span class="u-info-meta">
                <em>Filename</em>
                <b>{{ file.name }}</b>
            </span>
            <span class="u-info-meta">
                <em>Size</em>
                <b>{{ file.size }}</b>
            </span>
        </div>
        <el-button type="danger" icon="RefreshLeft" @click="reset" size="small">重置</el-button>
    </div>
</template>

<script>
export default {
    name: "FileInfo",
    data: function () {
        return {};
    },
    computed: {
        file: function () {
            return this.$store.state.file;
        },
    },
    methods: {
        reset: function () {
            this.$store.commit("empty");
        },
    },
};
</script>

<style lang="less">
.m-file-info {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    background-color: #fafbfc;
    border: 1px solid #eee;

    .u-info {
        .fz(14px,24px);
    }
    .u-info-meta {
        .mr(20px);
        em {
            font-style: normal;
            background-color: #f5f5f5;
            .r(3px);
            padding: 2px 5px;
            .mr(5px);
            color: #999;
        }
    }
}
</style>
