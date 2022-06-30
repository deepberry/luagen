<!--
 * @Author: iRuxu
 * @Date: 2022-06-27 15:29:53
 * @LastEditTime: 2022-06-30 17:02:00
 * @Description:v1版本
-->
<template>
    <div class="p-v1">
        <div class="m-left">
            <template v-if="file">
                <FileMeta :file="file" @reset="reset" />
            </template>
            <template v-else>
                <UploadDrag @upload="uploadFile" />
            </template>
        </div>
        <div class="m-right"></div>
    </div>
</template>

<script>
import UploadDrag from "@/components/parser/UploadDrag.vue";
import FileMeta from "../components/parser/FileMeta.vue";
export default {
    name: "V1Home",
    components: {
        UploadDrag,
        FileMeta,
    },
    props: [],
    data: function () {
        return {
            file: "",
        };
    },
    computed: {
        raw: function () {
            return this.file?.raw;
        },
    },
    methods: {
        uploadFile: function (file) {
            this.file = file;
        },
        reset: function () {
            this.file = "";
        },
    },
    created: function () {},
};
</script>

<style scoped lang="less">
@import "@/assets/css/v1.less";
</style>
