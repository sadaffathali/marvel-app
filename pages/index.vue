<template>
    <div class="grid lg:grid-cols-4 gap-8 xl:max-w-screen-lg m-auto">

        <input type="text" v-model.trim="search"
            class="col-span-full lg:w-8/12 mx-auto p-2 border border-gray-400 rounded-md">
        <template v-if="data.data.results.length > 0">
            <CharachterCard v-for="charachter in data.data.results" :key="charachter.id" :charachter="charachter">
            </CharachterCard>
        </template>
        <EmptyMsg v-else />


        <Pagination :currentPage="page" @update="UpdatePage" :total="data.data.total" />

    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
const route = useRoute();
const search = ref('')
let data = await useFetchList();
const page = ref(1)
const UpdatePage = (event) => {
    page.value = event
}

watch(page, async (newPage) => {
    data = await useFetchList({ page: newPage });
})
watch(search, async (query) => {

    data = await useFetchList({ name: query.toLowerCase() });
})

</script>