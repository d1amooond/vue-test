<template>
    <div class="button">
        <button
                v-if="handler"
                @click.prevent="handler"
                :style="`background: ${color}`">{{text}}
        </button>
        <button
                v-else
                :style="`background: ${color}`">{{text}}
        </button>
    </div>
</template>

<script>
    export default {
        props: {
            text: String,
            color: String,
            handler: Function
        }
    }
</script>

<style scoped>
    .button {
        width: 200px;
        height: 40px;
    }
    .button button {
        width: 100%;
        height: 100%;
        background: #76d4ff;
        border: none;
        border-radius: 10px;
        box-shadow: black;
    }
</style>