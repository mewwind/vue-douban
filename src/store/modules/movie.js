import * as type from '../mutation-types'
const mutations = {
  [type.CHANGE_MOVIES_TAB](state, tab) {
    state.tab = tab;
  }
}
const actions = {
  [type.CHANGE_MOVIES_TAB](context, tab) {
    context.commit(type.CHANGE_MOVIES_TAB, tab);
  }
}

export default {
  actions,
  mutations,
  state: {
    tab: 'in_theaters'
  }
}