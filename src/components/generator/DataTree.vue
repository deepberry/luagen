<!--
 * @Author: iRuxu
 * @Date: 2022-07-01 18:12:44
 * @LastEditTime: 2022-07-04 12:36:10
 * @Description:json tree
-->
<template>
    <div class="m-data-tree">
        <highlightjs language="json" :code="json" />
    </div>
</template>

<script>
import parse from "@deepberry/luagen-parser/lib/parse.js";
export default {
    name: "DataTree",
    props: [],
    components: {},
    data: function () {
        return {
            json: "",
        };
    },
    computed: {
        raw: function () {
            return this.$store.state.raw;
        },
        keymap: function () {
            return this.$store.state.keymap;
        },
    },
    watch: {
        keymap: function () {
            this.parseToJson(this.raw);
        },
    },
    methods: {
        parseToJson: function () {
            parse(this.raw, {
                keymap: this.keymap,
            }).then((result) => {
                this.json = result.toJSON();
            });
        },
    },
    mounted: function () {
        this.parseToJson(this.raw);
    },
};
</script>

<style lang="less">
.m-data-tree {
    & > pre {
        margin: 0;
    }
}
</style>
