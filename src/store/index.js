import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        notes: []
    },
    mutations: {
        loadNotes(state) {
            state.notes = JSON.parse(localStorage.getItem('notes'));
        },
        addNote(state, payload) {
            state.notes = [...state.notes, payload];
            localStorage.setItem('notes', JSON.stringify(state.notes))
        },
        deleteNote(state, payload) {
            state.notes = state.notes.filter(el => el.id !== payload.id)
            localStorage.setItem('notes', JSON.stringify(state.notes))
        },
        editNote(state, payload) {
            state.notes = state.notes.map(el => el.id === payload.id ? payload : el)
            localStorage.setItem('notes', JSON.stringify(state.notes))
        },
        updateNotes(state, payload) {
            state.notes = payload;
        }
    }
})