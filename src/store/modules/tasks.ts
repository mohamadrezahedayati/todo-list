import { useStorage } from '@vueuse/core'
const items = useStorage('todo-list-storage', [])

const state = {
    items,
    searchValue: ''
}

const getters = {
    getItemById: (state) => (id) => {
        return state.items.find(item => item.id === id)
    },
    getIndexItemById: (state) => (id) => {
        return state.items.findIndex(item => item.id === id)
    },
    getFiltredItems: (state) => {
        return state.searchValue ? state.items.filter(item => item.title.includes(state.searchValue)) : state.items
    }
}

const mutations = {
    SET_NEW_ITEM(state, newValue) {
        state.items.push(newValue)
    },
    UPDATE_ITEM(state, { getters, item }) {
        const oldItem = getters.getItemById(item.id);
        Object.assign(oldItem, item)
    },
    REMOVE_ITEM(state, { getters, item }) {
        const indexItem = getters.getIndexItemById(item.id);
        state.items.splice(indexItem, 1);
    },
    SET_SEARCH_VALUE(state, searchValue) {
        state.searchValue = searchValue
    }
}

const actions = {
    addItem({ commit }, item) {
        commit('SET_NEW_ITEM', item)
    },
    updateItem({ commit, getters }, item) {
        commit('UPDATE_ITEM', { item, getters })
    },
    removeItem({ commit, getters }, item) {
        commit('REMOVE_ITEM', { item, getters })
    },
    searchItem({ commit }, searchValue) {
        commit('SET_SEARCH_VALUE', searchValue)
    }
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}