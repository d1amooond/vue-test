<template>
    <div class="todoItem">
        <div class="note">
            <div class="icon">
                <font-awesome-icon icon="anchor" />
            </div>
            <div @click="todos = !todos" class="title">
                {{title}}
            </div>
            <div class="icon">
                <font-awesome-icon
                        @mouseout="editColor = 'gray'"
                        @mouseover="editColor = 'white'"
                        @click="editNote"
                        icon="edit"
                        :color="editColor"/>
            </div>
            <div class="icon">
                <font-awesome-icon
                        icon="backspace"
                        @mouseout="deleteColor = 'red'"
                        @mouseover="deleteColor = 'white'"
                        @click="deleteNote"
                        :color="deleteColor" />
            </div>
            <div>

            </div>
        </div>
        <div class="todoList" v-if="todos">
            <div class="todo" v-for="todoItem in todo" :key="todoItem.id">
                <div class="icon">
                    <font-awesome-icon v-if="todoItem.completed" icon="check" color="lightgreen"/>
                </div>
                <div>
                    {{todoItem.title}}
                </div>
            </div>
            <div v-if="more"
                 class="more"
                 :style="`color: ${moreColor}`"
                 @click="loadMore"
                 @mouseout="moreColor = 'black'"
                 @mouseover="moreColor = 'white'">...</div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            loadMore() {
                this.$emit('loadMore', 'loadMore')
            },
            deleteNote() {
                this.$emit('deleteNote', 'Do you really want to delete note?', this.id)
            },
            editNote() {
                this.$router.push({ name: 'note', params: { todo: this.todo, title: this.title, id: this.id } })
            }
        },
        props: {
            title: String,
            todo: Array,
            more: Boolean,
            id: Number
        },
        data() {
            return {
                todos: false,
                editColor: 'gray',
                deleteColor: 'red',
                moreColor: 'black'
            }
        }
    }
</script>

<style scoped>
    .todoItem {
        width: 500px;
        background: #2fb5ff;
        border-radius: 10px;
        border: 1px solid white;
        padding: 20px;
        font-size: 20px;
    }
    .title {
        cursor: pointer;
        width: 90%;
        padding: 10px;
    }
    .title:hover {
        background: #60e6ff;
    }
    .note {
        display: flex;
        align-items: center;
    }
    .icon {
        width: 10%;
    }
    .todo {
        display: flex;
    }
    .todoList {
        padding: 20px;
    }
    .more {
        cursor: pointer;
    }
</style>