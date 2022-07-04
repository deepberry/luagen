<!--
 * @Author: iRuxu
 * @Date: 2022-07-01 18:12:44
 * @LastEditTime: 2022-07-04 11:38:21
 * @Description:json tree
-->
<template>
    <div class="m-data-tree">{{ json }}</div>
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
        raw: function (raw) {
            raw && this.parseToJson(raw);
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
    created: function () {},
    mounted: function () {},
};
</script>
