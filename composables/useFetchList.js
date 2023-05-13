export default async (payload) => {
  const { publicKey } = useUtils();

  const { ts } = useUtils();
  const { hash } = useUtils();

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
