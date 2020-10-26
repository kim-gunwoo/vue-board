import * as api from "../api";

const actions = {
  FETCH_BOARDS({ commit }) {
    return api.board.fetch().then(data => {
      commit("SET_BOARDS", data.boards);
    });
  },
  FETCH_BOARD({ commit }, { id }) {
    return api.board.fetch(id).then(data => {
      commit("SET_BOARD", data.board);
    });
  },
  ADD_BOARD(_, { title }) {
    return api.board.create(title).then(data => data.item);
  },
  UPDATE_BOARD({ state, dispatch }, { id, board }) {
    console.log(`UPDATE_BORAD`, board);
    return api.board.update(id, board).then(_ => {
      dispatch("FETCH_BOARD", { id: state.board.bsid });
    });
  },
  DELETE_BOARD({ state, dispatch }, { id }) {
    return api.board.destroy(id).then(_ => dispatch("FETCH_BOARDS"));
  }
};

export default actions;
