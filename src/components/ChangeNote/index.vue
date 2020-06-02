<template>
    <div class="createNoteBlock">
        <modal-item
                v-if="modal"
                @handleModal="handleModal"
                @handleAgree="handleAgree"
                text="Do you really want to cancel your operations?" />
        <form>
            <div class="titleBlock">
                <div>Title</div>
                <input
                        type="text"
                        v-model="title"
                        placeholder="Type title of your note"
                        required />
            </div>
            <todo-item
                    class="todoItem"
                    v-for="todoItem of todo"
                    @changeTodo="changeTodo"
                    @changeCheckbox="changeCheckbox"
                    :id="todoItem.id"
                    :title="todoItem.title"
                    :key="todoItem.id"
                    :completed="todoItem.completed" />
            <button-item
                    :handler="addTodo"
                    class="buttonAdd"
                    text="Add todo"
                    color="lightgreen"/>
            <button-item
                    :handler="idProp ? editNote : createNote"
                    class="buttonCreate"
                    :text="idProp ? 'Save Note' : 'Create Note'"
                    color="lightblue" />
            <button-item
                    :handler="handleModal"
                    class="buttonCreate"
                    text="Cancel"
                    color="red" />
        </form>
    </div>
</template>

<script>
    import TodoItem from '../../components/TodoItem';
    import Button from '../Button';
    import Modal from '../Modal';


    export default {
        data() {
            return {
                title: '',
                todo: [],
                modal: false,
            }
        },
        created() {
            if (this.titleProp && this.todoProp && this.idProp) {
                this.title = this.titleProp;
                this.todo = this.todoProp;
            }   else {
                this.title = '';
                this.todo = [];
            }
        },
        props: {
            titleProp: String,
            todoProp: Array,
            idProp: Number
        },
        components: {
            'todo-item': TodoItem,
            'button-item': Button,
            'modal-item': Modal
        },
        methods: {
            handleModal() {
                this.modal = !this.modal;
            },
            handleAgree() {
                this.handleModal();
                this.$router.push('/');
            },
            addTodo() {
                console.log(this.todo, this.title)
                const id = this.todo[this.todo.length - 1] ? this.todo[this.todo.length - 1].id + 1 : 1;
                console.log(id)
                this.todo = [...this.todo, { id: id, title: '', completed: false }];
            },
            createNote() {
                const id = this.$store.state.notes[this.$store.state.notes.length - 1] ? this.$store.state.notes[this.$store.state.notes.length - 1].id + 1 : 1;
                this.$store.commit('addNote', { id: id, title: this.title, todo: this.todo })
                this.$router.push('/')
            },
            editNote() {
                this.$store.commit('editNote', { id: this.idProp, title: this.title, todo: this.todo });
                this.$router.push('/');
            },
            changeTodo(id, event) {
                this.todo = this.todo.map(el => el.id === id ? {...el, title: event} : el);
            },
            changeCheckbox(id) {
                this.todo = this.todo.map(el => el.id === id ? { ...el, completed: !el.completed } : el);
            }

        }
    }
</script>

<style scoped>
    .titleBlock {
        margin: 0 auto;
        text-align: center;
    }
    .titleBlock input {
        width: 300px;
        height: 50px;
        font-size: 25px;
    }
    .createNoteBlock {
        width: 100%;
    }
    .buttonCreate {
        margin: 0 auto;
        padding: 5px;
    }
    .buttonAdd {
        margin: 0 auto;
        padding: 5px;
    }
    .todoItem {
        margin: 7px auto;
    }
</style>