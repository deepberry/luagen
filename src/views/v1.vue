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
                    <CodeSnippet :disabled="!file" />

                    <el-dropdown
                        class="u-button"
                        split-button
                        trigger="click"
                        type="primary"
                        @click="copy"
                        size="small"
                        :disabled="!file"
                        popper-class="m-copy-options"
                        :hide-on-click="false"
                    >
                        <el-icon class="u-copy" @click="copy"><DocumentCopy /></el-icon>一键复制
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item>
                                    <el-checkbox v-model="copyOptions.comment" size="small" label="Comment" />
                                </el-dropdown-item>
                                <el-dropdown-item>
                                    <el-checkbox v-model="copyOptions.table" size="small" label="Table" />
                                </el-dropdown-item>
                                <el-dropdown-item>
                                    <el-checkbox v-model="copyOptions.lua" size="small" label="Lua" />
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>

                    <!-- <el-button type="primary" v-else @click="copy" size="small" :disabled="!file" icon="DocumentCopy">一键复制</el-button> -->

                    <el-button type="primary" size="small" @click="build" :disabled="!file" icon="Position">{{
                        buildText
                    }}</el-button>
                </div>
            </div>
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
import CodeSnippet from "@/components/extend/CodeSnippet.vue";

import parse from "@deepberry/luagen-parser/lib/parse.js";
import { generate, Generator } from "@deepberry/luagen-generator/lib/index.js";

import { mapState } from "vuex";
import { map } from "lodash";
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
        CodeSnippet,
    },
    data: function () {
        return {
            // 标记是否已生成过一次
            hasBuildOnce: false,

            // 进度
            loading: false,

            // tab
            tab: "lua",

            // 复制选项
            copyOptions: {
                comment: true,
                table: true,
                lua: true,
            },
        };
    },
    computed: {
        ...mapState(["file", "raw", "keymap", "order", "json"]),
        buildText: function () {
            return this.hasBuildOnce ? "重新生成" : "生成代码";
        },
        copyContent: function () {
            let list = [];
            map(this.copyOptions, (val, key) => {
                if (val) {
                    list.push(this.$store.state[key]);
                }
            });
            return list.join("\n");
        },
        data: function () {
            if (this.tab == "lua") {
                return this.copyContent;
            }
            if (this.tab == "comment") {
                return this.$store.state.comment + this.$store.state.table;
            }
            return this.$store.state[this.tab];
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
    },
};
</script>

<style lang="less">
@import "@/assets/css/v1.less";
</style>
