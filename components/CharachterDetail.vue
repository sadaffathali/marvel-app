<template>
    <p>
        <span class="font-bold mr-2"> {{ title }}: </span>
        <slot />
    </p>
</template>

<script setup>
const { title } = defineProps({
    title: {
        required: false,
        type: String
    }
})
</script>