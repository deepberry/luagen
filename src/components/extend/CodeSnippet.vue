<template>
    <el-popover placement="top" :visible="visible" width="280px">
        <header class="m-codesnippet-title">保存为模版</header>
        <el-form class="m-codesnippet-form" ref="form" :model="form" :rules="rules">
            <el-form-item label="模版名称" prop="title">
                <el-input v-model="form.title" />
            </el-form-item>
            <el-form-item label="模版分组" prop="group_id">
                <el-select v-model="form.group_id" placeholder="请选择分组" class="u-select">
                    <el-option :label="item.name" v-for="(item, i) in groups" :key="i" :value="item.id" />
                </el-select>
            </el-form-item>
            <div class="m-codesnippet-actions">
                <el-button @click="visible = false"> 取消 </el-button>
                <el-button type="primary" @click="save"> 确定 </el-button>
            </div>
        </el-form>
        <template #reference>
            <span class="u-button">
                <el-button
                    type="warning"
                    size="small"
                    v-if="token"
                    @click="visible = true"
                    icon="FolderAdd"
                    :disabled="disabled"
                    >保存为模版</el-button
                >
            </span>
        </template>
    </el-popover>
</template>

<script>
import { saveCodeSnippet, getCodeSnippetGroup } from "@/service/codesnippet";
export default {
    name: "CodeSnippet",
    props: ["disabled"],
    data() {
        return {
            form: {
                title: "",
                group_id: "",
                status: 1,
                lang: "lua",
                code: "",
            },
            rules: {
                title: [{ required: true, message: "请输入模版名称", trigger: "blur" }],
                group_id: [{ required: true, message: "请选择分组", trigger: "blur" }],
            },
            groups: [],
            visible: false,
            token: localStorage.getItem("TOKEN_TITAN_V2"),
        };
    },
    methods: {
        load() {
            getCodeSnippetGroup().then((res) => {
                this.groups = res.data.data || [];
            });
        },
        save() {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    this.form.code = this.$store.state.lua;
                    if (!this.form.code.trim()) {
                        return this.$message({
                            message: "请先生成代码",
                            type: "warning",
                        });
                    }
                    saveCodeSnippet(this.form)
                        .then(() => {
                            this.$message({
                                message: `保存为模版成功`,
                                type: "success",
                            });
                            this.$refs.form.resetFields();
                        })
                        .finally(() => {
                            this.close();
                        });
                }
            });
        },
        close() {
            this.visible = false;
        },
    },
    mounted() {
        if (this.token) this.load();
    },
};
</script>
<style lang="less">
.m-codesnippet-title {
    .fz(15px,2);
    .bold;
    .db;
    .pb(15px);
}
.m-codesnippet-form {
    .u-select {
        .w(100%);
        .db;
    }
}
.m-codesnippet-actions {
    .flex;
    padding: 5px 0;
    justify-content: center;
}
</style>
