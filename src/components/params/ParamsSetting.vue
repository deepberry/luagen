<!--
 * @Author: iRuxu
 * @Date: 2022-07-01 15:01:26
 * @LastEditTime: 2022-07-04 11:26:31
 * @Description: 参数设定
-->
<template>
    <div class="m-params-setting">
        <div class="u-title m-subtitle">
            <span class="u-title-label"
                ><el-icon class="u-title-icon"><SetUp /></el-icon>参数设定</span
            >
            <span class="u-title-folder" @click="toggleParams">
                <el-icon class="u-title-icon" v-show="!collapsed"><ArrowDown /></el-icon>
                <el-icon class="u-title-icon" v-show="collapsed"><ArrowUp /></el-icon>
            </span>
        </div>
        <ul class="u-list" v-show="collapsed">
            <li class="u-item" v-for="item in params" :key="item.label">
                <span class="u-label">{{ item.label }}</span>
                <el-input class="u-input" v-model="item.param" size="small">
                    <template #prepend v-if="item.type == 'handler' || item.type == 'return'">{{
                        item.type == "handler" ? "$" : "_"
                    }}</template>
                </el-input>
                <el-radio-group v-model="item.type" size="small">
                    <el-radio-button label="handler">句柄</el-radio-button>
                    <el-radio-button label="condition">条件</el-radio-button>
                    <el-radio-button label="return">返回值</el-radio-button>
                </el-radio-group>
            </li>
        </ul>
    </div>
</template>

<script>
import { markRaw } from "vue";
import { SetUp, ArrowDown, ArrowUp } from "@element-plus/icons-vue";
export default {
    name: "ParamsSetting",
    components: {
        SetUp: markRaw(SetUp),
        ArrowDown: markRaw(ArrowDown),
        ArrowUp: markRaw(ArrowUp),
    },
    watch: {
        // 监听导入数据变化，根据表头以更新参数列表
        "$store.state.inputHeader": function (list) {
            this.params = list.map((item, i) => {
                return this.buildParam(item, i);
            });
        },
        // 提交keymap至store以供转换器使用
        keymap: function (val) {
            this.$store.commit("set", {
                key: "keymap",
                val,
            });
        },
    },
    data: function () {
        return {
            // 默认展示参数
            params: [
                { label: "设备", param: "", type: "handler" },
                { label: "判断开始时间（时）", param: "", type: "handler" },
                { label: "判断终止时间（时）", param: "", type: "handler" },
                { label: "判断间隔（秒）", param: "", type: "condition" },
                { label: "是雪", param: "", type: "condition" },
                { label: "风速m/s", param: "", type: "condition" },
                { label: "温度℃", param: "", type: "condition" },
                { label: "湿度%", param: "", type: "condition" },
                { label: "光照umol/㎡.s", param: "", type: "condition" },
                { label: "动作（百分比%）", param: "", type: "return" },
                { label: "动作（秒）", param: "", type: "return" },
            ],
            // 参数前缀约定
            prefixMap: {
                handler: "$",
                condition: "",
                return: "_",
            },
            // 折叠开关
            collapsed: true,
        };
    },
    computed: {
        // 生成解析器自定义keymap格式
        keymap: function () {
            let keymap = {};
            this.params.forEach((item) => {
                keymap[item.label] = this.prefixMap[item.type] + item.param;
            });
            return keymap;
        },
        // 表头长度
        headerLength: function () {
            return this.$store.state.inputHeader.length;
        },
    },
    methods: {
        // 折叠面板
        toggleParams: function () {
            this.collapsed = !this.collapsed;
        },
        // 自动命名
        buildParam: function (label, i) {
            const startASCII = 96; //97a~122z
            let item = {
                label,
                param: "",
                type: "",
            };
            if (i == 0) {
                item.param = "h";
                item.type = "handler";
            } else if (i == this.headerLength - 1) {
                item.param = "r";
                item.type = "return";
            } else {
                item.param = String.fromCharCode(startASCII + i);
                item.type = "condition";
            }
            return item;
        },
    },
};
</script>

<style lang="less">
.m-params-setting {
    .u-title {
        .u-title-folder {
            .pointer;
        }
    }
    .u-list {
        list-style: none;
        .mt(10px);
        // padding: 10px 0;
        // display:flex;
        // flex-wrap: wrap;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 10px;
        // grid-auto-flow:column;
    }
    .u-item {
        margin: 0 0 5px 0;
        padding: 0 10px;
        .fz(12px);
        // .w(50%);
        flex-basis: 50%;
        flex-grow: 1;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        gap: 10px;
        justify-content: space-between;
        white-space: nowrap;

        .el-radio-group {
            flex-wrap: nowrap;
        }

        & > * {
            flex: 1;
        }

        .el-input-group__prepend {
            padding: 0 10px;
        }
    }
}
</style>
