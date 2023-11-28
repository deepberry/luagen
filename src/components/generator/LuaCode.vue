<!--
 * @Author: iRuxu
 * @Date: 2022-07-01 18:12:44
 * @LastEditTime: 2022-07-04 22:54:06
 * @Description:lua代码
-->
<template>
    <div class="m-code-lua m-code">
        <div class="u-lua" v-if="lua">
            <!-- <div class="u-lua-comment">{{ comment }}</div> -->
            <!-- <div class="u-lua-comment">{{ table }}</div> -->
            <div class="u-lua-code">{{ lua }}</div>
        </div>
        <div class="u-null" v-else>
            <el-button class="u-btn" type="success" @click="build" :disabled="!file">
                <span class="u-btn-title">♬生成代码</span>
                <span class="u-btn-desc">Build Code</span>
            </el-button>
        </div>
    </div>
</template>

<script>
export default {
    name: "LuaCode",
    emits: ["build"],
    computed: {
        lua: function () {
            return this.$store.state.lua;
        },
        comment: function () {
            return this.$store.state.comment;
        },
        table: function () {
            return this.$store.state.table;
        },
        file() {
            return this.$store.state.file;
        },
    },
    methods: {
        build: function () {
            this.$emit("build");
        },
    },
};
</script>

<style lang="less">
.m-code-lua {
    pre {
        word-break: break-all;
        white-space: normal;
    }
    .u-null {
        padding: 80px;
        .x;
    }
    .u-btn {
        .size(140px,50px);
        span {
            .db !important;
        }
        .u-btn-desc {
            .fz(12px);
        }
        .u-btn-title {
            .fz(12px,20px);
        }
    }
    .u-lua {
        .fz(12px,1.6);
        color: #666;
    }
}
</style>
