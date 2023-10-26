import { $titan2 } from "@deepberry/common/js/https";

export function saveCodeSnippet(data) {
    return $titan2.post(`/user/codesnippet`, data);
}
export function getCodeSnippetGroup(params) {
    return $titan2.get(`/user/codesnippet/group`, {
        params,
    });
}
