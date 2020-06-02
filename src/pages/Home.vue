<template>
    <div class="home">
        <h2 class="home_h2">Your Notes</h2>
        <router-link to="/note">
            <home-button class="button" color="lightblue" :text="'Add Item'"/>
        </router-link>
        <modal
                :text="modalText"
                @handleAgree="modalHandler"
                @handleModal="handleModal"
                v-if="modal" />
        <draggable v-model='notes' group="people" @start="drag=true" @end="drag=false">
        <home-note-item
                @deleteNote="deleteNote"
                @loadMore="handleLoadMore"
                class="home_note"
                v-for="note in notes"
                :id="note.id"
                :title="note.title"
                :key="note.id"
                :more="note.todo.length > elements"
                :todo="note.todo.slice(0, elements)" />
        </draggable>
    </div>

</template>

<script>
    import Button from '../components/Button';
    import NoteItem from '../components/NoteItem';
    import Modal from '../components/Modal';
    import draggable from 'vuedraggable'

    export default {
        methods: {
                handleLoadMore() {
                    this.elements += 3;
                },
                handleModal() {
                    this.modal = !this.modal;
                },
                deleteNote(text, id) {
                    this.modalText = text;
                    this.modalHandler = () =>  {
                        this.$store.commit('deleteNote', { id: id })
                    };
                    this.handleModal();
                }
        },
        data() {
            return {
                elements: 3,
                text: 'Add Item',
                modal: false,
                modalText: '',
                modalHandler: null
            }
        },
        computed: {
                notes: {
                    get() {
                        return this.$store.state.notes
                    },
                    set(notes) {
                        this.$store.commit('updateNotes', notes)
                    }
                }
        },
        components:
            {
                'home-button': Button,
                'home-note-item': NoteItem,
                'modal': Modal,
                draggable
            }
    }
</script>

<style scoped>
    .home_h2 {
        font-size: 30px;
        font-family: Charter;
        text-align: center;
    }
    .button {
        margin: 0 auto;
    }
    .home_note {
        margin: 5px auto;
    }
    .home {
        margin: 0 auto;
    }
</style>