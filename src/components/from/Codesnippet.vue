<template>
    <span class="u-codeSnippet-form-title">保存为代码模版</span>
    <el-form ref="form" :model="form" :rules="rules">
        <el-form-item label="模版名称" prop="title">
            <el-input v-model="form.title" />
        </el-form-item>
        <el-form-item label="模版分组" prop="group">
            <el-select v-model="form.group" placeholder="请选择分组">
                <el-option :label="item.name" v-for="(item, i) in groups" :key="i" :value="item.name" />
            </el-select>
        </el-form-item>
        <div class="m-button">
            <el-button @click="close"> 取消 </el-button>
            <el-button type="primary" @click="save(form)"> 确定 </el-button>
        </div>
    </el-form>
</template>

<script>
import { saveCodesnippet, getCodesnippetGroup } from "@/server/cms";
export default {
    name: "CodeSnippet",
    emits: ["close"],
    props: ["token"],
    data() {
        return {
            form: {},
            rules: {
                title: [{ required: true, message: "请输入模版名称", trigger: "blur" }],
                group: [{ required: true, message: "请选择分组", trigger: "blur" }],
            },
            groups: [],
        };
    },
    methods: {
        load() {
            getCodesnippetGroup()
                .then((res) => {
                    this.groups = res.data.data || [];
                })
                .finally(() => {
                    this.resetForm();
                });
        },
        close() {
            this.$emit("close");
        },
        resetForm() {
            this.form = {
                title: "",
                group: "",
                status: 1,
                lang: "lua",
                code: "",
            };
        },
        save() {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    this.form.code = this.$store.state.lua;
                    saveCodesnippet(this.form)
                        .then(() => {
                            this.$message({
                                message: `保存为模版成功`,
                                type: "success",
                            });
                            this.resetForm();
                        })
                        .finally(() => {
                            this.close();
                        });
                }
            });
        },
    },
    mounted() {
        if (this.token) this.load();
    },
};
</script>
<style lang="less" scoped>
.u-codeSnippet-form-title {
    .fz(15px,2);
    .bold;
    .db;
    .pb(15px);
}
.m-button {
    .flex;
    padding: 5px 0;
    justify-content: center;
}
</style>
