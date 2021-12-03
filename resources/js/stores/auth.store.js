const state = {
    isAuth: false,
    userProfile: {}, 
};
const getters = {};
const mutations = {
    SET_AUTH(state, payload) {
        state.isAuth = payload;
    },
    SET_PROFILE(state, payload) {
        state.userProfile = payload; // will update late
    }
};
const actions = {};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}