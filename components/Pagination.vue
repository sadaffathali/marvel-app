<template>
    <ul class="flex flex-row gap-4 flex-wrap justify-center col-span-full items-center" v-if="totalPages > 0">
        <template v-for="page in visiblePages" :key="page">
            <li class="cursor-pointer" :class="{ 'font-bold text-indigo-600': page === curPage }" @click="setPage(page)">
                <span>{{ page }}</span>
            </li>
        </template>
        <li class="text-gray-500 text-sm">
            ({{ curPage }} / {{ totalPages }})
        </li>

    </ul>
</template>
<script setup>
import { computed, ref, defineEmits } from 'vue'

const emit = defineEmits(['update'])

const props = defineProps({
    currentPage: {
        type: Number,
        default: 1
    },
    total: {
        type: Number,
        required: true
    }
})

const visiblePages = computed(() => {
    const pages = []
    const start = Math.max(1, curPage.value - 5)
    const end = Math.min(totalPages.value, curPage.value + 5)
    for (let i = start; i <= end; i++) {
        pages.push(i)
    }
    return pages
})


const curPage = ref(props.currentPage)

const totalPages = computed(() => {
    return Math.ceil(props.total / 20);
})

const prevPage = () => {
    curPage.value--
    emit('update', curPage.value)
}

const nextPage = () => {
    curPage.value++
    emit('update', curPage.value)
}

const setPage = (page) => {
    curPage.value = page;
    emit('update', page)
}

defineExpose({
    totalPages,
    prevPage,
    nextPage,
    setPage
})
</script>