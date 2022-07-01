/*
 * @Author: iRuxu
 * @Date: 2022-06-27 15:29:53
 * @LastEditTime: 2022-07-01 15:19:56
 * @Description:
 */

import pkg from "../../package.json";

// 1.Dependency
import { createStore } from "vuex";

// 2.Store
const store = {
    state: {
        version: pkg.defaultVersion || "v1",

        inputHeader: [],
        params: {},
        order: [],
    },
    mutations: {
        set: (state, payload) => {
            state[payload.key] = payload.val;
        },
    },
    getters: {
        get: (state) => (key) => {
            return state[key];
        },
    },
    actions: {},
};

export default createStore(store);
