<template>
    <div class="note">
        <change-note :titleProp="title" :todoProp="todo" :idProp="id"/>
    </div>

</template>

<script>
    import ChangeNote from '../components/ChangeNote';

    export default {
        computed: {
            title() {
                return this.$route.params.title;
            },
            todo() {
                return this.$route.params.todo;
            },
            id() {
                return this.$route.params.id;
            }
        },
        components: {
            'change-note': ChangeNote
        }
    }
</script>

<style scoped>

</style>