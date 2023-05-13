<template>
    <div class="flex flex-col h-screen justify-center items-center gap-4">
        <h1 class="text-8xl"> {{ error.statusCode }} </h1>
        <p class="text-2xl text-gray-700">
            {{ error.message }}
        </p>
        <button class="rounded-lg bg-indigo-600 text-gray-100 py-4 px-6 " @click="handleError">
            Back to Home
        </button>
    </div>
</template>

<script setup>
const handleError = () => {
    navigateTo('/')
}
const error = useError()
</script>