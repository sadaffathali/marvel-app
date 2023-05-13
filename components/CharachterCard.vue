<template>
    <div class="flex flex-col gap-3">
        <img :src="`${props.charachter.thumbnail.path}.${props.charachter.thumbnail.extension}`"
            class="aspect-video object-cover" />
        <h2 class="font-medium text-indigo-900">
            {{ props.charachter.name }}
        </h2>
    </div>
</template>

<script setup lang="ts">

interface CharacterProps {
    charachter: {
        name: string;
        thumbnail: {
            path: string;
            extension: string;
        };
    };
}

const props = defineProps<CharacterProps>();
</script>