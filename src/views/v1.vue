<!--
 * @Author: iRuxu
 * @Date: 2022-06-27 15:29:53
 * @LastEditTime: 2022-07-11 18:07:35
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
            <div class="m-output" v-loading="loading">
                <el-tabs type="border-card" v-model="tab">
                    <el-tab-pane label="lua" name="lua">
                        <LuaCode @build="build" />
                    </el-tab-pane>
                    <el-tab-pane label="comment" name="comment" lazy>
                        <CodeComment />
                    </el-tab-pane>
                    <el-tab-pane label="json" name="json" lazy>
                        <DataTree />
                    </el-tab-pane>
                </el-tabs>
                <div class="m-build">
                    <el-popover placement="top" :visible="codeVisible" width="280px">
                        <Codesnippet :token="token" @close="close" />
                        <template #reference>
                            <span class="u-button">
                                <el-button
                                    type="success"
                                    size="small"
                                    v-if="token"
                                    :disabled="hasCode"
                                    :icon="DocumentCopy"
                                    @click="codeVisible = true"
                                    >保存为模版</el-button
                                >
                            </span>
                        </template>
                    </el-popover>

                    <el-button type="primary" size="small" :disabled="!file" :icon="DocumentCopy" @click="copy"
                        >一键复制</el-button
                    >
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

import Codesnippet from "@/components/from/Codesnippet";

import parse from "@deepberry/luagen-parser/lib/parse.js";
import { generate, Generator } from "@deepberry/luagen-generator/lib/index.js";

import { mapState } from "vuex";
import { markRaw } from "vue";
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
        Codesnippet,
    },
    data: function () {
        return {
            // 标记是否已生成过一次
            hasBuildOnce: false,

            // 进度
            loading: false,

            // 图标
            DocumentCopy: markRaw(DocumentCopy),
            Position: markRaw(Position),

            // tab
            tab: "lua",

            codeVisible: false,
        };
    },
    computed: {
        ...mapState(["file", "raw", "keymap", "order", "json"]),
        buildText: function () {
            return this.hasBuildOnce ? "重新生成" : "生成代码";
        },
        data: function () {
            if (this.tab == "comment") {
                return this.$store.state.comment + this.$store.state.table;
            }
            return this.$store.state[this.tab];
        },
        token() {
            return this.$route.params.token || localStorage.getItem("LUA_GEN_TOKEN");
        },
        hasCode() {
            return this.$store.state.lua ? false : true;
        },
    },
    methods: {
        // 生成代码
        build: function () {
            // 开始构建
            this.loading = true;

            // 构建步骤
            this.parseToJson()
                .then(() => {
                    this.generateLua();
                    this.generateComment();
                })
                .catch((err) => {
                    this.$notify({
                        message: `${err.message}`,
                        type: "warning",
                    });
                });

            // 结束构建
            this.loading = false;

            // 更新标记
            if (!this.hasBuildOnce) {
                this.hasBuildOnce = true;
            }
        },
        // 生成json tree
        parseToJson: function () {
            return parse(this.raw, {
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
            const lua = Generator.minify(Generator.outputFunctions(result));
            const table = Generator.outputScheduleMap(result);
            this.$store.commit("bulk", [
                {
                    key: "lua",
                    val: lua,
                },
                {
                    key: "table",
                    val: table,
                },
            ]);
        },
        // 生成注释
        generateComment: function () {
            let comment = Generator.outputComment(this.keymap);
            this.$store.commit("set", {
                key: "comment",
                val: comment,
            });
        },
        // 复制
        copy: function () {
            navigator.clipboard.writeText(this.data).then(() => {
                this.$message({
                    message: `${this.tab}复制成功`,
                    type: "success",
                });
            });
        },
        // 关闭
        close() {
            this.codeVisible = false;
        },
    },
};
</script>

<style lang="less">
@import "@/assets/css/v1.less";
</style>
