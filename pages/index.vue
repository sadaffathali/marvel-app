<template>
    <div class="grid lg:grid-cols-4 gap-8 xl:max-w-screen-lg m-auto">

        <CharachterCard v-for="charachter in data.data.results" :key="charachter.id" :charachter="charachter">
        </CharachterCard>

    </div>
</template>

<script setup>

const data = await useFetchList();


</script>