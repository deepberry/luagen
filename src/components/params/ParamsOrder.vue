<!--
 * @Author: iRuxu
 * @Date: 2022-07-01 15:01:26
 * @LastEditTime: 2022-07-04 15:31:38
 * @Description: 条件参数排序
-->
<template>
    <div class="m-params-order">
        <div class="u-title m-subtitle">
            <span class="u-title-label"
                ><el-icon class="u-title-icon"><Sort /></el-icon>优先级
                <em class="u-tip">（自定义排序以提升条件分支执行效率）</em>
            </span>
        </div>
        <ul class="u-list" v-show="order.length">
            <draggable v-model="params" item-key="id">
                <template #item="{ element }">
                    <el-button type="primary" plain class="u-item" size="small">{{ element.label }}</el-button>
                </template>
            </draggable>
        </ul>
        <div class="u-null" v-show="!order.length">...</div>
    </div>
</template>

<script>
import { markRaw } from "vue";
import { Sort } from "@element-plus/icons-vue";
import { map } from "lodash";
import draggable from "vuedraggable";
export default {
    name: "ParamsOrder",
    components: {
        Sort: markRaw(Sort),
        draggable,
    },
    data: function () {
        return {
            params: [],
        };
    },
    computed: {
        // 仅对条件参数排序
        conditionParams: function () {
            let list = [];
            map(this.$store.state.keymap, (key, label) => {
                if (!key.startsWith("_") && !key.startsWith("$"))
                    list.push({
                        key,
                        label,
                    });
            });
            return list;
        },
        // 排序后的参数列表
        order: function () {
            return this.params.map((item) => {
                return item.key;
            });
        },
    },
    watch: {
        // 监听导入数据变化，根据表头以更新参数列表
        conditionParams: function () {
            this.params = this.conditionParams;
        },
        // 提交至store
        order: function (val) {
            this.$store.commit("set", {
                key: "order",
                val: val,
            });
        },
    },
    methods: {},
};
</script>

<style lang="less">
.m-params-order {
    .u-title {
        .mt(10px);
    }
    .u-title-icon {
        transform: rotate(90deg);
    }
    .u-list {
        padding: 10px 0;
    }
    .u-item {
        cursor: move;
        margin-bottom: 5px;
        margin-right: 10px;
        margin-left: 0;
    }
    .u-null {
        .x;
        color: #999;
        padding: 10px;
    }
}
</style>
