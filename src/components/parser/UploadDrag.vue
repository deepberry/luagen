<!--
 * @Author: iRuxu
 * @Date: 2022-06-30 16:59:28
 * @LastEditTime: 2022-07-01 16:24:01
 * @Description:拖拽上传组件
-->
<template>
    <div class="m-upload m-upload__drag">
        <el-upload
            class="u-upload"
            drag
            accept=".xls,.xlsx,.csv,.txt"
            :on-change="handleChange"
            v-model:file-list="fileList"
            ref="upload"
            :auto-upload="false"
            :limit="1"
        >
            <el-icon class="el-icon--upload"><upload-filled /></el-icon>
            <div class="el-upload__text"><em>拖拽</em>文件至此处或<em>点击</em>上传</div>
            <template #tip>
                <div class="el-upload__tip">*请上传xls,csv等标准表格文件</div>
            </template>
        </el-upload>
    </div>
</template>

<script>
import { UploadFilled } from "@element-plus/icons-vue";
export default {
    name: "UploadDrag",
    props: [],
    components: {
        UploadFilled,
    },
    emits: ["upload"],
    data: function () {
        return {
            fileList: [],
        };
    },
    computed: {},
    watch: {},
    methods: {
        handleChange: function (file) {
            this.$emit("upload", file);
        },
    },
    created: function () {},
    mounted: function () {},
};
</script>

<style lang="less">
.m-upload__drag {
    min-width: 520px;
}
</style>
