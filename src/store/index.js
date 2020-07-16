import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // boards = tables
    boards: [],
    lists: [
      // {id: 1.1, children: ['1.1.1']}
    ],
    cards: [
      // {id: '1.1.1'}
    ]
    // boards: [],
    // items: [],
    // lists: []
    // вручную лучше не добвлять в localStorage, см. тут https://vuex.vuejs.org/api/#subscribe
    // boards: JSON.parse(localStorage.getItem('boards') || '[]'),
    //  items: JSON.parse(localStorage.getItem('items') || '[]'),
    //  lists: JSON.parse(localStorage.getItem('lists') || '[]')
  },
  mutations: {
    NEW_ITEM(state, item) {
      console.log(item)
      // console.log(state.lists)
      const list = state.lists.find(e => e.id === item.listId)
      const cards = state.cards
      // const card = { id: item.id, itemList: item.itemList }
      cards.push(item)
      //  console.log(state.cards)
      //  console.log(list.children.card[0])
      list.children.push(item)
      console.log(list.children)
    },

    ADD_BOARD(state, board) {
      const boards = state.boards
      // const board = { id: Date.now(), children: [], title: this.title}
      boards.push(board)
    },
    ADD_CARD(state, listId) {
      // const list = state.lists.find(e => e.id === listId)
      // const cards = state.cards
      // const card = { id: Date.now() }
      // cards.push(card)
      // list.children.push(card.id)
    },
    ADD_LIST(state, CreateList) {
      const board = state.boards.find(e => e.id === CreateList.boardId)
      const lists = state.lists
      const list = { id: CreateList.id, children: CreateList.children, title: CreateList.title }
      lists.push(list)
      // board.children.push(CreateList.id)
      board.children.push(list)

      // const table = state.tables.find(e => e.id === tableId)
      // const lists = state.lists
      // const list = { id: Date.now(), children: [] }
      // lists.push( list )
      // table.children.push( list.id )
    },
  },
  actions: {
    addBoard({
      commit
    }, board) {
      commit('ADD_BOARD', board)
    },
    AddList({
      commit
    }, CreateList) {
      commit('ADD_LIST', CreateList)
    },
    createItemListt({
      commit
    }, item) {
      commit('NEW_ITEM', item)
    }
  },
  getters: {
    getBoards: s => s.boards,
    getLists: s => s.lists,
    getCards: s => s.lists.children,
    getBoardsById: s => id => s.boards.find(t => t.id === id),
    getListById: s => id => s.lists.find(e => e.id === id),
    getCardById: s => id => s.cards.find(e => e.id === id)
  },
  modules: {}
})