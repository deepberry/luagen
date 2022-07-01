<!--
 * @Author: iRuxu
 * @Date: 2022-06-27 15:29:53
 * @LastEditTime: 2022-07-01 18:26:00
 * @Description:v1版本
-->
<template>
    <div class="p-v1">
        <div class="m-left">
            <template v-if="file">
                <FileMeta :file="file" @reset="reset" />
                <FileDisplay :raw="raw" />
            </template>
            <template v-else>
                <UploadDrag @upload="uploadFile" />
            </template>
        </div>
        <div class="m-right">
            <ParamsSetting />
            <ParamsOrder />
            <el-tabs type="border-card">
                <el-tab-pane label="lua">
                    <LuaCode />
                </el-tab-pane>
                <el-tab-pane label="注释与映射">
                    <CodeComment />
                </el-tab-pane>
                <el-tab-pane label="json">
                    <DataTree />
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
import UploadDrag from "@/components/parser/UploadDrag.vue";
import FileMeta from "../components/parser/FileMeta.vue";
import FileDisplay from "@/components/parser/FileDisplay.vue";
import ParamsSetting from "@/components/params/ParamsSetting.vue";
import ParamsOrder from "@/components/params/ParamsOrder.vue";
import CodeComment from "@/components/generator/CodeComment.vue";
import DataTree from "@/components/generator/DataTree.vue";
import LuaCode from "@/components/generator/LuaCode.vue";
export default {
    name: "V1Home",
    components: {
        UploadDrag,
        FileMeta,
        FileDisplay,
        ParamsSetting,
        ParamsOrder,
        CodeComment,
        DataTree,
        LuaCode,
    },
    props: [],
    data: function () {
        return {
            file: "",
        };
    },
    computed: {
        raw: function () {
            return this.file?.raw;
        },
    },
    methods: {
        uploadFile: function (file) {
            this.file = file;
        },
        reset: function () {
            this.file = "";
        },
    },
    created: function () {},
};
</script>

<style scoped lang="less">
@import "@/assets/css/v1.less";
</style>
