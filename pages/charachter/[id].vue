<template>
    <div>

    </div>
</template>
<script setup>
definePageMeta({
    path: "/charachter/:id",
    validate: (route) => /^\d+$/.test(route.params.id),
});

</script>