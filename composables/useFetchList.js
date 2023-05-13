import CryptoJS from "crypto-js";

export default async () => {
  const publicKey = "ca276f1f1ea2910a9ab6bdad77351456";
  const privateKey = "08215c72d6eeeb3f04362005654dc13baa913d9b";

  const ts = new Date().getTime().toString();
  const hash = CryptoJS.MD5(ts + privateKey + publicKey);

  const apiUrl = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  const { data, error } = await useAsyncData(() => $fetch(apiUrl));

  if (error.value) {
    throw createError({
      ...error.value,
    });
  }

  return data;
};
