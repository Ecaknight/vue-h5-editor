import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

// 各模块的状态管理
import user from "./modules/user";

// 全局的状态管理
const state = {};
const getters = {};
const mutations = {};
const actions = {};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    user,
  },
});
