<!--
 * @Author: iRuxu
 * @Date: 2022-06-30 16:59:28
 * @LastEditTime: 2022-06-30 17:58:59
 * @Description:表格展示（仅读）
-->
<template>
    <div class="m-file-display">
        <div class="u-table" v-html="html"></div>
    </div>
</template>

<script>
const XLSX = require("xlsx");
export default {
    name: "FileDisplay",
    props: ["raw"],
    components: {},
    data: function () {
        return {
            html: "",
        };
    },
    computed: {},
    watch: {
        raw: {
            immediate: true,
            handler: function (raw) {
                if (raw) {
                    this.render(raw);
                }
            },
        },
    },
    methods: {
        render: function (raw) {
            const fr = new FileReader();
            fr.readAsArrayBuffer(raw);

            const vm = this;
            fr.onload = function (e) {
                const data = e.target.result;
                const wb = XLSX.read(data, { type: "binary" });
                const ws = wb.Sheets[wb.SheetNames[0]];
                const html = XLSX.utils.sheet_to_html(ws);
                vm.html = html;
            };
        },
    },
    created: function () {},
    mounted: function () {},
};
</script>

<style lang="less">
.m-file-display {
    .u-table {
        max-height: calc(100vh - 200px);
        overflow-y: scroll;
        &::-webkit-scrollbar {
            width: 4px;
        }
        &::-webkit-scrollbar-track,
        &::-webkit-scrollbar-track-piece {
            background-color: #fafafa;
            border-radius: 6px;
        }
        &::-webkit-scrollbar-thumb {
            background-color: #eee;
            border-radius: 6px;
        }
        &::-webkit-scrollbar-button,
        &::-webkit-scrollbar-corner,
        &::-webkit-resizer {
            display: none;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            .fz(12px);
        }
        td,
        th {
            border: 1px solid #eee;
            padding: 2px 5px;
            .x;
        }
    }
}
</style>
