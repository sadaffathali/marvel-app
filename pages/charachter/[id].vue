<template>
    <div class="flex flex-col text-gray-700">

        <Suspense>
            <CharachterDetails :data="data.data.results[0]"></CharachterDetails>
            <template #fallback>
                Loading...
            </template>
        </Suspense>
    </div>
</template>
<script setup>

definePageMeta({
    path: "/charachter/:id",
    validate: (route) => /^\d+$/.test(route.params.id),
});
const route = useRoute();
const data = await useFetchCharachter(route.params.id);


</script>