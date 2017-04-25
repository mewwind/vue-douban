import * as type from '../mutation-types'
import * as api from './api'

const mutations = {
  [type.CHANGE_MOVIES_TAB](state, tab) {
    state.tab = tab;
  },
  [type.FETCH_MOVIES](state, payload) {
    state[payload.type].subjects = payload.subjects;
  },
  [type.CHANGE_LOADING_STATUS](state, payload) {
    state.isLoading = payload.isLoading;
  }
}
const actions = {
  [type.CHANGE_MOVIES_TAB](context, tab) {
    context.commit(type.CHANGE_MOVIES_TAB, tab)
  },
  [type.FETCH_MOVIES](context, payload) {
    context.commit(type.CHANGE_LOADING_STATUS, {isLoading: true});
    api.fetchMovies(payload.type)
      .then(data => {
        context.commit(type.FETCH_MOVIES, {
          type: payload.type,
          subjects: data.subjects
        });
        context.commit(type.CHANGE_LOADING_STATUS, {isLoading: false});
      })
  }
}

export default {
  actions,
  mutations,
  state: {
    'in_theaters': {
      subjects: []
    },
    'coming_soon': {
      subjects: []
    },
    'isLoading': false,
    'tab': 'in_theaters'
  }
}