export default {
  namespaced: true,
  state: {
    direction: 'left',
  },
  mutations: {
    changeDirection(state, newDirection) {
      state.direction = newDirection;
    },
  },
};
