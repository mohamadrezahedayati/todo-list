const state = {
    items: []
}

const getters = {
    getItemById: (state) => (id) => {
        return state.items.find(item => item.id === id)
    }
}

const mutations = {
    SET_NEW_ITEM(state, newValue) {
        state.items.push(newValue)
    },
    UPDATE_ITEM(state, { getters, item }) {
        const oldItem = getters.getItemById(item.id);
        Object.assign(oldItem, item)
    }
}

const actions = {
    addItem({ commit }, item) {
        commit('SET_NEW_ITEM', item)
    },
    updateItem({ commit, getters }, item) {
        commit('UPDATE_ITEM', { item, getters })
    }
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}