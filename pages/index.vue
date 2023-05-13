<template>
    <div class="grid lg:grid-cols-4 gap-8 xl:max-w-screen-lg m-auto">

        <CharachterCard v-for="charachter in data.data.results" :key="charachter.id" :charachter="charachter">
        </CharachterCard>

        <Pagination :currentPage="page" @update="UpdatePage" :total="data.data.total" />

    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
const route = useRoute();

let data = await useFetchList();
const page = ref(1)
const UpdatePage = (event) => {
    page.value = event
}

watch(page, async (newPage) => {
    data = await useFetchList(newPage);
})
</script>