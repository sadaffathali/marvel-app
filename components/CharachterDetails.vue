<template>
    <CharachterDetail title="Description" v-if="data.description">
        {{ data.description }}
    </CharachterDetail>
    <CharachterDetail title="Comics">
        <ul class="list-disc pl-8">
            <li v-for="(comic, index) in data.comics.items" :key="index">
                {{ comic.name }}
            </li>
        </ul>
    </CharachterDetail>
    <CharachterDetail title="Series">
        <ul class="list-disc pl-8">
            <li v-for="(serie, index) in data.series.items" :key="index">
                {{ serie.name }}
            </li>
        </ul>
    </CharachterDetail>
</template>

<script setup lang="ts">

interface CharacterData {
    description: string;
    comics: {
        items: {
            name: string;
        }[];
    };
    series: {
        items: {
            name: string;
        }[];
    };
}

const props = defineProps<{
    data: CharacterData;
}>();

const { data } = props;
</script>