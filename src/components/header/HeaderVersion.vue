<!--
 * @Author: iRuxu
 * @Date: 2022-06-27 17:52:09
 * @LastEditTime: 2022-06-30 12:16:26
 * @Description:切换版本
-->
<template>
    <div class="m-header-version">
        <el-dropdown type="primary" placement="bottom" @command="handleVersionChange">
            <el-button type="primary" size="small">
                <span class="u-version"
                    >版本：<b>{{ version }}</b></span
                ><el-icon class="el-icon--right"><ArrowDown /></el-icon>
            </el-button>

            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item
                        :icon="BottomRight"
                        v-for="item in versions"
                        :key="item.key"
                        :command="item.key"
                        :disabled="!item.status"
                        >{{ item.label }}</el-dropdown-item
                    >
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<script>
import { BottomRight, ArrowDown } from "@element-plus/icons-vue";
import { markRaw } from "vue";
import pkg from "@/../project.json";
export default {
    name: "HeaderVersion",
    props: [],
    components: {
        ArrowDown,
    },
    data: function () {
        return {
            version: "v1",
            versions: pkg.versions,
            BottomRight: markRaw(BottomRight),
        };
    },
    computed: {},
    watch: {
        "$store.state.version": {
            immediate: true,
            handler: function (v) {
                this.version = v;
                this.$router.push({
                    name: v,
                });
            },
        },
    },
    methods: {
        handleVersionChange: function (v) {
            this.$store.commit("set", { key: "version", val: v });
        },
    },
    created: function () {},
    mounted: function () {},
};
</script>
