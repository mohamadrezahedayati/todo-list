const state = {
    items: []
}

const getters = {}

const mutations = {
    SET_NEW_ITEM(state, newValue) {
        state.items.push(newValue)
    }
}

const actions = {
    addItem({ commit }, item) {
        commit('SET_NEW_ITEM', item)
    }
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}