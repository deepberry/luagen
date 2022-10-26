import { $cms } from "@deepberry/common/js/https";

const $ = $cms({
    headers: {
        Authorization: "Bearer " + localStorage.getItem("LUA_GEN_TOKEN"),
    },
});

export function saveCodesnippet(data) {
    return $.post(`/api/cms/titan/user/codesnippet`, data);
}
export function getCodesnippetGroup(params) {
    return $.get(`/api/cms/titan/user/codesnippet-group`, {
        params,
    });
}
