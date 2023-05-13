export default async () => {
  const { publicKey } = useUtils();

  const { ts } = useUtils();
  const { hash } = useUtils();

  const apiUrl = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  const { data, error } = await useAsyncData(() => $fetch(apiUrl));

  if (error.value) {
    throw createError({
      ...error.value,
    });
  }

  return data;
};
