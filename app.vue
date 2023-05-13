<template>
  <div>
    <NuxtLayout>
      <Suspense>
        <NuxtPage />
        <template #fallback>
          Loading...
        </template>
      </Suspense>
    </NuxtLayout>
  </div>
</template>

