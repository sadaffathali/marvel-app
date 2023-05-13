<template>
    <nuxt-link :to="`/charachter/${charachter.id}`" class="flex flex-col gap-3">
        <nuxt-img format="webp" loading="lazy" :src="`${charachter.thumbnail.path}.${charachter.thumbnail.extension}`"
            class="aspect-video object-cover rounded-md shadow-lg" :alt="charachter.name" />
        <h2 class="font-medium text-indigo-900">
            {{ charachter.name }}
        </h2>
    </nuxt-link>
</template>

<script setup lang="ts">

interface CharacterProps {
    charachter: {
        name: string;
        id: Number | String,
        thumbnail: {
            path: string;
            extension: string;
        };
    };
}

const { charachter } = defineProps<CharacterProps>();
</script>