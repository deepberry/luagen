import { $titan2 } from "@deepberry/common/js/https";

export function saveCodeSnippet(data) {
    return $titan2().post(`/api/titan/user/codesnippet`, data);
}
export function getCodeSnippetGroup() {
    return $titan2().get(`/api/titan/user/codesnippet/group`);
}
