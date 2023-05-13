<template>
    <p>
        <span class="font-bold mr-2"> {{ title }}: </span>
        <slot />
    </p>
</template>

<script setup lang="ts">

interface TitleProp {
    title?: string;
}

const { title } = defineProps<TitleProp>();
</script>
