<!--
 * @Author: iRuxu
 * @Date: 2022-06-30 16:59:28
 * @LastEditTime: 2022-07-04 12:32:25
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
    data: function () {
        return {
            html: "",
        };
    },
    computed: {
        file: function () {
            return this.$store.state.file;
        },
    },
    watch: {
        file: {
            immediate: true,
            handler: function (file) {
                if (file) {
                    this.render(file);
                }
            },
        },
    },
    methods: {
        // 渲染html
        render: function (file) {
            // 读取文件对象
            const fr = new FileReader();
            fr.readAsArrayBuffer(file);

            const vm = this;
            fr.onload = function (e) {
                // 提交原始数据
                const data = e.target.result;
                vm.$store.commit("set", { key: "raw", val: data });

                // 渲染Html
                const wb = XLSX.read(data, { type: "binary" });
                const ws = wb.Sheets[wb.SheetNames[0]];
                const html = XLSX.utils.sheet_to_html(ws);
                vm.html = html;
                vm.extract(ws);
            };
        },
        // 提取表头
        extract: function (sheet) {
            var headers = [];
            var range = XLSX.utils.decode_range(sheet["!ref"]);
            var C,
                R = range.s.r; /* start in the first row */
            /* walk every column in the range */
            for (C = range.s.c; C <= range.e.c; ++C) {
                var cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })]; /* find the cell in the first row */

                var hdr = "UNKNOWN " + C; // <-- replace with your desired default
                if (cell && cell.t) hdr = XLSX.utils.format_cell(cell);

                headers.push(hdr);
            }
            this.$store.commit("set", {
                key: "inputHeader",
                val: headers,
            });
        },
    },
    created: function () {},
    mounted: function () {},
};
</script>

<style lang="less">
.m-file-display {
    border-bottom: 1px solid #eee;
    border-right: 1px solid #eee;
    flex-shrink: 1;
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
}
.m-file-display {
    .u-table {
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
