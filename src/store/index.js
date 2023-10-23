/*
 * @Author: iRuxu
 * @Date: 2022-06-27 15:29:53
 * @LastEditTime: 2022-07-07 13:23:24
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
        lua: "",
        json: "",
        comment: "",
        table: "",
        _comment: "", //不包含table部分
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
            state.lua = "";
            state.json = "";
            state.comment = "";
            state.table = "";
            state._comment = "";
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
