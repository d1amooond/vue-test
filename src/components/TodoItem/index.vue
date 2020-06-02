<template>
    <div class="todoItemBlock">
        <div class="todoInput">
            <input type="text" :value="title" @change="changeTodo($event)" />
        </div>
        <div class="todoCheckbox">
            <input type="checkbox" :checked="completed" @change="changeCheckbox" />
        </div>

    </div>
</template>

<script>
    export default {
        props: {
            title: String,
            completed: Boolean,
            id: Number
        },
        methods: {
            changeTodo(event) {
                this.$emit('changeTodo', this.id, event.target.value)
            },
            changeCheckbox() {
                this.$emit('changeCheckbox', this.id)
            }
        }
    }
</script>

<style scoped>
    .todoItemBlock {
        display: flex;
    }
    .todoItemBlock:first-child {
        width: 90%;
    }
    .todoInput {
        width: 90%;
    }
    .todoInput input {
        width: 100%;
        height: 40px;
        font-size: 20px;
    }
    .todoCheckbox {
        margin-left: 5%;
        width: 5%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .todoCheckbox input {
        width: 100%;
        height: 100%;
    }
</style>