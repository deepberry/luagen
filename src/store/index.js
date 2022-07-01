/*
 * @Author: iRuxu
 * @Date: 2022-06-27 15:29:53
 * @LastEditTime: 2022-07-01 18:38:18
 * @Description:
 */

import pkg from "../../package.json";

// 1.Dependency
import { createStore } from "vuex";

// 2.Store
const store = {
    state: {
        version: pkg.defaultVersion || "v1",

        // input
        file: "",
        raw: "",

        // params
        inputHeader: [],
        keymap: {},
        order: [],

        // output
    },
    mutations: {
        set: (state, payload) => {
            state[payload.key] = payload.val;
        },
        bulk: (state, payload) => {
            for (let item of payload) {
                state[item.key] = item.val;
            }
        },
        empty: (state) => {
            state.file = "";
            state.raw = "";
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
