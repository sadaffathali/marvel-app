import { useProductStore } from "/stores/state";

export default async (payload) => {
  const store = useProductStore();
  const publicKey = store.publicKey;

  const ts = store.ts;
  const hash = store.hash;

  const apiUrl = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}${
    payload !== undefined && payload.page ? "&offset=" + payload.page * 20 : ""
  }${
    payload !== undefined && payload.name
      ? "&nameStartsWith=" + payload.name
      : ""
  }`;
  const { data, error } = await useAsyncData(() => $fetch(apiUrl));

  if (error.value) {
    throw createError({
      ...error.value,
    });
  }

  return data;
};
