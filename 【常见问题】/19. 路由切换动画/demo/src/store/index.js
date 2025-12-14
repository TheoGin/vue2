import Vuex from 'vuex';
import Vue from 'vue';
import switchTransition from '@/store/switchTransition';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    switchTransition,
  },
});
