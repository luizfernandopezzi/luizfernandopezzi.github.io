import Vuex from 'vuex'
import Vue from 'vue'
import db from "./db.json";

Vue.use(Vuex)

const state = {
  language: db.portuguese,
};

const getters = {
  getterLanguage: (state) => state.language,
};

const actions = {
  translateToEnglish({ commit }) {
    commit("setLanguage", db.english);
  },

  translateToPortuguese({ commit }) {
    commit("setLanguage", db.portuguese);
  },
};

const mutations = {
  setLanguage: (state, language) => (state.language = language),
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
})