/**
 * Created by nnie on 2018/1/25.
 **/
const common = {
  state: {
    ifShowLoading: false
  },
  mutations: {
    SET_LOADING_FLAG: (state, flag) => {
      state.ifShowLoading = flag
    }
  },
  actions: {
    GET_LOADING_FLAG: (context, flag) => {
      context.commit('SET_LOADING_FLAG', flag)
    }
  }
}

export default common
