<template>
    <div class="modalWrapper">
        <div class="back" @click="handleModal">

        </div>
        <div class="modal">
            <h3>{{ text }}</h3>
            <button-item :handler="handleAgree" text="Yes" color="blue"/>
            <button-item :handler="handleModal" text="No" color="red"/>
        </div>
    </div>
</template>

<script>
    import Button from '../Button'

    export default {
        props: {
            text: String
        },
        components: {
            'button-item': Button
        },
        methods: {
            handleModal() {
                this.$emit('handleModal')
            },
            handleAgree() {
                this.$emit('handleAgree')
                this.$emit('handleModal')
            },
        }
    }
</script>

<style scoped>
    .modalWrapper {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .back {
        background: rgba(0, 0, 0, .5);
        height: 100%;
        width: 100%;
        position: absolute;
    }
    .modal {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        background: white;
        padding: 30px;
    }
    .modal div {
        margin: 3px auto;
    }
</style>