import { $cms } from "@deepberry/common/js/https";

const $ = $cms({
    headers: {
        Authorization: "Bearer " + localStorage.getItem("TITAN_TOKEN"),
    },
});

export function saveCodeSnippet(data) {
    return $.post(`/api/cms/titan/user/codesnippet`, data);
}
export function getCodeSnippetGroup(params) {
    return $.get(`/api/cms/titan/user/codesnippet-group`, {
        params,
    });
}
