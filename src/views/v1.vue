<!--
 * @Author: iRuxu
 * @Date: 2022-06-27 15:29:53
 * @LastEditTime: 2022-07-04 16:36:02
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
            <div class="m-output">
                <el-tabs type="border-card">
                    <el-tab-pane label="lua" lazy>
                        <LuaCode @build="build" />
                    </el-tab-pane>
                    <el-tab-pane label="comment" lazy>
                        <CodeComment />
                    </el-tab-pane>
                    <el-tab-pane label="json" lazy>
                        <DataTree />
                    </el-tab-pane>
                </el-tabs>
                <div class="m-build">
                    <el-button type="primary" size="small" :disabled="!file" :icon="DocumentCopy">一键复制</el-button>
                    <el-button type="primary" size="small" @click="build" :disabled="!file" :icon="Position">{{
                        buildText
                    }}</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { DocumentCopy, Position } from "@element-plus/icons-vue";

import UploadDrag from "@/components/parser/UploadDrag.vue";
import FileMeta from "../components/parser/FileMeta.vue";
import FileDisplay from "@/components/parser/FileDisplay.vue";
import ParamsSetting from "@/components/params/ParamsSetting.vue";
import ParamsOrder from "@/components/params/ParamsOrder.vue";
import CodeComment from "@/components/generator/CodeComment.vue";
import DataTree from "@/components/generator/DataTree.vue";
import LuaCode from "@/components/generator/LuaCode.vue";

import parse from "@deepberry/luagen-parser/lib/parse.js";
import { generate, Generator } from "@deepberry/luagen-generator/lib/index.js";
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
    data: function () {
        return {
            // 标记是否已生成过一次
            hasBuildOnce: false,

            // 图标
            DocumentCopy,
            Position,
        };
    },
    computed: {
        file() {
            return this.$store.state.file;
        },
        raw: function () {
            return this.$store.state.raw;
        },
        keymap: function () {
            return this.$store.state.keymap;
        },
        order: function () {
            return this.$store.state.order;
        },
        json: function () {
            return this.$store.state.json;
        },
        buildText: function () {
            return this.hasBuildOnce ? "重新生成" : "生成代码";
        },
    },
    methods: {
        // 生成代码
        build: function () {
            this.parseToJson();
            this.generateLua();
            this.generateComment();

            if (!this.hasBuildOnce) {
                this.hasBuildOnce = true;
            }
        },
        // 生成json tree
        parseToJson: function () {
            parse(this.raw, {
                keymap: this.keymap,
                order: this.order,
            }).then((result) => {
                this.$store.commit("set", {
                    key: "json",
                    val: result.toJSON(),
                });
            });
        },
        // 生成lua代码
        generateLua: function () {
            const result = generate(this.json);
            const lua = Generator.outputCode(result, true);

            this.$store.commit("set", {
                key: "lua",
                val: lua,
            });
        },
        // 生成注释
        generateComment: function () {
            let comment = Generator.outputComment(this.keymap);
            this.$store.commit("set", {
                key: "comment",
                val: comment,
            });
        },
    },
};
</script>

<style lang="less">
@import "@/assets/css/v1.less";
</style>
