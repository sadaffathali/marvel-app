import { useProductStore } from "/stores/state";
export default async (prop) => {
  const store = useProductStore();
  const publicKey = store.publicKey;

  const ts = store.ts;
  const hash = store.hash;

  const apiUrl = `https://gateway.marvel.com/v1/public/characters/${prop}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  const { data, error } = await useAsyncData(() => $fetch(apiUrl));

  if (error.value) {
    throw createError({
      ...error.value,
    });
  }

  return data;
};
