<!--
 * @Author: iRuxu
 * @Date: 2022-07-01 15:01:26
 * @LastEditTime: 2022-07-01 16:49:37
 * @Description: 条件参数排序
-->
<template>
    <div class="m-params-order">
        <div class="u-title m-subtitle">
            <span class="u-title-label"
                ><el-icon class="u-title-icon"><Sort /></el-icon>优先级</span
            >
        </div>
        <ul class="u-list">
            <li v-for="param in params" :key="param">{{ param }}</li>
        </ul>
    </div>
</template>

<script>
import { markRaw } from "vue";
import { Sort } from "@element-plus/icons-vue";
import { map } from "lodash";
export default {
    name: "ParamsOrder",
    props: [],
    components: { Sort: markRaw(Sort) },
    data: function () {
        return {};
    },
    computed: {
        params: function () {
            let list = [];
            map(this.$store.state.keymap, (key) => {
                list.push(key);
            });
            return list;
        },
    },
    watch: {},
    methods: {},
};
</script>

<style lang="less">
.m-params-order {
    .u-title-icon {
        transform: rotate(90deg);
    }
}
</style>
