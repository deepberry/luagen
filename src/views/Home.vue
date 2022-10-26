<template>
    <div></div>
</template>

<script>
export default {
    name: "homeIndex",
    beforeRouteEnter(to) {
        if (to.query.token) localStorage.setItem("LUA_GEN_TOKEN", to.query.token);
        return { name: "v1", params: { token: to.query.token } };
    },
};
</script>
