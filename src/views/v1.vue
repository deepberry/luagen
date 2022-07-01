<!--
 * @Author: iRuxu
 * @Date: 2022-06-27 15:29:53
 * @LastEditTime: 2022-07-01 18:33:34
 * @Description:v1版本
-->
<template>
    <div class="p-v1">
        <div class="m-left">
            <template v-if="file">
                <FileMeta />
                <FileDisplay />
            </template>
            <template v-else>
                <UploadDrag />
            </template>
        </div>
        <div class="m-right">
            <ParamsSetting />
            <ParamsOrder />
            <el-tabs type="border-card">
                <el-tab-pane label="lua">
                    <LuaCode />
                </el-tab-pane>
                <el-tab-pane label="comment">
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
    computed: {
        file() {
            return this.$store.state.file;
        },
    },
};
</script>

<style scoped lang="less">
@import "@/assets/css/v1.less";
</style>
